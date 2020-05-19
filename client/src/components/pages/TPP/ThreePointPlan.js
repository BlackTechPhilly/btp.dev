import React, { Component } from 'react'; 

import { Container, Row, Col } from 'react-bootstrap'; 

import Inclusion from './Inclusion';
import Support from './Support';
import Purpose from './Purpose'; 


export class TPP extends Component {

    constructor(props) {
        super(props)

    } 

    //fix the images so they're more centered


    render () {
        return(
            <div>
                <Container>
                    <h1> Our Three Point Plan</h1>
                    <Row >
                        <Col style={{textAlign: 'center'}}>
                            <div>
                                <Inclusion />
                            </div>
                            <p>
                            BTP is an inclusive space for Black tech professionals to network and build bonds, 
                            but we’re also a welcoming community for tech professionals of all colors, sexes, creeds, 
                            orientations and levels of career experiences. No code switching necessary here- Just code. 
                            </p>
                        </Col>
                        <Col  style={{textAlign: 'center'}}>
                            <div>
                                <Support /> 
                            </div>
                            <p>
                            BTP is a program dedicated to solidarity through learning. We strive to help our members reach 
                            their full potential and reach their career goals as tech professionals through mentoring, tutoring, 
                            and career oriented programming, as well as provide real world experience via coding projects.
                            </p>     
                        </Col>
                        <Col  style={{textAlign: 'center'}}>
                            <div>
                                <Purpose />
                            </div>
                            <p>
                            BTP’s primary mission is to get more Black people into professional tech roles. With our projects and related 
                            programming we aim to provide our members with the opportunity to not only reinforce their portfolios with robust 
                            projects and experience but help them land employment opportunities through our relationships with employers across 
                            the city and surrounding areas.
                            </p>
                            
                        </Col>
                    </Row>
                </Container>

            </div>
        
    
    )}
}

export default TPP; 