import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import { Link } from 'react-router-dom';

import Meetup from './images/meetup.png'

class About extends Component {
    render() {
        return (
            <Row className='content'>
                <Column flex='0 0 2rem' className='side'></Column>
                <Column flex='1' className='body-text-padding'>
                    <Row horizontal='center' wrap={true}>
                        <h2>Missoula's warm & welcoming self-improvement motivation group.</h2>
                    </Row>
                    <Row horizontal='center' wrap={true}>
                        <a href='https://www.meetup.com/Deciding-To-Do-Better/' target='_blank'><img className='meetup' src={Meetup} /></a>
                    </Row>

                    <Row>
                        <p className='body-text'>We are students of the process of self-improvement,
                        self-development, goal-setting, and habit-forming. We have altruistic, creative,
                        educational, financial, fitness, homemaking, professional, social, and spiritual
                        practices and goals. We are here to support each other through success and failure.</p>
                    </Row>
                    <Row>
                        <p className='body-text'>For every month in 2019, we will run and track a daily
                        challenge, which any participant is free to modify as they wish. You can see some
                        of the ideas we've come up with <Link to='/2019'>here.</Link></p>
                    </Row>
                </Column>
                <Column flex='0 0 2rem' className='side'></Column>
            </Row>
        )
    }
}

export default About;