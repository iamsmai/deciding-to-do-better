import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';

class ListOfIdeas extends Component {
    render() {
        return (
            <Row className='content'>
                <Column flex='0 0 2rem' className='side'></Column>
                <Column flex='1'>
                    <Row horizontal='center'>
                        <h2>2019 Monthly Challenge Ideas</h2>
                    </Row>
                    <Row wrap={true}>
                        <Column flex='1'>
                            <Row className='list-header' horizontal='center'>
                                <h3>Additions</h3>
                            </Row>
                            <Row>
                                <ul className='list-of-ideas'>
                                    <li>Asking for help</li>
                                    <li>Being physically uncomfortable</li>
                                    <li>Coding</li>
                                    <li>Cold showers</li>
                                    <li>Community events</li>
                                    <li>Creating something tangible</li>
                                    <li>Documenting each day</li>
                                    <li>Doing a hobby</li>
                                    <li>Doing something that scares you</li>
                                    <li>Exercise</li>
                                    <li>Finding something new to be grateful for</li>
                                    <li>Friend dates</li>
                                    <li>Having a new experience</li>
                                    <li>Learning about/finding a native plant or animal</li>
                                    <li>Learning and using a new word</li>
                                    <li>Listening/communicating better</li>
                                    <li>Listening to an album all the way through</li>
                                    <li>Matchmaking/introducing people</li>
                                    <li>Meditation </li>
                                    <li>Never eating alone</li>
                                    <li>New cultural perspectives</li>
                                    <li>Only buying local</li>
                                    <li>Paying close attention to current events</li>
                                    <li>Political action</li>
                                    <li>Practicing a non-English language</li>
                                    <li>Random acts of kindness</li>
                                    <li>Reading</li>
                                    <li>Rejection</li>
                                    <li>Radical honesty</li>
                                    <li>Saying no to everything</li>
                                    <li>Saying yes to everything</li>
                                    <li>Sharing your story with someone</li>
                                    <li>Tons of sleep (9-10 hours)</li>
                                    <li>Tracking your time</li>
                                    <li>Volunteering</li>
                                    <li>Waking up at 5am</li>
                                    <li>Whole30</li>
                                    <li>Writing</li>
                                    <li>Writing a response to media that stirs you</li>
                                    <li>Writing and/or sending a letter</li>
                                    <li>Yoga</li>
                                </ul>
                            </Row>
                        </Column>

                        <Column flex='1'>
                            <Row className='list-header' horizontal='center'>
                                <h3>Subtractions</h3>
                            </Row>
                            <Row>
                                <ul className='list-of-ideas'>
                                    <li>No buying things</li>
                                    <li>No caffeine, sugar, wheat, animal products, etc</li>
                                    <li>No car</li>
                                    <li>No cell phone</li>
                                    <li>No complaining or expressing negatively</li>
                                    <li>No eating out</li>
                                    <li>No hate</li>
                                    <li>No internet</li>
                                    <li>No multi-tasking</li>
                                    <li>No negative judgment of self or others</li>
                                    <li>No plastic</li>
                                    <li>No politics</li>
                                    <li>No sex and/or masturbation</li>
                                    <li>No social media</li>
                                    <li>No swearing</li>
                                    <li>No trash</li>
                                    <li>No trying to fix others’ problems</li>
                                    <li>No vanity</li>
                                    <li>No yelling</li>
                                </ul>
                            </Row>
                        </Column>
                    </Row>
                </Column>

                <Column flex='0 0 2rem' className='side'></Column>
            </Row>
        )
    }
}

export default ListOfIdeas;