import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { DutiesDiv } from './componentStyles/ComponentsStyles';

const Duties = ({ duties }) => {
    return (
        <DutiesDiv>
            {duties.map((duty, index) => (
                <div key={index} className='description'>
                    <FaAngleDoubleRight />
                    <p>{duty}</p>
                </div>
            ))}
        </DutiesDiv>
    );
};

export default Duties;
