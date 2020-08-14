import React, { useState, useEffect } from 'react';
import { Accordion, Container, Card, Col, Row } from 'react-bootstrap'; 

const BlogItem = (props) => {

    const { blogs } = props; 

    const [ blogList, setBlogList ] = useState({

    }); 


    return (
        <div>
          {blogs.map((blog) => {
              return (
                <div>
                    <Card>
                        
                    </Card>
                </div>
              )
          })}
        </div>
        )
}

export default BlogItem; 