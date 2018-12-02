import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';

class Progress extends Component {
    render() {
        return (
            <Row className='content'>
                <Column flex='0 0 2rem' className='side'></Column>
                <Column flex='1'>
                    <Row horizontal='center'>
                        <h2>Progress in progress ;)</h2>
                    </Row>
                </Column>
                <Column flex='0 0 2rem' className='side'></Column>
            </Row>
        )
    }
}

export default Progress;