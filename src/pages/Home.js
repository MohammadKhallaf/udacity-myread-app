import {  useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Category from "../components/Category";
import { getShelves } from "../store";
const Home = () => {
  return (
    <>
      <div>
        <Container>
          <Category title={"Currently Reading"}  />
          <Category title={"Want to Read"}  />
          <Category title={"Read"}  />
        </Container>
      </div>
    </>
  );
};

export default Home;
