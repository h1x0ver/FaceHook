import React from 'react';
import './RightbarRow.css'
import {Avatar} from "@material-ui/core";

const RightbarRow = ({src,Icon,title}) => {
    return (
        <div className={'rightbarRow'}>
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <h4>{title}</h4>
        </div>
    );
};

export default RightbarRow;