import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";
import Title from "../Assets/images/pro.png";
import GetStartedImg from "../Assets/images/BEGIN.png";
import Stars from "../Components/Stars/Stars";


function GetStarted() {
  const history = useHistory();

  const homeHandler = () => {
    history.push("/homepage");
  };

  return (
    <div
      style={{
        height: "100vh",
        boxSizing: "border-box",
        background: "radial-gradient(ellipse, #FFF4CC 0%, #171717 100%)",
      }}
    >
      <Stars color="#fff" />
  
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ marginTop: "30vh" }}
      >
     
   <img
          src={Title}
          style={{ width: "20%", minWidth: "200px", }}
          alt="Iftiin-Hub"
        />
       
          <img
          onClick={homeHandler}
            src={GetStartedImg}
            style={{ width: "200px", alignSelf: "center", height: "40px", margin: "50px" }}
            alt="GetStarted"
          />
      
      </Grid>
    </div>
  );
}

export default GetStarted;
