import React, { useState } from 'react';
import Duties from './Duties';
import { JobArticleDiv } from './componentStyles/ComponentsStyles';

const JobExperienceInfo = ({ info, currentItem }) => {
    const { title, description, time_frame } = info[currentItem];
    return (
        <JobArticleDiv>
            <h3>{title}</h3>
            <p>{time_frame}</p>

            <Duties duties={description} />
        </JobArticleDiv>
    );
};

export default JobExperienceInfo;
