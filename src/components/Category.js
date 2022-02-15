import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getShelves } from "../store";
import BookCard from "./BookCard";
const Category = (props) => {
  const shelves = useSelector(state => state.store.items)
  const dispatch = useDispatch();
  useEffect(() => {
    // get the data first time the home is rendered
    dispatch(getShelves);
  }, [dispatch]);
  return (
    <div>
      <h1>{props.title}</h1>
      <hr />
      <Container className="pb-5">
        <Row className="gap-5">
          {(shelves &&
            shelves.map((item) => {
              if (
                item.shelf.toLowerCase() ===
                props.title.split(" ").join("").toLowerCase()
              ) {
                return (
                  <BookCard
                    key={item.id}
                    data={item}
                  />
                );
              } else return false;
            })) || <Container>THere is no Books in the shelf</Container>}
        </Row>
      </Container>
    </div>
  );
};

export default Category;
