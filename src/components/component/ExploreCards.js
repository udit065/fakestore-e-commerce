import * as React from 'react';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ExploreCards = () => {
    return (
        <div className='my-28'>
            <div className="row mb-10" data-aos="fade-up">
                <div className="col-12 mb-5 text-center">
                    <h1 className="font-black mt-6 text-[45px] text-black font-oswald  capitalize">From The News</h1>
                    <h6 className='font-oswald '>Keep Updating Everything With Top Brands & Trends</h6>
                </div>
            </div>
            <div className='flex justify-center mx-2 xs:flex-wrap'>
                <div className='xs:mb-10'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://fura.brickthemes.com/wp-content/uploads/2018/10/digital-technologies-real-emotions.jpg"
                                alt="green iguana"
                                className='w-[300px] h-[200px]'
                            />
                            <div className='p-6 xs:text-center'>
                                <h1 className='text-2xl mb-4 font-medium' >Now And Then</h1>
                                <h3 className='text-sm mb-4'>February 18, 2023</h3>
                                <p className='xs:text-center'>
                                    Donec ac risus pharetra, ornare lorem non, malesuada neque. Nunc nisl leo, dapibus sed
                                </p>
                            </div>
                        </CardActionArea>
                    </Card>
                </div>
                <div className='md:mx-6 xs:mb-10'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://fura.brickthemes.com/wp-content/uploads/2018/10/a-smile-is-the-prettiest-thing-you-can-wear-2.jpg"
                                alt="green iguana"
                                className='w-[300px] h-[200px]'
                            />
                            <div className='p-6 xs:text-center' >
                                <h1 className='text-2xl mb-4 font-medium' >The City Fashion Shot</h1>
                                <h3 className='text-sm mb-4'>March 06, 2023</h3>
                                <p className='xs:text-center'>
                                    Donec ac risus pharetra, ornare lorem non, malesuada neque. Nunc nisl leo, dapibus sed
                                </p>
                            </div>
                        </CardActionArea>
                    </Card>
                </div>
                <div>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://fura.brickthemes.com/wp-content/uploads/2018/10/always-buy-two-things-when-i-cant-decide.jpg"
                                alt="green iguana"
                                className='w-[300px] h-[200px]'
                            />
                            <div className='p-6 xs:text-center' >
                                <h1 className='text-2xl mb-4 font-medium' >Smartphone And Real Life</h1>
                                <h3 className='text-sm mb-4'>March 21, 2023</h3>
                                <p className='xs:text-center'>
                                    Donec ac risus pharetra, ornare lorem non, malesuada neque. Nunc nisl leo, dapibus sed
                                </p>
                            </div>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ExploreCards;


