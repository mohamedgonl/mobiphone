import React from 'react';
import Intro from './Intro/index'
import Reasons from './Reasons/index'
import Guide from './Guide/index'
import Questions from './Questions/index'
const Body = () => {
    return (
        <div className='body-content'>
            <Intro></Intro>
            <Reasons></Reasons>
            <Guide></Guide>
            <Questions></Questions>
        </div>

    )
}
export default Body;
