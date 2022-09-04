import React from 'react';
import './StoryReel.css'
import Story from "./Story";
const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story
                image='https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg'
                profileSrc='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp'
                title='Huseyn Quliyev'
            />
            <Story
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROW9ELIO_A7DPfMbZWW1l7siOx2j0LdntWrbj8Au5pnZSxVYAJLl-JFjZR7Gl9z8wyUkQ&usqp=CAU'
                profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT80lmS918O4AJ-A197bvSjLY9CTHZNmyi4AA&usqp=CAU'
                title='Huseyn Aliyev'
            />
            <Story
                image='https://media.nature.com/lw800/magazine-assets/d41586-019-00653-5/d41586-019-00653-5_16459152.jpg'
                profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS6qgNkqnT_u92SDRczQ__R2ETzFz00ZFTyg&usqp=CAU'
                title='Anar Balaca'
            />
            <Story
                image='https://www.gettingsmart.com/wp-content/uploads/2014/11/coding-graphic-481x335-1.jpg'
                profileSrc='https://i.pinimg.com/236x/f7/d2/b0/f7d2b05bcd8ac67e75023d790b41eddb.jpg'
                title='Sadix'
            />
            <Story
                image='https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png'
                profileSrc='https://i.pinimg.com/originals/d5/56/3f/d5563fd3f3854c9154c770c3d54da971.png'
                title='Aysel'
            />
        </div>
    );
};

export default StoryReel;