import React from 'react';
import './Apply.css';
import Backdrop from '../Backdrop/Backdrop';

const Apply = ( props ) => {

    let name = 'apply-section';
    let backdrop = null;

    if ( props.show ) {
        name = 'apply-section ap-active';
        backdrop = <Backdrop toggle={props.toggle} />;
    } else {
        name = 'apply-section';
        backdrop = null;
    }

    return (
        <React.Fragment>
            <div className={ name }>
                <div className='icon' id='hacker'>
                    <img src='/Hacker-Icon.png' alt='hacker icon' />
                    <p className='icon-name'>Hacker</p>
                </div>
                <div className='icon' id='mentor'>
                    <img src='/Mentor-Icon.png' alt='mentor icon' />
                    <p className='icon-name'>Mentor</p>
                </div>
                <div className='icon' id='sponsor'>
                    <img src='/Sponsor-Icon.png' alt='sponsor icon' />
                    <p className='icon-name'>Sponsor</p>
                </div>
            </div>
            { backdrop }
        </React.Fragment>
    );
};

export default Apply;
