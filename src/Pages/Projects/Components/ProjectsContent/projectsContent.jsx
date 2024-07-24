import React from 'react'
import FullpageScroll from '../fullpageScroll'
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

import { useNavigate, useParams } from 'react-router-dom'
import * as ProjectServices from "../../../../Services/ProjectServices"
import { useQuery } from '@tanstack/react-query'


const ProjectCard = ({ title, image, description }) => (
  <Card 
  sx={{
    cursor: "pointer",
    userSelect: 'none',
  }}>
  <CardMedia
    component="img"
    alt={title}
    height="350"
    image={image}
    title={title}
    sx={{
      pointerEvents: 'none',
    }}
  />
  <CardContent>
    <Typography variant="h5" component="div">
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{
      overflow: 'hidden', 
      textOverflow: 'ellipsis', 
      display: '-webkit-box',
      '-webkit-line-clamp': 3, 
      '-webkit-box-orient': 'vertical',
      wordWrap: 'break-word'
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
      navigate(`/project-details/${projectId}`);
  }

  
  return (
    <>
        {/* <FullpageScroll />*/}
        <Box sx={{
                    marginTop: {
                        xs: "65px",
                        sm: "70px",
                        md: "75px",
                        lg: "80px",
                    },
                    background: "#F7F7F7",
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
                        
                       
                        <Grid item xs={12} sm={6} md={4}>
                          <ProjectCard title="Product 2" image="https://www.ikea.com/us/en/images/products/kryssmast-table-lamp-with-led-bulb-nickel-plated__0789157_pe763849_s5.jpg?f=l" description="UxgknA86AqSR3nLoRGetBzM5e5osrJJBJdZkb4NBEWWtv4dJLvIUCJB2j6VB120bKvrKOJZWUxgknA86AqSR3nLoRGetBzM5e5osrJJBJdZkb4NBEWWtv4dJLvIUCJB2j6VB120bKvrKOJZWUxgknA86AqSR3nLoRGetBzM5e5osrJJBJdZkb4NBEWWtv4dJLvIUCJB2j6VB120bKvrKOJZW" />
                        </Grid>
                       
                        <Grid item xs={12} sm={6} md={4}>
                          <ProjectCard title="Product 2" image="https://www.ikea.com/us/en/images/products/kryssmast-table-lamp-with-led-bulb-nickel-plated__0789157_pe763849_s5.jpg?f=l" description="UxgknA86AqSR3nLoRGetBzM5e5osrJJBJdZkb4NBEWWtv4dJLvIUCJB2j6VB120bKvrKOJZWUxgknA86AqSR3nLoRGetBzM5e5osrJJBJdZkb4NBEWWtv4dJLvIUCJB2j6VB120bKvrKOJZWUxgknA86AqSR3nLoRGetBzM5e5osrJJBJdZkb4NBEWWtv4dJLvIUCJB2j6VB120bKvrKOJZW" />
                        </Grid>
                       
                        <Grid item xs={12} sm={6} md={4}>
                          <ProjectCard title="Product 2" image="https://www.ikea.com/us/en/images/products/kryssmast-table-lamp-with-led-bulb-nickel-plated__0789157_pe763849_s5.jpg?f=l" description="UxgknA86AqSR3nLoRGetBzM5e5osrJJBJdZkb4NBEWWtv4dJLvIUCJB2j6VB120bKvrKOJZWUxgknA86AqSR3nLoRGetBzM5e5osrJJBJdZkb4NBEWWtv4dJLvIUCJB2j6VB120bKvrKOJZWUxgknA86AqSR3nLoRGetBzM5e5osrJJBJdZkb4NBEWWtv4dJLvIUCJB2j6VB120bKvrKOJZW" />
                        </Grid>
                       
                        <Grid item xs={12} sm={6} md={4}>
                          <ProjectCard title="Product 2" image="https://www.ikea.com/us/en/images/products/kryssmast-table-lamp-with-led-bulb-nickel-plated__0789157_pe763849_s5.jpg?f=l" description="UxgknA86AqSR3nLoRGetBzM5e5osrJJBJdZkb4NBEWWtv4dJLvIUCJB2j6VB120bKvrKOJZWUxgknA86AqSR3nLoRGetBzM5e5osrJJBJdZkb4NBEWWtv4dJLvIUCJB2j6VB120bKvrKOJZWUxgknA86AqSR3nLoRGetBzM5e5osrJJBJdZkb4NBEWWtv4dJLvIUCJB2j6VB120bKvrKOJZW" />
                        </Grid>
                       
                        <Grid item xs={12} sm={6} md={4}>
                          <ProjectCard title="Product 2" image="https://www.ikea.com/us/en/images/products/kryssmast-table-lamp-with-led-bulb-nickel-plated__0789157_pe763849_s5.jpg?f=l" description="UxgknA86AqSR3nLoRGetBzM5e5osrJJBJdZkb4NBEWWtv4dJLvIUCJB2j6VB120bKvrKOJZWUxgknA86AqSR3nLoRGetBzM5e5osrJJBJdZkb4NBEWWtv4dJLvIUCJB2j6VB120bKvrKOJZWUxgknA86AqSR3nLoRGetBzM5e5osrJJBJdZkb4NBEWWtv4dJLvIUCJB2j6VB120bKvrKOJZW" />
                        </Grid>
                       
                        <Grid item xs={12} sm={6} md={4}>
                          <ProjectCard title="Product 2" image="https://www.ikea.com/us/en/images/products/kryssmast-table-lamp-with-led-bulb-nickel-plated__0789157_pe763849_s5.jpg?f=l" description="UxgknA86AqSR3nLoRGetBzM5e5osrJJBJdZkb4NBEWWtv4dJLvIUCJB2j6VB120bKvrKOJZWUxgknA86AqSR3nLoRGetBzM5e5osrJJBJdZkb4NBEWWtv4dJLvIUCJB2j6VB120bKvrKOJZWUxgknA86AqSR3nLoRGetBzM5e5osrJJBJdZkb4NBEWWtv4dJLvIUCJB2j6VB120bKvrKOJZW" />
                        </Grid>
                       
                        {/* Add more cards as needed */}
                      </Grid>

                    </Box>

        {/*Content Here */}
    </>
  )
}
