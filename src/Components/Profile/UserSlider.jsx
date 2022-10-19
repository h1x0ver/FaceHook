import React, {useEffect, useState} from 'react';
import '../../Components/Feed/StoryReel.css'
import {SwiperSlide, Swiper} from "swiper/react";
import 'swiper/css'
import axios from "axios";
import UserCard from "../Cards/UserCard";

const StoryReel = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("Utoken"))
        axios.get(`https://localhost:44347/api/Friend/friendSuggestion`,
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            })

            .then(resp => setUsers(resp.data))
    }, [])
    console.log(users)
    return (

        <div className='storyReel'>
            <Swiper
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },

                    640: {
                        slidesPerView: 4,
                        spaceBetween: 39,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    }
                }}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <div className="row">

                    {
                        users&&users.map(e => {
                            return (
                                <SwiperSlide>
                                    <div className="salam">
                                    <div className="">
                                            <UserCard
                                                key={e.id}
                                                userimagesrc={`https://localhost:44347/img/${e.imageUrl}`}
                                                firstname={e.firstname}
                                                lastname={e.lastname}
                                                id={e.id}
                                            />
                                        </div>
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