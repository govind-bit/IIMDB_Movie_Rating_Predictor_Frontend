import { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  Button,
  Alert,
  Toast,
  ToastContainer,
  Form,
} from "react-bootstrap";
import Typewriter from 'react-ts-typewriter';
import "./Dashboard.css";

const Dashboard = (props: any) => {
  const handlePredictRatingBtnClick = () => {
    props.setOnDashboard(false);
  };

  return (
    <div className="Dashboard">
      <div className="backgroundImg">
      <h1 className="dashboardHeading">
            <Typewriter text='IMDB Movie Rating Predictor' random={100} cursor/>
        </h1>
        <Card className="AppMainCard">
          <div className="cardDiv">
            <Card className="linkCards">
              <img
                className="cardModelImg"
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              />
              <p>
                Our Model Predicts IMDB rating of upcoming movies accurately
                based on model trained on IMDB dataset
              </p>
              <button
                onClick={handlePredictRatingBtnClick}
                className="cardRedirectBtn"
              >
                Predict Rating
              </button>
            </Card>
            <Card className="linkCards">
              <img
                className="cardIMDBImg"
                src="https://m.media-amazon.com/images/G/01/imdb/images/social/imdb_logo._CB410901634_.png"
              />
              <p>
                IMDB is The premier source of global entertainment metadata and
                box office revenue
              </p>
              <a href="https://www.imdb.com/" className="cardRedirectLink">
                Check IMDB
              </a>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
