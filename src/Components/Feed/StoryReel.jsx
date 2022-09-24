import React from 'react';
import './StoryReel.css'
import Story from "./Story";
import {SwiperSlide, Swiper} from "swiper/react";
import 'swiper/css'

const StoryReel = () => {
    return (

        <div className='storyReel'>
            <Swiper
                spaceBetween={50}
                breakpoints={{
                    375: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    500:{
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
                    1300:{
                        slidesPerView: 3,
                        spaceBetween: 40,
                    }


                }}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <div className="row">
                    <SwiperSlide>
                        <div className="col-3">
                            <Story
                                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROW9ELIO_A7DPfMbZWW1l7siOx2j0LdntWrbj8Au5pnZSxVYAJLl-JFjZR7Gl9z8wyUkQ&usqp=CAU'
                                profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT80lmS918O4AJ-A197bvSjLY9CTHZNmyi4AA&usqp=CAU'
                                title='Huseyn Aliyev'
                            />
                        </div>
                    </SwiperSlide>
                    <div className="col-3">
                        <Story
                            image='https://media.nature.com/lw800/magazine-assets/d41586-019-00653-5/d41586-019-00653-5_16459152.jpg'
                            profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS6qgNkqnT_u92SDRczQ__R2ETzFz00ZFTyg&usqp=CAU'
                            title='Anar'
                        />
                        <SwiperSlide>
                            <div className="col-3">
                                <Story
                                    image='https://www.gettingsmart.com/wp-content/uploads/2014/11/coding-graphic-481x335-1.jpg'
                                    profileSrc='https://i.pinimg.com/236x/f7/d2/b0/f7d2b05bcd8ac67e75023d790b41eddb.jpg'
                                    title='Sadix'
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col-3">
                                <Story
                                    image='https://www.gettingsmart.com/wp-content/uploads/2014/11/coding-graphic-481x335-1.jpg'
                                    profileSrc='https://i.pinimg.com/236x/f7/d2/b0/f7d2b05bcd8ac67e75023d790b41eddb.jpg'
                                    title='Sadix'
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col-3">
                                <Story
                                    image='https://www.gettingsmart.com/wp-content/uploads/2014/11/coding-graphic-481x335-1.jpg'
                                    profileSrc='https://i.pinimg.com/236x/f7/d2/b0/f7d2b05bcd8ac67e75023d790b41eddb.jpg'
                                    title='Sadix'
                                />
                            </div>
                        </SwiperSlide>
                    </div>
                </div>
            </Swiper>
        </div>
    );
};

export default StoryReel;