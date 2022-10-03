import React from 'react';
import Intro from './Intro/index'
import Reasons from './Reasons/index'
import Guide from './Guide/index'
import Questions from './Questions/index'




const Body = ({data}) => {
    return (
        <div className='body-content'>
            <Intro ></Intro>
            <Reasons data= {data.intros}></Reasons>
            <Guide data= {data.tutorials}></Guide>
            <Questions data ={data.questions}></Questions>
        </div>

    )
}
export default Body;
