import { Card, Dropdown } from "react-bootstrap";
import { udAPI } from "../store/BookAPI";

const BookCard = (props) => {
  const bookData = props.data;

  // Update The shelf
  // set to -> want to read
  const toReadHandler = (event) => {
    console.log(event.target);
    udAPI
      .put(`/books/${bookData.id}`, {
        shelf: "wantToRead",
      })
      .then((response) => {
        console.log(response.data);
        props.changeHandler(true);
      });
  };
  // set to -> currently read
  const toCurrentReadHandler = (event) => {
    console.log(event.target);
    udAPI.put(`/books/${bookData.id}`, {
      shelf: "currentlyReading",
    })
    .then((response) => {
      console.log(response.data);
      props.changeHandler(true);
    });
  };
  // set to -> read
  const readHandler = (event) => {
    console.log(event.target);
    udAPI.put(`/books/${bookData.id}`, {
      shelf: "read",
    })
    .then((response) => {
      console.log(response.data);
      props.changeHandler(true);
    });
  };
  return (
    <Card style={{ maxWidth: "15rem" }}>
      <Card.Img
        src={bookData.imageLinks.thumbnail}
        alt={bookData.title}
        style={{ aspectRatio: "1", objectFit: "cover" }}
      />

      <Card.Body>
        <Card.Title className="fs-5">{bookData.title}</Card.Title>
        {bookData.authors.map( (item,index)=>

        <Card.Subtitle className="text-muted fs-6" key={index}>{item}</Card.Subtitle>
        )}
      </Card.Body>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-key">
          Choose
        </Dropdown.Toggle>

        <Dropdown.Menu align={"end"}>
          <Dropdown.Header>Move to ...</Dropdown.Header>
          <Dropdown.Item onClick={toCurrentReadHandler}>
            Currently reading
          </Dropdown.Item>
          <Dropdown.Item onClick={toReadHandler}>Want to read</Dropdown.Item>
          <Dropdown.Item onClick={readHandler}>Read</Dropdown.Item>
          <Dropdown.Item href="#/action-3">None</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Card>
  );
};

export default BookCard;
