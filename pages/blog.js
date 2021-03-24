import AllBlogPosts from "../components/blogData/allBlogPosts"; // Importing the component that displays all blog posts
import { Container, Jumbotron } from "react-bootstrap";
import style from "../styles/bootstrapUi.module.css";

export default function Blog() {
  return (
    <div>
      <Jumbotron fluid className={style.jumbotrons}>
        <Container style={{ height: "700px" }}>
          <h1 style={{ textAlign: "center",fontFamily: "DINCondensed-Bold"
        }}>Black Tech Philly Blog</h1>
          <AllBlogPosts />
        </Container>
      </Jumbotron>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
