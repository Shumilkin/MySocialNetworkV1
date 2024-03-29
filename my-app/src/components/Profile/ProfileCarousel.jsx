import React from "react";

import Slider from "react-slick";

import {RiCalendarTodoFill} from "react-icons/ri";
import {RiMailLine} from "react-icons/ri";
import {RiMedalLine} from "react-icons/ri";
import {RiCreativeCommonsNcFill} from "react-icons/ri";
import {AiOutlineSetting} from "react-icons/ai";
import {MdOutlinePermMedia} from "react-icons/md";
import {AiOutlineUsergroupAdd} from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from './profile.module.css'

class ReactSlickDemo extends React.Component {
    render() {
        const settings = {

            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]


        };
        return (

            <div>

                <Slider {...settings}>
                    <div className={s.profileCarouselItem}>

                            <div className={s.carouselItemLogo}>
                                <RiCalendarTodoFill/>
                                <span>Calendar</span>
                            </div>




                    </div>
                    <div className={s.profileCarouselItem}>
                        <div className={s.carouselItemLogo}>
                            <RiMailLine/>
                            <span>Mails</span>
                        </div>

                    </div>
                    <div className={s.profileCarouselItem}>
                        <div className={s.carouselItemLogo}>
                            <RiMedalLine/>
                            <span>Power</span>
                        </div>

                    </div>
                    <div className={s.profileCarouselItem}>
                        <div className={s.carouselItemLogo}>
                            <RiCreativeCommonsNcFill/>
                            <span>Coins</span>
                        </div>

                    </div>
                    <div className={s.profileCarouselItem}>
                        <div className={s.carouselItemLogo}>
                            <AiOutlineSetting/>
                            <span>Settings</span>
                        </div>

                    </div>
                    <div className={s.profileCarouselItem}>
                        <div className={s.carouselItemLogo}>
                            <MdOutlinePermMedia/>
                            <span>Media</span>
                        </div>

                    </div>
                    <div className={s.profileCarouselItem}>
                        <div className={s.carouselItemLogo}>
                            <AiOutlineUsergroupAdd/>
                            <span>Friends</span>
                        </div>

                    </div>


                </Slider>

            </div>
        );
    }
}

export default ReactSlickDemo
