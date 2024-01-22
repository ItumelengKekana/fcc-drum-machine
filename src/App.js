import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

import heat1 from "./assets/Heater-1.mp3";
import heat2 from "./assets/Heater-2.mp3";
import heat3 from "./assets/Heater-3.mp3";
import heat4 from "./assets/Heater-4.mp3";
import clap from "./assets/Clap.mp3";
import closed_hh from "./assets/Closed-HH.mp3";
import kick_n_hat from "./assets/Kick_n_Hat.mp3";
import kick from "./assets/Kick.mp3";
import open_hh from "./assets/Open-HH.mp3";

function App() {
  const [display, setDisplay] = React.useState("");
  const [volume, setVolume] = React.useState(0.6);
  const [power, setPower] = React.useState(false);

  //__html is recommended when using dangerouslySetInnerHTML
  const displayValue = { __html: display ? display : "" };

  React.useEffect(() => {
    if (!power) {
      setDisplay("");
      document.getElementById("display").innerHTML = "";
    }
    const handleKeys = (event) => {
      if (power) {
        switch (event.key) {
          case "q":
          case "Q":
            setDisplay("Heater-1");
            playAudioWithKeys("Q");
            break;
          case "w":
          case "W":
            setDisplay("Heater-2");
            playAudioWithKeys("W");
            break;
          case "e":
          case "E":
            setDisplay("Heater-3");
            playAudioWithKeys("E");
            break;
          case "a":
          case "A":
            setDisplay("Heater-4");
            playAudioWithKeys("A");
            break;
          case "s":
          case "S":
            setDisplay("Clap");
            playAudioWithKeys("S");
            break;
          case "d":
          case "D":
            setDisplay("Open-HH");
            playAudioWithKeys("D");
            break;
          case "z":
          case "Z":
            setDisplay("Kick-n'-Hat");
            playAudioWithKeys("Z");
            break;
          case "x":
          case "X":
            setDisplay("Kick");
            playAudioWithKeys("X");
            break;
          case "c":
          case "C":
            setDisplay("Closed-HH");
            playAudioWithKeys("C");
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeys);

    return () => {
      window.removeEventListener("keydown", handleKeys);
    };
  }, [power]);

  const playAudioWithKeys = (elementId) => {
    const audio = document.getElementById(elementId);
    // const el = document.getElementsByClassName("drum-pad").innerText;
    //TODO - set display and volume
    audio.volume = volume;
    audio.play();
  };

  const playAudio = (event) => {
    if (power) {
      const element = event.target.innerText;
      setDisplay(event.target.id);
      const audio = document.getElementById(element);
      audio.volume = volume;
      audio.play();
    } else {
      setDisplay("");
      document.getElementById("display").innerHTML = "";
    }
  };

  const changeDisplay = (event) => {
    let volumeVal = `Volume: ${parseInt(event.target.value * 100)}`;
    setVolume(event.target.value);
    setDisplay(volumeVal);
  };

  return (
    <div className="App">
      <Container className="container" id="drum-machine" fluid>
        <Row>
          <Col md={6} sm={12} className="pb-2">
            <Row>
              <Col className="p-2">
                <Button
                  id="Heater-1"
                  className="drum-pad"
                  variant="secondary"
                  size="lg"
                  onClick={(event) => {
                    playAudio(event);
                  }}
                >
                  Q<audio src={heat1} id="Q" className="clip"></audio>
                </Button>
              </Col>
              <Col className="p-2">
                <Button
                  id="Heater-2"
                  className="drum-pad"
                  variant="secondary"
                  size="lg"
                  onClick={(event) => {
                    playAudio(event);
                  }}
                >
                  W<audio src={heat2} id="W" className="clip"></audio>
                </Button>
              </Col>
              <Col className="p-2">
                <Button
                  id="Heater-3"
                  className="drum-pad"
                  variant="secondary"
                  size="lg"
                  onClick={(event) => {
                    playAudio(event);
                  }}
                >
                  E<audio src={heat3} id="E" className="clip"></audio>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="p-2">
                <Button
                  id="Heater-4"
                  className="drum-pad"
                  variant="secondary"
                  size="lg"
                  onClick={(event) => {
                    playAudio(event);
                  }}
                >
                  A<audio src={heat4} id="A" className="clip"></audio>
                </Button>
              </Col>
              <Col className="p-2">
                <Button
                  id="Clap"
                  className="drum-pad"
                  variant="secondary"
                  size="lg"
                  onClick={(event) => {
                    playAudio(event);
                  }}
                >
                  S<audio src={clap} id="S" className="clip"></audio>
                </Button>
              </Col>
              <Col className="p-2">
                <Button
                  id="Open-HH"
                  className="drum-pad"
                  variant="secondary"
                  size="lg"
                  onClick={(event) => {
                    playAudio(event);
                  }}
                >
                  D<audio src={open_hh} id="D" className="clip"></audio>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="p-2">
                <Button
                  id="Kick-n'-Hat"
                  className="drum-pad"
                  variant="secondary"
                  size="lg"
                  onClick={(event) => {
                    playAudio(event);
                  }}
                >
                  Z<audio src={kick_n_hat} id="Z" className="clip"></audio>
                </Button>
              </Col>
              <Col className="p-2">
                <Button
                  id="Kick"
                  className="drum-pad"
                  variant="secondary"
                  size="lg"
                  onClick={(event) => {
                    playAudio(event);
                  }}
                >
                  X<audio src={kick} id="X" className="clip"></audio>
                </Button>
              </Col>
              <Col className="p-2">
                <Button
                  id="Closed-HH"
                  className="drum-pad"
                  variant="secondary"
                  size="lg"
                  onClick={(event) => {
                    playAudio(event);
                  }}
                >
                  C<audio src={closed_hh} id="C" className="clip"></audio>
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={6} sm={12} className="controls-container py-5">
            <Col className="my-3">
              <div
                className="form-check form-switch switch"
                onClick={() => setPower(!power)}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  checked={power ? true : false}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Power
                </label>
              </div>
            </Col>
            <Col className="my-5">
              <p dangerouslySetInnerHTML={displayValue} id="display"></p>
            </Col>
            <Col className="my-3">
              <div className="volume-slider">
                <input
                  type="range"
                  value={volume}
                  max={1}
                  min={0}
                  step={0.01}
                  onChange={(e) => {
                    changeDisplay(e);
                  }}
                />
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
