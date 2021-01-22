import { useRef } from "react";
import "./App.css";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { playRandomSound } from "./utils/soundPicker";
import { drawHand } from "./utils/drawHand";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  //let audio = new Audio("/stopit.mp3");

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("handpose loaded");
    setInterval(() => {
      detect(net);
    }, 1000);

    const detect = async (net) => {
      if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
      ) {
        // Set video props
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;

        // set video with and height
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;

        // set canvas height and width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        // Make detection
        const hand = await net.estimateHands(video);
        // this shows if there is a hand or not
        // console.log(hand);
        const ctx = canvasRef.current.getContext("2d");
        if (hand.length > 0) {
          // console.log(hand);
          console.log("👀 hand detected");
          drawHand(hand, ctx);
          playRandomSound();
          // audio.play();
        }
      }
    };
  };

  runHandpose();

  return (
    <div className="App">
      <header className="App-header">
        <Webcam className="webcam" ref={webcamRef} audio={false} />
        <canvas ref={canvasRef} />
      </header>
    </div>
  );
}

export default App;
