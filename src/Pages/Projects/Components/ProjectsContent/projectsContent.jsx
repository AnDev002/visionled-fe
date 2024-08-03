import React from 'react'
import FullpageScroll from '../fullpageScroll'
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

import { useNavigate, useParams } from 'react-router-dom'
import * as ProjectServices from "../../../../Services/ProjectServices"
import { useQuery } from '@tanstack/react-query'
import BtnSeeMore from '../../../Components/btnSeeMore'


const ProjectCard = ({ onClickEvent, title, image, description }) => (
  <Card 
  sx={{
    cursor: "pointer",
    border: '1px solid black', 
    display: 'flex'
  }}
  onClick={onClickEvent} 
  >
  <CardMedia
    component="img"
    alt={title}
    height="auto"
    image={image}
    title={title}
    sx={{
      cursor: "pointer",
      userSelect: 'none',
      width: '30vw',
      height: 'auto'
    }}
  />
  <CardContent sx={{
    backgroundColor: 'transparent', 
  }}>
    <Typography variant="h5" component="div" sx={{
                                      fontFamily: "'Times New Roman', Times, serif"}}>
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{
      overflow: 'hidden', 
      textOverflow: 'ellipsis', 
      display: '-webkit-box',
      '-webkit-line-clamp': 3, 
      '-webkit-box-orient': 'vertical',
      wordWrap: 'break-word',
                                      fontFamily: "'Times New Roman', Times, serif"
    }}>
      {description}
    </Typography>
  </CardContent>
</Card>
);

export default function ProjectsContent() {

  const navigate = useNavigate();
  const getAllProject = async () => {
      const res = await ProjectServices.GetAllProject();
      return res;
  }
  const { isLoading, data } = useQuery({ queryKey: ['projects'], queryFn: getAllProject })
  const handleNavLink = (projectId) => {
    console.log("ok");
      navigate(`/project-details/${projectId}`);
  }

  
  return (
    <>
        {/* <FullpageScroll />*/}
        <div className="layer" style={{background: '#373737', position: 'fixed', top: '0', left: '0', right: '0', bottom: '0'}}></div>
        <Box sx={{
                    marginTop: {
                        xs: "65px",
                        sm: "70px",
                        md: "75px",
                        lg: "80px",
                    },
                    background: "#373737",
                    position: 'relative',
                    zIndex: 80,
                    display: 'flex',
                    flexDirection: {
                      xs: 'column',
                      sm: 'column',
                      md: 'row',
                    },
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    padding: '20px',
                    gap: '20px'}}>
                      <Grid container spacing={3}>
                      {
                        isLoading === false && data?.data.length > 0 &&
                        data.data.map((item, index) => (
                          <Grid item key={index} xs={6} sm={12} md={12}>
                            <ProjectCard onClickEvent={() => handleNavLink(item._id)} style={{ mgLeft: '0', transform: 'none' }} title={item.name} image={item.image} description={item.description} />
                          </Grid>
                        ))}
                      </Grid> 


                    </Box>

        {/*Content Here */}
    </>
  )
}
