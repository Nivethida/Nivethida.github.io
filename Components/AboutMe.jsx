import React from 'react';
import {Link} from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';
const AboutPage = () => (
    <div>
        <header className="homeHeader">
            <Link to={'/'}><img src={'../Assets/Home.png'}></img></Link>
        </header>
        <hr></hr>
        <h2>Who am I?</h2>
        <p>
            Hello, My name is Nivethida Kumarasamy.
        </p>
        <p>
            I am a software engineer with bachelors degree in Electronics and Communication
        Engineering. I have three plus years of experience in various cycles of
            development. I love working on web technologies. Much of my interest gears
            towards designing highly scalable web applications.
        </p>
        <p>
            I am currently working as Full Stack Developer in Drishticon, Fremont. Here I am part of the Engineering team,
            rewriting Goodcatcher - A Communinty based app which connects people who needs help with people who want to help, in angular.js to react.js.
        </p>
        <br></br>
        <div>
            <Grid>
                <Row>
                    <Col sm={12} md={4}>
            <ul className="aboutlist">
                <li>I Love...</li>
                <br></br>
                    <ul>
                        <li>Programming</li>
                        <li>Testing</li>
                        <li>Fictional books</li>
                        <li>Traveling</li>
                    </ul>
            </ul>
                    </Col>
                    <Col sm={12} md={4}>
            <ul className="aboutlist">
                <li>I've Worked at...</li>
                <br></br>
                <ul>
                    <li>SAP/ARIBA</li>
                    <li>Microsoft/Skype</li>
                    <li>Drishticon</li>
                    <li>Infosys Limited</li>
                </ul>
            </ul>
                    </Col>
                    <Col sm={12} md={4}>
            <ul className="aboutlist">
                <li>I've Lived at...</li>
                <br></br>
                <ul>
                <li>Bay Area, United States</li>
                <li>Schwetzingen, Germany</li>
                <li>Kovai, India</li>
                </ul>
            </ul>
                    </Col>
                </Row>
            </Grid>
            <hr></hr>
            <h3>Contact</h3>
                <p>
                If you would like to contact me, please
                <a className="Links" href="mailto:nivethidak@gmail.com?Subject=Hello%20again" target="_top">
                    &nbsp;email me,</a>&nbsp;send a
                    <a className="Links" href="skype:nivethida.kumarasamy?call">&nbsp;skype</a> invite or call/text my phone at <a href="tel:650-483-3606"><span>(650)-483-3606</span></a>.
            </p>
        </div>
    </div>
);

export default AboutPage;
