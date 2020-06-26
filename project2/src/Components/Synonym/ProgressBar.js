import React from 'react';
import { Progress } from 'reactstrap';

const ProgressBar = () => {
    return (
        <div><div className="text-center">20 of 30</div>
        <Progress value="20" max={30} /></div>
        
    )
}
export default ProgressBar;