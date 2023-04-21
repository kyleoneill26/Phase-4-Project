import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'


function AboutMe(currentUser) {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>{currentUser.fname}</span></h3>
                      
                            <Row>
                              
                                <Col md={7}>
                            
                
                                </Col>
                               
                            </Row>
                       
                    </Col>
                    <Col md={5}>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe