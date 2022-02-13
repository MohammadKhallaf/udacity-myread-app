import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Category from "../components/Category";
import { udAPI } from "../store/BookAPI";
const Home = () => {
  // use State to store data
  const [data, setdata] = useState([]);
  useEffect(() => {
    // get the data first time the home is rendered
    udAPI.get("/books").then((response) => {
      setdata(response.data.books);
    });
  }, []);
  return (
    <div>
      Hi In Home Page
      <div>
        <Container>
          <Category title={"Currently Reading"} data={data} />
          <Category title={"Want to Read"} data={data} />
          <Category title={"Read"} data={data} />
        </Container>
      </div>
    </div>
  );
};

export default Home;
