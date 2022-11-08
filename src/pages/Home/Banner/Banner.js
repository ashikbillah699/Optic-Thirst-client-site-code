import React from 'react';
import Banner1 from '../../../assets/banner/banner1.jpg'
import Banner2 from '../../../assets/banner/banner2.jpg'
import Banner3 from '../../../assets/banner/banner-3.jpg'
import Banner4 from '../../../assets/banner/banner4.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="banner-img carousel-item relative w-full">
                    <img alt='' src={Banner1} className="w-full" />
                </div>
                <div className="w- absolute text-center transform -translate-y-1/2 left-5 right-5 top-1/2 display-block lg:display-none">
                    <h1 className='text-6xl text-white'>OPTIC THIRST - PHOTOGRAPHY</h1>
                    <h1 className='text-5xl text-white my-4'>CAPTURING NATURE LOVE</h1>
                    <h1 className='text-4xl text-white'>CREATING ART ,PASSION</h1>

                </div>
                <div className="w- absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="banner-img carousel-item relative w-full">
                    <img alt='' src={Banner2} className="w-full" />
                </div>
                <div className="w- absolute text-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <h1 className='text-6xl text-white'>OPTIC THIRST - PHOTOGRAPHY</h1>
                    <h1 className='text-5xl text-white my-4'>CAPTURING NATURE LOVE</h1>
                    <h1 className='text-4xl text-white'>CREATING ART ,PASSION</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="banner-img carousel-item relative w-full">
                    <img alt='' src={Banner3} className="w-full" />
                </div>
                <div className="w- absolute text-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <h1 className='text-6xl text-white'>OPTIC THIRST - PHOTOGRAPHY</h1>
                    <h1 className='text-5xl text-white my-4'>CAPTURING NATURE LOVE</h1>
                    <h1 className='text-4xl text-white'>CREATING ART ,PASSION</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className="banner-img carousel-item relative w-full">
                    <img alt='' src={Banner4} className="w-full" />
                </div>
                <div className="w- absolute text-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <h1 className='text-6xl text-white'>OPTIC THIRST - PHOTOGRAPHY</h1>
                    <h1 className='text-5xl text-white my-4'>CAPTURING NATURE LOVE</h1>
                    <h1 className='text-4xl text-white'>CREATING ART ,PASSION</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;