import React from 'react';

const ProfileDataInfo = ({friendCount, postCount}) => {
    return (
        <div className="col-md-4">
            <div className="card mb-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Friends</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {friendCount}
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Posts</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {postCount}
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>

        </div>
    );
};

export default ProfileDataInfo;