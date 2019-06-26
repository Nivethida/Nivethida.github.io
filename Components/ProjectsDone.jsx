import React from 'react';
import {Link} from 'react-router';

const ProjectsDone  = () => (
    <div>
        <header className="homeHeader">
            <Link to={'/'} ><img src={'../Assets/Home.png'}></img></Link>
        </header>
        <hr></hr>
        <h4>Courses Completed</h4>
        <ul>
            <li>HTML, CSS and Javascript (Front End Web Development) - intermediate level from Pluralsight and CodeAcademy</li>
            <br></br>
            <li>Advanced Javascript ( by Kyle Simpson ) - advanced level from PluralSight</li>
            <br></br>

            <li>Angular JS ( by Tech CBT ) - fundamentals to advanced level</li>
            <br></br>

            <li>Introduction to Node JS ( by Paul O'Fallon ) - intermediate level from Pluralsight</li>
            <br></br>

            <li>React JS Essential Training ( by Eve Porcello ) - intermediate level from Lynda.com</li>
            <br></br>

        </ul>
        <h4>Pet Projects</h4>
        <ul>
            <li>Bookclub app: Designed and developed using MERN (MongoDB Express React Node).
                It acts as a platform for avid book reader where they can share and review
                latest book they read,indulge in new quotes and etc…&nbsp;
                <a className="Links" href="https://github.com/Nivethida/BookClubUsingMERN">Github repo
                </a>.
            </li>
            <li>Bookstore app: Designed and developed using MEAN (MongoDB Express Angular Node).
                Has implemented all CRUD operations using AngularJS and NodeJS platforms.&nbsp;
                <a className="Links" href="https://github.com/Nivethida/BookStore_MEAN">Github repo
                </a>.
            </li>
        </ul>
        <h4>Check out my <a className="Links" href="https://github.com/Nivethida" target="_blank">github</a> for other projects</h4>
    </div>
)

export default ProjectsDone;