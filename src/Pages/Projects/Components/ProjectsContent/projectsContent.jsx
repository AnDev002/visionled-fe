import React from 'react'
import FullpageScroll from '../fullpageScroll'
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

import { useNavigate, useParams } from 'react-router-dom'
import * as ProjectServices from "../../../../Services/ProjectServices"
import { useQuery } from '@tanstack/react-query'
import BtnSeeMore from '../../../Components/btnSeeMore'



export default function ProjectsContent() {

  const navigate = useNavigate();
  const getAllProject = async () => {
      const res = await ProjectServices.GetAllProject();
      return res;
  }
  const { isLoading, data } = useQuery({ queryKey: ['projects'], queryFn: getAllProject })
  const handleNavLink = (projectId) => {
      navigate(`/project-details/${projectId}`);
  }

  
const ProjectCard = ({ onClickEvent, title, image, description, projectId }) => (
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
        display: 'flex',
        flexDirection: 'column', // Đặt chiều dọc cho nội dung
        alignItems: 'center', // Căn giữa theo chiều ngang
        justifyContent: 'center', // Căn giữa theo chiều dọc
        backgroundColor: 'transparent',
        width: '70vw', // Chiếm phần còn lại của thẻ Card
  }}>
    <br />
    <Typography variant="h2" component="div" sx={{fontFamily: "'Times New Roman', Times, serif", textAlign: 'center'}}>
      {title}
    </Typography>
    <br /><br />
    <Typography variant="h4" color="text.secondary" sx={{
      padding: '0px 50px',
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
    <br />
    <Button onClick={() => handleNavLink(projectId)} color='primary' sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '5px 10px',
                            paddingRight: '20px',
                            margin: '5px 0px',
                            marginBottom: '50px',
                            marginLeft: `10px`,
                            color: 'white',
                            padding: '8px 20px',
                            border: '1px solid white',
                            backgroundColor: 'rgba(50, 50, 50, 100%)',
                            borderRadius: '0',
                            '&:hover': {
                                backgroundColor: 'rgba(256, 256, 256, 100%)',
                                border: '1px solid white',
                                color: 'black',
                                borderColor: 'black',
                                transition: '.3s',
                            },

                        }}>Xem Chi Tiết Dự Án</Button>
  </CardContent>
</Card>
);
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
                            <ProjectCard projectId={item._id} style={{ mgLeft: '0', transform: 'none' }} title={item.name} image={item.image} description={item.description} />
                          </Grid>
                        ))}
                      </Grid> 


                    </Box>

        {/*Content Here */}
    </>
  )
}
