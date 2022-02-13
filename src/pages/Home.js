import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Category from "../components/Category";
import { udAPI } from "../store/BookAPI";
const Home = () => {
  // use State to store data
  const [data, setdata] = useState([]);
  const [initial,setInitial] =useState(true)
  useEffect(() => {
    // get the data first time the home is rendered
    if(initial){

    udAPI.get("/books").then((response) => {
      setdata(response.data.books);
    });}
    console.log(data)
    
    setInitial(false)
  }, [data,initial]);
  
  
  return (
    <>
      <div>
        <Container>
          <Category title={"Currently Reading"} data={data} changeHandler={setInitial}/>
          <Category title={"Want to Read"} data={data} changeHandler={setInitial} />
          <Category title={"Read"} data={data} changeHandler={setInitial}/>
        </Container>
      </div>
    </>
  );
};

export default Home;
