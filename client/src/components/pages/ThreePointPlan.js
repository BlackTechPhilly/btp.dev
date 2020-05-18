import React, { Component } from 'react'; 

import { Container, Row, Col } from 'react-bootstrap'; 


export class TPP extends Component {

    constructor(props) {
        super(props)
    
    }
    

    componentDidMount () {
        const element = document.querySelector(".circular_reveal");
        const inner = document.querySelector(".circular_reveal_content");

        const easing = 0.3; 
        const outScale = 0.6; 
        const inScale = 1;

        let targetScale = outScale; 
        let elementScale = targetScale; 
        let innerScale = 1 / elementScale; 

        element.addEventListener("pointerover", () => {
            targetScale = inScale; 
        })

        element.addEventListener("pointerout", () => {
            targetScale = outScale; 
        })

          const update = () => {
              elementScale += (targetScale - elementScale) * easing; 
              innerScale = 1 / elementScale; 

              element.style.transform = `scale(${elementScale})`; 
              inner.style.transform = `scale(${innerScale})`;

              requestAnimationFrame(update); 
          }

          requestAnimationFrame(update); 

    }    


    render () {
        return(
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div className="circular_reveal">
                                <div className="circular_reveal_content">
                                    <img src={require ("../assets/images/btp_1.jpg")} alt="Inclusion"/>
                                </div>
                            </div>
                            <p>
                            BTP is an inclusive space for Black tech professionals to network and build bonds, 
                            but we’re also a welcoming community for tech professionals of all colors, sexes, creeds, 
                            orientations and levels of career experiences. No code switching necessary here- Just code. 
                            </p>
                        </Col>
                        <Col>
                            <div className="circular_reveal">
                                <div className="circular_reveal_content">
                                    <img src={require ("../assets/images/btp_2.jpg")} alt="Support"/>
                                </div>
                            </div>
                            <p>
                            BTP is a program dedicated to solidarity through learning. We strive to help our members reach 
                            their full potential and reach their career goals as tech professionals through mentoring, tutoring, 
                            and career oriented programming, as well as provide real world experience via coding projects.
                            </p>     
                        </Col>
                        <Col>
                            <div className="circular_reveal">
                                <div className="circular_reveal_content">
                                    <img src={require ("../assets/images/btp_3.jpg")} alt="Purpose"/>
                                </div>
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