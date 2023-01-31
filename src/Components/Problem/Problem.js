import React, { useState, useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";

import Spinner from "../Spinner/BlogSpinner";

import "./Problem.css";

export default function App(props) {
  const socket = props.socket;
  const [link, setLink] = useState('');
  const [loader, setLoader] = useState(false);
  const ProblemRef = useRef();

  //Listening to the problem event to set the CP problem
  useEffect(() => {
    socket.on("problem", (problem) => {
      ProblemRef.current.innerHTML = problem;
      setLoader(false);
    });
  }, []);

  const changeHandler = (e) => {
    setLink(e.target.value);
  };

  //Emititng the fetching request for the problem
  const problemFetchHandler = () => {
    if(!link || !link.trim()) return;
    setLoader(true);
    socket.emit("codeforces-problem", link);
    setLink("");
    ProblemRef.current.innerHTML = "";
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "6vh",
            fontSize: "20px",
            padding: "0 0 0 2vh",
            textAlign: "center",
            background: "#8956ff",
            boxSizing: "border-box",
          }}
        >
          <p style={{ fontSize: "18px", color: "#fff", margin: "1vh 0 0 0" }}>
           UPGRADE
          </p>
        </div>
        <Grid
          style={{
            height: "74vh",
            maxWidth: "120vh",
            display: "flex",
            flexFlow: "column",
            padding: "1vh",
            border: "2px solid black",
            margin: "1.5vh",
            borderRadius: "10px",
            backgroundColor: "#313332",
            boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
          }}
        >
          <Grid
            ref={ProblemRef}
            style={{
              overflowY: "auto",
              color: "#fff",
              fontSize: "19px",
              fontFamily: ["Fira Sans", "sans-serif"].join(),
              wordWrap: "break-word",
            }}
          >
           Need more?  <br />
           Upgrade to gain access to upgraded versions of iftiin-upkeep and iftiin-mock and more!
          
            <br />
            <br />
            Level Up:
             <br />{" "}
          
          </Grid>

          <Grid
            style={{
              display: "flex",
              minHeight: "8vh",
              margin: "1vh 0 0 0",
              flexDirection: "row",
              maxWidth: "110vh",
              boxSizing: "border-box",
            }}
          >
        <a href='https://super-quokka-07af64.netlify.app/'>
            <div
              style={{
                background: "#8956ff",
                color: "#fff",
                width: "70px",
                borderRadius: "5px",
                margin: "2.5vh 0 0 1vh",
                padding: "1vh 1vh 0 ",
                cursor: "pointer",
                textAlign: "center",
              }}
              
            >
            Get More
            </div>
          </a>
          </Grid>
          {loader ? <Spinner /> : null}
        </Grid>
      </div>
    </>
  );
}
