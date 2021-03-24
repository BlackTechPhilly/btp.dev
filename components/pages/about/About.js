import React from 'react';
import { Jumbotron, Button, Card, Col, Row } from 'react-bootstrap';


const About = () => {

    return(
        <Jumbotron>
        <h1> Founding Officers of BTP</h1>
        <Row>
            <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://ksassetstore.blob.core.windows.net/assests/Image%20from%20iOS.jpg" /> 
                <Card.Body> 
                    <Card.Title> Ian M. Kimble (He/Him) </Card.Title>
                    <Card.Subtitle> Co-Founder </Card.Subtitle>
                    <Card.Text>
                    Dedicated and ambitious MERN stack web developer and designer with a culmination of over 2 years of experience tutoring, 
                    teaching, providing professional guidance and consultation, and contributing code to start up companies and organizations. 
                    Currently seeking to contribute my unique experiences and skill sets into a full time web developer role
                    </Card.Text>
                    <Button href="https://linkedin.com/in/iank6">
                        Follow Ian On LinkedIn
                    </Button>
                </Card.Body>
            </Card> 
            </Col>     
    
            <Col>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://ksassetstore.blob.core.windows.net/assests/IMG_0491.jpeg" /> 
                <Card.Body> 
                    <Card.Title> Khalil M. Saboor (He/Him) </Card.Title>
                    <Card.Subtitle> Co-Founder </Card.Subtitle>
                    <Card.Text>
                    Software Engineer at GSK. Khalil has worked on multiple teams developing and testing UI components, Alexa and Google Chatbots, 
                    and enterprise-level CMS software. Khalil also has experience working as a Civic Hacker for Code For Philly with Project Phlask. 
                    Khalil has a certificate of completion from Zip Code Wilmington, where he had learned Agile/Scrum, 
                    Object-Oriented Programming, RESTful APIs development, and Angular.js using the Java and TypeScript programming language.
                    </Card.Text>
                    <Button href="https://linkedin.com/in/khalil-saboor">
                        Follow Khalil On LinkedIn
                    </Button>
                </Card.Body>
            </Card>     
            </Col>

            <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://ksassetstore.blob.core.windows.net/assests/ryan.JPG" /> 
                <Card.Body> 
                    <Card.Title> Ryan J. Small (He/Him) </Card.Title>
                    <Card.Subtitle> Co-Founder </Card.Subtitle>
                    <Card.Text>
                    Full-Stack Software Engineer with a strong understanding of Object-Oriented principles, 
                    experience with multiple languages, frameworks, & IDE's, as well as a superb ability to 
                    learn and all the will in the world to do so.
                    </Card.Text>
                    <Button href="https://linkedin.com/in/ryansmall90">
                        Follow Ryan On LinkedIn
                    </Button>
                </Card.Body>
            </Card>  
            </Col>
        </Row>
        </Jumbotron>
    )
}

export default About;