import React from 'react';
import './CreateHistory.css'


const CreateHistory = () => {
    return (
        <div className='createHistory'>
            <h3 style={{marginLeft:'200px'}}>Create History</h3>
            <form>
                <input type="file"/>
            </form>
        </div>

    );
};

export default CreateHistory;