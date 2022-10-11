import React, {useEffect, useState} from 'react';
import './StoryReel.css'
import Story from "./Story";
import {SwiperSlide, Swiper} from "swiper/react";
import 'swiper/css'
import axios from "axios";

const StoryReel = () => {
    const [story, setStory] = useState([])
    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("Utoken"))
        axios.get(`https://localhost:44347/api/Story`,
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            })

            .then(resp => setStory(resp.data))
    }, [])
    console.log(story)
    return (

        <div className='storyReel'>
            <Swiper
                spaceBetween={50}
                breakpoints={{
                    375: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    500: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },

                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1300: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    }


                }}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <div className="row">

                    {
                        story && story.map(e => {
                            return (
                                <SwiperSlide>
                                    <div className="col-3">
                                        <Story
                                            image={`https://localhost:44347/img/${e.imageName}`}
                                            profileSrc={`https://localhost:44347/img/${e.user.profileImage}`}
                                            title={`${e.title}`}
                                        />
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </div>
            </Swiper>
        </div>
    );
};

export default StoryReel;