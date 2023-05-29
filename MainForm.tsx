import { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {
  Card,
  Button,
  Alert,
  Toast,
  ToastContainer,
  Form,
} from "react-bootstrap";
import Particle from "./components/Particle";
import "./MainForm.css";

const MainForm = (props:any) => {
  const [isPredicted, setIsPredicted] = useState(false);
  const [rating, setRating] = useState(0.0);
  const [showAlert,setShowAlert] = useState(false);
  const [form, setForm] = useState({
    director: "",
    actor1: "",
    actor2: "",
    genre: "",
    budget: 0,
  });
  const setField = (field: string, value: any) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  function handleSearchAgainBtn(){
    setIsPredicted(false);
    setForm({
      ["director"]: "",
      ["actor1"]: "",
      ["actor2"]: "",
      ["genre"]: "",
      ["budget"]: 0     
    })
  }

  const handleDashboardBtn = ()=>{
    props.setOnDashboard(true);
  }

  const predictRating = async (e: any) => {
    e.preventDefault();
    if(form.genre=="" || form.actor1=="" || form.director=="" || form.actor2==""){
      handleSearchAgainBtn();
      setShowAlert(true);
    }
    if(isPredicted==false){
      console.log("in");
      const movieData = {
        exp1: form.genre,
        exp2: form.actor1,
        exp3: form.director,
        exp4: form.actor2,
        exp5: form.budget,
      };
      console.log(movieData);
      console.log(form);
      try {
        await axios({
          method: "post",
          url: "http://127.0.0.1:8080/movies",
          data: movieData,
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          console.log(rating);
          setRating(res.data.prediction);
          console.log(rating);
          setIsPredicted(true);
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <Particle />
      <div>
      <ToastContainer className="toastContainer" position="top-end">
            <Toast
              bg="danger"
              onClose={() => setShowAlert(false)}
              show={showAlert}
              delay={3000}
              autohide
            >
              <Toast.Header>
                <strong className="me-auto">Notification</strong>
                <small></small>
              </Toast.Header>
              <Toast.Body className="toastText">Fill all details properly</Toast.Body>
            </Toast>
          </ToastContainer>
        <Card className="AppMainCard">
          {!isPredicted && (
            <div>
              <h1 className="mainHeading">Enter Movie Details</h1>
              <Form onSubmit={predictRating}>
                <Form.Group className="mb-3" controlId="formDirector">
                  <Form.Control
                    type=""
                    placeholder="Enter Director Name"
                    onChange={(e) => setField("director", e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="actor1">
                  <Form.Control
                    type=""
                    placeholder="Enter First Actor Name"
                    onChange={(e) => setField("actor1", e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formActress">
                  <Form.Control
                    className="formInput"
                    type=""
                    placeholder="Enter Second Actor Name"
                    onChange={(e) => setField("actor2", e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGenre">
                  <Form.Control
                    type=""
                    placeholder="Enter Movie Genre"
                    onChange={(e) => setField("genre", e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBudget">
                  <Form.Control
                    type=""
                    placeholder="Enter Movie Budget"
                    onChange={(e) => setField("budget", e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          )}
          {isPredicted && (
            <div>
              <h1 className="mainHeading">IMDB rating of Movie</h1>
              <h4>{rating}</h4>
              <button className="cardBtn" onClick={handleSearchAgainBtn}>Search again</button>
              <button className="cardBtn" onClick={handleDashboardBtn}>Dashboard</button>
            </div>
          )}
        </Card>
      </div>
    </>
  );
};

export default MainForm;
