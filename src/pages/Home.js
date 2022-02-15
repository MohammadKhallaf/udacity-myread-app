import { Container } from "react-bootstrap";
import Category from "../components/Category";
const Home = () => {
  return (
    <Container className="p-5">
      <Category title={"Currently Reading"} />
      <Category title={"Want to Read"} />
      <Category title={"Read"} />
    </Container>
  );
};

export default Home;
