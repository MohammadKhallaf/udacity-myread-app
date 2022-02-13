import { Container, Row } from "react-bootstrap";
import BookCard from "./BookCard";
const Category = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <hr />
      <Container className="pb-5">
        <Row className="gap-5">
          {props.data.map((item) => {
            if (
              item.shelf.toLowerCase() ===
              props.title.split(" ").join("").toLowerCase()
            ) {
              return <BookCard key={item.id} data={item} />;
            }
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Category;
