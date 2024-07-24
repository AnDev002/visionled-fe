import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import GlobalFooter from './../../../Components/footer'
import { useNavigate } from 'react-router-dom'
import TextWithReadMore from '../../../Components/textWithReadMore'

export default function HomeFooter() {
    const navigate = useNavigate()
    const navigateAboutUs = () => {
        navigate("/about-us")
    }
    return (
        <>
            {/* <Box sx={{
                padding: {
                    xs: '10px',
                    md: '50px'
                },
                backgroundColor: 'rgba(50, 50, 50)',
            }}>
                <Box sx={{
                    width: '100%',
                    backgroundColor: '#F7F7F7'
                }}>
                    <Grid container sx={{ alignItems: 'center', textAlign: 'center' }}>
                        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Box p={2} sx={{ backgroundColor: '#F7F7F7', padding: '20px' }}>
                                <Typography variant='h3' sx={{ fontSize: '1.5rem', fontFamily: "'Nunito Sans', sans-serif" }}>
                                    Về chúng tôi
                                </Typography>

                                <Box sx={{
                                    display: {
                                        xs: "none",
                                        md: "block",
                                    }
                                }}>
                                    <Typography variant='h5' sx={{ fontSize: '1.3rem', fontFamily: "'Nunito Sans', sans-serif" }}>
                                        Với hơn 20 năm kinh nghiệm chuyên về sản xuất và thiết kế các giải pháp chiếu sáng. Sự thành công của chúng tôi trong ngành công nghiệp này được ghi nhận nhờ khả năng hiểu và đáp ứng mong đợi của khách hàng. Bằng việc hợp tác với đối tác từ khắp nơi trên thế giới, chúng tôi sẽ đem đến cho khách hàng những sản phẩm chất lượng cao với giá thành phù hợp nhất.
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    display: {
                                        xs: "block",
                                        md: "none"
                                    }
                                }}>
                                    <TextWithReadMore text="Với hơn 20 năm kinh nghiệm chuyên về sản xuất và thiết kế các giải pháp chiếu sáng. Sự thành công của chúng tôi trong ngành công nghiệp này được ghi nhận nhờ khả năng hiểu và đáp ứng mong đợi của khách hàng. Bằng việc hợp tác với đối tác từ khắp nơi trên thế giới, chúng tôi sẽ đem đến cho khách hàng những sản phẩm chất lượng cao với giá thành phù hợp nhất." maxLength={100} />
                                </Box>
                                <Typography variant='h3' sx={{ marginTop: "15px", fontSize: '1.5rem', fontFamily: "'Nunito Sans', sans-serif" }}>
                                    Địa chỉ
                                </Typography>
                                <Typography variant='h5' sx={{ fontSize: '1.3rem', fontFamily: "'Nunito Sans', sans-serif" }}>
                                    22 Thanh Nhàn, Hai Bà Trưng, Hà Nội
                                </Typography>
                                <Button color='primary' onClick={navigateAboutUs} sx={{
                                    alignItems: 'center',
                                    margin: '20px 0px',
                                    color: '#F7F7F7',
                                    padding: '8px 15px',
                                    border: '1px solid black',
                                    backgroundColor: 'rgba(50, 50, 50)',
                                    borderRadius: '0',
                                    '&:hover': {
                                        backgroundColor: 'rgba(256, 256, 256)',
                                        border: '1px solid black',
                                        color: 'black',
                                        transition: '.3s',
                                    },
                                }}>Về Chúng Tôi</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{ maxWidth: '100%', height: 'auto', overflow: 'hidden', objectFit: 'cover' }}>
                            <Box sx={{ maxWidth: '100%', height: '100%' }}>
                                <img className="footer-img" src='https://static.wixstatic.com/media/5b4b7e_a3fc1e94fe694859858278948c6969bf~mv2.jpg/v1/fill/w_583,h_685,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5b4b7e_a3fc1e94fe694859858278948c6969bf~mv2.jpg' alt='cutest kitten' />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <GlobalFooter style={{
                backgroundColor: '#F7F7F7',
            }} /> */}
        </>
    )
}