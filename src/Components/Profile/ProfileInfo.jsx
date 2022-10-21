import React from 'react';

const ProfileInfo = ({firstname,lastname,username,email}) => {
    return (
        <div className="col-md-4">
            <div className="card mb-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Firstname</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {firstname}
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Lastname</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {lastname}
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Username</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {username}
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {email}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProfileInfo;