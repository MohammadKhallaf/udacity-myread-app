import { Card, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateShelves } from "../store";
import { udAPI } from "../store/BookAPI";

const BookCard = (props) => {
  const bookData = props.data;
  const {
    id: bookID,
    authors,
    title,
    shelf,
    imageLinks: { thumbnail: image },
  } = props.data;
  const dispatch = useDispatch();

  // Update The shelf
  // set to -> want to read
  const toReadHandler = (event) => {
    dispatch(updateShelves(bookID, "wantToRead"));
  };
  // set to -> currently read
  const toCurrentReadHandler = (event) => {
    dispatch(updateShelves(bookID, "currentlyReading"));
  };
  // set to -> read
  const readHandler = (event) => {
    dispatch(updateShelves(bookID, "read"));
  };
  return (
    <Card style={{ maxWidth: "15rem" }}>
      <Card.Img
        src={image}
        alt={title}
        style={{ aspectRatio: "1", objectFit: "cover" }}
      />

      <Card.Body>
        <Card.Title className="fs-5">{title}</Card.Title>
        {authors?.map((item, index) => (
          <Card.Subtitle className="text-muted fs-6" key={index}>
            {item}
          </Card.Subtitle>
        ))}
      </Card.Body>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-key">
          Choose
        </Dropdown.Toggle>

        <Dropdown.Menu align={"end"}>
          <Dropdown.Header>Move to ...</Dropdown.Header>
          <Dropdown.Item onClick={toCurrentReadHandler}>
            {shelf === "currentlyReading" && <span>✓ </span>}
            Currently reading
          </Dropdown.Item>
          <Dropdown.Item onClick={toReadHandler}>
            {shelf === "wantToRead" && <span>✓ </span>}
            Want to read
          </Dropdown.Item>
          <Dropdown.Item onClick={readHandler}>
            {shelf === "read" && <span>✓ </span>}
            Read
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            {!(shelf)  && <span>✓ </span>}
            None
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Card>
  );
};

export default BookCard;
