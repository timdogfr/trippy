import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Image } from '@chakra-ui/react';

import a from '../images/members/1.png'
import e from '../images/members/5.png'
import h from '../images/samples/2.png'
import f from '../images/members/6.png'
import b from '../images/members/2.png'
import c from '../images/members/3.png'
import d from '../images/members/4.png'
import m from '../images/samples/7.jpg'
import n from '../images/samples/8.png'

import o from '../images/samples/9.png'
import p from '../images/samples/10.png'
import q from '../images/samples/11.png'
import u from '../images/samples/15.png'
import r from '../images/samples/12.png'
import s from '../images/samples/13.png'
import t from '../images/samples/14.png'
import w from '../images/samples/17.png'


function CarouselItem({ src }) {
    return (
        <>
            <Box>
                <Image rounded='12px' px={2} src={src} />
            </Box>
        </>
    )
}

const CC = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <Box transform="rotate(-5deg)" width="105%">
                <Box align="center" my={4}>
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={1250}
                        arrows={false}
                        showDots={false}
                        centerMode={true}
                        pauseOnHover={false}
                    >
                        <CarouselItem src={a} />
                        <CarouselItem src={b} />
                        <CarouselItem src={c} />
                        <CarouselItem src={d} />
                        <CarouselItem src={e} />
                        <CarouselItem src={f} />
                        <CarouselItem src={h} />
                        <CarouselItem src={m} />
                        <CarouselItem src={n} />
                    </Carousel>
                </Box>
                <Box align="center">
                    <Carousel
                        slidesToSlide={-1}
                        swipeable={false}
                        draggable={false}
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={1250}
                        arrows={false}
                        showDots={false}
                        centerMode={true}
                        pauseOnHover={false}
                    >

                        <CarouselItem src={o} />
                        <CarouselItem src={p} />
                        <CarouselItem src={q} />
                        <CarouselItem src={r} />
                        <CarouselItem src={s} />
                        <CarouselItem src={t} />
                        <CarouselItem src={u} />
                        <CarouselItem src={w} />
                    </Carousel>
                </Box>
            </Box>
        </>
    );
}

export default CC

//ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>