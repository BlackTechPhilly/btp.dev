import axios from "axios";
import { Component } from "react";
import { Media } from "react-bootstrap";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";

class article extends Component {
  // static async getInitialProps({ query }) {
  //   const id = query.id;
  //   const name = query.name;
  // }
  state = {
    postId: "",
    singlePost: [],
  };

  componentDidMount() {
    // const router = userRouter();
    // const articleId = this.props.match.params.postId;
    // const { article } = router.query;
    // console.log(article);
    // const { id } = this.props.router.query;
    axios
      .get(`https://btpblog.herokuapp.com/tech-posts/5f70d326af0e7b001748d588`)
      .then((response) => {
        const data = response.data;
        this.setState({
          postId: `5f70d326af0e7b001748d588`,
          singlePost: data,
        });
        console.log(data);
        console.log(this.state.singlePost);
      });
  }

  render() {
    let article = this.state.singlePost;
    console.log(article);
    return (
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src=""
          alt="Generic placeholder"
        />
        <Media.Body>{article.title}</Media.Body>
      </Media>
    );
  }
}

export default article;
