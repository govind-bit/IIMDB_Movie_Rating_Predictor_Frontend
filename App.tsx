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
import MainForm from "./MainForm";
import Dashboard from "./Dashboard";
import Particle from "./components/Particle";
import "./App.css"

function App () {
  const [onDashboard,setOnDashboard] = useState(true);
  return (
    <div className="MainDiv">
        {onDashboard && (<Dashboard setOnDashboard = {setOnDashboard}/>)}
        {!onDashboard && (<MainForm setOnDashboard = {setOnDashboard}/>)}
    </div>
  );
};

export default App;
