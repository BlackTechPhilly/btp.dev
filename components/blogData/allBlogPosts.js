import { Component } from "react";
import { Media, Card, Button } from "react-bootstrap";
import style from "../../styles/bootstrapUi.module.css";
import Fade from "react-reveal/fade";
import axios from "axios";
import Link from "next/link";
import { css } from "@emotion/core";
import BeatLoader from 'react-spinners/BeatLoader'

export class AllBlogPosts extends Component {
  state = {
    isLoading: true,
    allPosts: [],
    error: false,
    perPage: 3,
  };

  loadMore = () => {
    this.setState({
      perPage: this.state.perPage + 3,
    });
  };

  loadingData = () => (
  <div style={{textAlign:'center'}}>
      <h1>Loading</h1>     
    </div>
  );

  componentDidMount() {
    // Return Blog posts from Heroku server
    axios.get("https://btpblog.herokuapp.com/tech-posts").then((response) => {
      const content = response.data.reverse();
      this.setState({ isLoading: false, allPosts: content });
    });
  }

  render() {
  
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: transparent;
  `;

    let blogDataList = this.state.allPosts
      .slice(0, this.state.perPage)
      .map((post) => {
        return (
          <div key={post.id} style={{ textAlign: "center" }}>
            <Fade top>
              <Card style={{ margin: "10px" }} className={style.blogCard}>
                <Media>
                  <Media.Body>
                    <br />
                    <h5>{post.title}</h5>
                    <Link
                      href={{
                        pathname: "/post/[postid]",
                        query: { postid: `${post.id}` },
                      }}
                    >
                      <Button style={{backgroundColor:'transparent', border:'none', fontFamily:'Eina01-Regular'}}>Read More</Button>
                    </Link>
                  </Media.Body>
                </Media>
              </Card>
            </Fade>
          </div>
        );
      });
    if (this.state.isLoading === true) {
      return <div style={{textAlign:'center'}}>{this.loadingData()}
               <br/>
              <br/>
            <BeatLoader
            css={override}
            color={'#008be0'}  
            size={75}
            loading={this.state.loading}
            /></div>;
    } else {
      return (
        <div>
          {blogDataList}
          <hr />
          <Button
            size="lg"
            block
            onClick={this.loadMore}
            className={style.buttonStyle}
          style={{fontFamily:'Eina01-Regular'}}
          >
            Load More
          </Button>
        </div>
      );
    }
  }
}

export default AllBlogPosts;
