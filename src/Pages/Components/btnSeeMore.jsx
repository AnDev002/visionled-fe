import React from 'react'
// import { Link } from "react-router-dom";
import './globalComponents.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function BtnSeeMore(props) {
    const navigate = useNavigate()
    const handleNavLink = (collectionId) => {
        navigate(`/products/${collectionId}`);
    }
    //     <Link className='btn-dir' to='/collections' style={{ textDecoration: 'none' }}>
    //     <div className="arrow-container">
    //         <div className="arrow"></div>
    //     </div>
    //     <Button color='primary' sx={{
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         color: 'white',
    //         padding: '5px 10px',
    //         paddingRight: '30px',
    //         border: '1px solid black',
    //         backgroundColor: 'rgba(50, 50, 50, 0%)',
    //         borderRadius: '0',
    //         zIndex: '100',
    //         borderColor: 'white',
    //         fontSize: '1rem',
    //         '&:hover': {
    //             backgroundColor: 'rgba(256, 256, 256, 0%)',
    //             border: '1px solid white',
    //             color: 'white',
    //             transition: '.3s',
    //         },
    //     }}>
    //         mua sắm
    //     </Button>
    // </Link>
    return (
        <>
            {
                props.collectionId ?
                    <div className='btn-dir2'>
                        <div className="arrow-container2">
                            <div className="arrow2"></div>
                        </div>
                        <Button onClick={() => handleNavLink(props.collectionId)} color='primary' {...props} sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '5px 10px',
                            paddingRight: '30px',
                            margin: '5px 0px',
                            marginBottom: '50px',
                            marginLeft: `${props.mgLeft}`,
                            transform: `${props.transform}`,
                            color: 'white',
                            padding: '8px 20px',
                            border: '1px solid white',
                            backgroundColor: 'rgba(50, 50, 50, 0%)',
                            borderRadius: '0',
                            '&:hover': {
                                backgroundColor: 'rgba(256, 256, 256, 0%)',
                                border: '1px solid white',
                                color: 'white',
                                transition: '.3s',
                            },

                        }}>Xem Thêm</Button>
                    </div>
                    :
                    <div className='btn-dir2'>
                        <div className="arrow-container2">
                            <div className="arrow2"></div>
                        </div>
                        <Button color='primary' {...props} sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '5px 0px',
                            marginBottom: '50px',
                            marginLeft: `${props.mgLeft}`,
                            transform: `${props.transform}`,
                            color: 'white',
                            padding: '8px 20px',
                            border: '1px solid white',
                            backgroundColor: 'rgba(50, 50, 50, 0%)',
                            borderRadius: '0',
                            '&:hover': {
                                backgroundColor: 'rgba(256, 256, 256, 0%)',
                                border: '1px solid white',
                                color: 'white',
                                transition: '.3s',
                            },

                        }}>Xem Thêm</Button>
                    </div>
            }
        </>
    )
}