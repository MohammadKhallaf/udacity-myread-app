import { useEffect, useState } from "react";
import { Navbar, Container, Form, Row, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import { getShelves, searchBooks } from "../store";
import { udAPI } from "../store/BookAPI";

const Search = () => {
  // use State to store data
  const [insearch, setInSearch] = useState(false);
  const searchResults = useSelector((state) => state.store.search);
  const shelves = useSelector((state) => state.store.items);

  const dispatch = useDispatch();

  
  useEffect(() => {dispatch(getShelves);}, [searchResults]);

  const readInput = (event) => {
    if (event.target.value) searchBooks(event.target.value);
  };
  const searchSubmit = (event) => {
    event.preventDefault();
    // setQuery(event.target.elements.query.value);
  };
  const focusHandler = () => {
    setInSearch(true);
  };
  const blurHandler = () => {
    setInSearch(false);
  };

  const searchHandler = (event) => {
    dispatch(searchBooks(event.target.value));
  };
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container fluid className="mx-3">
            <Form onSubmit={searchSubmit} className={insearch ? "w-100" : ""}>
              <Form.Control
                type="text"
                placeholder="Search ... "
                onFocus={focusHandler}
                onBlur={blurHandler}
                onChange={searchHandler}
                name="query"
              ></Form.Control>
            </Form>
          </Container>
        </Navbar>
      </header>
      <Container className="p-5">
        <Row className="gap-5">
          {(searchResults.length > 0 &&
            searchResults.map((item) => {
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
