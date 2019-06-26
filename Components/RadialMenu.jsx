import React from 'react';
import MotionMenu from 'react-motion-menu';
import MediaQuery from 'react-responsive';
import {Tooltip} from 'react-lightweight-tooltip';
import {Link} from 'react-router';
const greenRoundedStyle = {
    content: {
        backgroundColor: '#6ABEDB',
        color: '#FDF3E7',
    },
    tooltip: {
        backgroundColor: '#6ABEDB',
        borderRadius: '10px'

    },
    arrow: {
        borderTop: 'solid #6ABEDB 5px',
    },
};
const CircularMenu = () => (
    <div id="menuContainer">
        <MediaQuery query='(min-device-width: 700px)'>
            <div>
    <MotionMenu
        type="circle"
        margin={160}
        x={0} y={0}
        id="motionMennu"
        >
        <div className="button">
            <Tooltip content="Click me!" styles={greenRoundedStyle}>
                <Link to="#"> <img src={'../Assets/Home.png'}/></Link>
            </Tooltip>

        </div>
        <div className="button">
            <Tooltip content="My Works!" styles={greenRoundedStyle}>
                <Link to="/Projects"><img src={'../Assets/Project.png'}/></Link>
            </Tooltip>
        </div>
        <div className="button">
            <Tooltip content="About Me!" styles={greenRoundedStyle}>
                <Link to="/About"><img src={'../Assets/About.png'}/></Link>
            </Tooltip>
        </div>
        <div className="button">
            <Tooltip content="My Resume!" styles={greenRoundedStyle}>
                <a href="Nivethida_Kumarasamy_Resume.pdf" target="_blank"> <img src={'../Assets/Resume.png'}/></a>
            </Tooltip>
        </div>
        <div>
            <Tooltip content="Connect with me on.." styles={greenRoundedStyle}>
                <a href="https://www.linkedin.com/in/nivethidak/" target="_blank"> <img src={'../Assets/linkedin.png'}/> </a>
            </Tooltip>
        </div>
        <div>
            <Tooltip content="Follow me on.." styles={greenRoundedStyle}>
                <a href="https://twitter.com/Nivethida" target="_blank"> <img src={'../Assets/twitter.png'}/> </a>
            </Tooltip>
        </div>
        <div>
            <Tooltip content="See my other works on.." styles={greenRoundedStyle}>
                <a href="https://github.com/Nivethida" target="_blank"> <img src={'../Assets/gitHub.png'}/> </a>
            </Tooltip>
        </div>
    </MotionMenu>
            </div>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 700px)'>
        <div>
            <MotionMenu
                type="circle"
                margin={100}
                x={0} y={0}
                id="motionMennu"
            >
                <div className="button">
                        <img src={'../Assets/Home.png'}/>
                </div>
                <div className="button">
                        <Link to="/Projects"><img src={'../Assets/Project.png'}/>
                        </Link>
                </div>
                <div className="button">
                        <Link to="/About"><img src={'../Assets/About.png'}/></Link>
                </div>
                <div className="button">
                    <a href="Resume.pdf" target="_blank"> <img src={'../Assets/Resume.png'}/></a>
                </div>
                <div>
                        <a href="https://www.linkedin.com/in/nivethidak/" target="_blank"> <img src={'../Assets/linkedin.png'}/> </a>
                </div>
                <div>
                        <a href="https://twitter.com/Nivethida" target="_blank"> <img src={'../Assets/twitter.png'}/> </a>
                </div>
                <div>
                        <a href="https://github.com/Nivethida" target="_blank"> <img src={'../Assets/gitHub.png'}/> </a>
                </div>
            </MotionMenu>
        </div>
        </MediaQuery>

    </div>
)


export default CircularMenu;
