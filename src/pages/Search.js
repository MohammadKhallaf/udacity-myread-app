import { useEffect, useState } from "react";
import { Navbar, Container, Form, Row, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import { getShelves } from "../store";
import { udAPI } from "../store/BookAPI";

const Search = () => {
  // use State to store data
  const [bookResult, SetResults] = useState([]);
  const shelves = useSelector((state) => state.store.items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShelves);
  }, [bookResult, dispatch]);

  const searchSubmit = (event) => {
    event.preventDefault();
  };

  const searchHandler = (event) => {
    const query = event.target.value;
    if (query) {
      udAPI
        .post("/search", { query })
        .then((response) => {
          SetResults(response.data.books);
        })
        .catch((err) => {
          console.error("There is an error:", err);
        });
    } else {
      SetResults([]);
    }
  };
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container fluid className="mx-3 justify-content-center ">
            <Form onSubmit={searchSubmit} className="w-50 ">
              <Form.Control
                type="text"
                placeholder="Search ... "
                onChange={searchHandler}
                name="query"
              ></Form.Control>
            </Form>
          </Container>
        </Navbar>
      </header>
      <Container className="p-5">
        <Row className="gap-5">
          {(bookResult.length > 0 &&
            bookResult.map((item) => {
              // get the shelf ID from the get table
              const myItem = { ...item };

              shelves.forEach((book) => {
                if (myItem.id === book.id) {
                  myItem.shelf = book.shelf;
                }
              });
              if (true) {
              }
              return <BookCard key={myItem.id} data={myItem} />;
            })) || (
            <Container className="py-5">
              <Alert>There is no matching search!</Alert>
            </Container>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Search;
