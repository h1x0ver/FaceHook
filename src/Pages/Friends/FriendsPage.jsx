import React from 'react';
import FriendsSidebar from "../../Components/SiderBars/FriendsSidebar";
import '../../Assets/Style/Friend.css'
import Card from "../../Components/UI/Card/Card";

const FriendsPage = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div style={{marginTop: '30px'}} className="friend__sidbar col-2">
                    <FriendsSidebar/>
                </div>
                <div className=" row col-10">
                    <Card
                        username='Huseyn Aliyev'
                        userimage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kHbcU_6EdnXJdLksFGrB5df4nRue1wnFCA&usqp=CAU'
                        position='Magister'
                        posts='40'
                        followers='20'
                        following='10'
                    />

                    <Card
                        username='Huseyn Quliyev'
                        userimage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVgANWFNZitlXr8ANBBXM0raIn0kV8KFl4g&usqp=CAU'
                        position='Programmer'
                        posts='40'
                        followers='20'
                        following='10'
                    />

                    <Card
                        username='Seymur'
                        userimage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXt_jR--JPgWFCr4oKPRdQasMDwcUlDsT81g&usqp=CAU'
                        position='Senior Programmer'
                        posts='40'
                        followers='20'
                        following='10'
                    /><Card
                        username='Huseyn Aliyev'
                        userimage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kHbcU_6EdnXJdLksFGrB5df4nRue1wnFCA&usqp=CAU'
                        position='Magister'
                        posts='40'
                        followers='20'
                        following='10'
                    />

                    <Card
                        username='Huseyn Quliyev'
                        userimage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVgANWFNZitlXr8ANBBXM0raIn0kV8KFl4g&usqp=CAU'
                        position='Programmer'
                        posts='40'
                        followers='20'
                        following='10'
                    />

                    <Card
                        username='Seymur'
                        userimage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXt_jR--JPgWFCr4oKPRdQasMDwcUlDsT81g&usqp=CAU'
                        position='Senior Programmer'
                        posts='40'
                        followers='20'
                        following='10'
                    /><Card
                        username='Huseyn Aliyev'
                        userimage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kHbcU_6EdnXJdLksFGrB5df4nRue1wnFCA&usqp=CAU'
                        position='Magister'
                        posts='40'
                        followers='20'
                        following='10'
                    />

                    <Card
                        username='Huseyn Quliyev'
                        userimage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVgANWFNZitlXr8ANBBXM0raIn0kV8KFl4g&usqp=CAU'
                        position='Programmer'
                        posts='40'
                        followers='20'
                        following='10'
                    />





                </div>
            </div>
        </div>
    );
};

export default FriendsPage;