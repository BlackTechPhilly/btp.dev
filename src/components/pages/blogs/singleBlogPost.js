import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Jumbotron, Container, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'




const SingleBlog = () => {

    const blog = useParams()
    const blogId = blog.blogId
    const [ singleBlog, setBlog ] = useState([]);

    useEffect(()=>{
        axios.get(`https://btpblog.herokuapp.com/tech-posts/${blogId}`).then((response) => 
        {
            const content = response.data
            setBlog(content)
        })},[blogId, setBlog]
    )
        
    const created = new Date(singleBlog.createdAt)
    const body = JSON.stringify(`${singleBlog.body}`)
    const text = body.split(" ")

    function setCol(words){
        var baseline = 0 
        var endline = 100
        for(var i=0;i < words.length+1;i++) {
            if( i === endline && endline <= words.length ) { 
            var columns = words.slice(baseline, endline)
            console.log(columns)
                baseline = endline; 
                endline+=100;
                
            // return (
            //     <Col>
            //         <p>{columns}</p>
            //     </Col>
            // )
            
            }
            if(endline > words.length) { 
                endline = words.length
            }
            // else if( i!==endline ) continue;  
            
            console.log(`index is ${i}`)
            console.log(`base is ${baseline}`)
            console.log(`count is ${endline}`)  
            
        }
        //console.log(words)
        
        
    }
    console.log(created)

    return (
        <div id="single_blog">
            <Jumbotron>
                <Container key={singleBlog.id}>
                    <div className="blog_title">
                        <h1> { singleBlog.title } </h1>
                        <h2> { singleBlog.subtitle } </h2>
                    </div>
                        <a> Written By: { singleBlog.author } <br></br> Posted: {} </a>
                    
                    <Col> 
                    
                        {/* <p>{ text }</p>  */}
                        {/* <p>{ body }</p> */}
                        {/* <p>{setCol(body)}</p> */}
                        
                    </Col>

                </Container>
            </Jumbotron>
        </div>
    ) 
}

export default SingleBlog