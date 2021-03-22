import axios from "axios";
import { Component } from "react";
import { Media, Card, Accordion, Container } from "react-bootstrap";
import moment from 'moment'

class article extends Component {
  state = {
    postId: "",
    singlePost: [],
  };

  static getInitialProps({ query }) {
    return { query };
  }

  componentDidMount() {
    axios
      .get(
        `https://btpblog.herokuapp.com/tech-posts/${this.props.query.postid}`
      )
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("could not return data");
        }
        const data = res.data;
        this.setState({
          singlePost: data,
        });
      });
  }

  render() {
    let article = this.state.singlePost;
    console.table(article);
    return (
      <div>
        <Container>
          <Card key={article.id} style={{ backgroundColor: "transparent", textAlign:'center' }}>
            <Card.Img variant="top" src={article.featuredImage} />
            <Media>{article.video}</Media>
            <Card.Body>

              <Card.Title><h1 style={{fontFamily:'DINCondensed-Bold'}}>{article.title}</h1> </Card.Title>
              <br/>
              <Card.Subtitle style={{fontFamily:'ina01-Regular'}} > Authored by {article.author} | Published {moment(article.published,).format('MM/DD/YYYY')} </Card.Subtitle>
              <br/>
            <p><Card.Text>{article.body}</Card.Text></p>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
    // return <h1>{this.state.singlePost.title}</h1>;
  }
}

export default article;
