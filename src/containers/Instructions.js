import React, { Component } from 'react';
import './Instructions.css';
import { Redirect } from "react-router-dom";

class Instructions extends Component {

    constructor(props) {
        super(props);
        this.state = {
          continue: false,
        }
      }

      keyFunction = (event) => {
        if(event.keyCode === 81) {
          this.setState((state, props) => ({
            continue: true
          }));
        }
      }

      componentDidMount(){
        document.addEventListener("keydown", this.keyFunction, false);
      }
      componentWillUnmount(){
        document.removeEventListener("keydown", this.keyFunction, false);
      }

      render() {

        if(this.state.continue === true){
          return <Redirect to="/Trial_P" />
        }

        return (
          <div className="Instructions">
            <input type="hidden"/>
            <header className="Instructions-header">
            <div className="text-container">
              <p className="Instructions-text">
                This is a vision test.
                <br /><br /> A visual white noise (similar to static on a TV screen) will be shown throughout the experiment.
                <br /><br /> A striped texture might appear inside the white noise when a tone is played.
                <br /><br /> Press <b> "Q"/YES </b> if you <b> DO </b>see the stripes.
                <br /><br /> Press <b> "E"/NO </b> if you <b> DO NOT </b> see the stripes.
                <br /><br /> You should give a response every time you hear the tone.
                <br /><br /> Please respond as <b> QUICKLY </b> and as <b> ACCURATELY </b> as you <b> POSSIBLY CAN </b>
                <br /><br /> The next two parts will be practice sessions to make sure you understand the instructions.
                <br /><br /><br /> PRESS "Q"/YES TO BEGIN THE PRACTICE SESSIONS.

              </p>
            </div>
            </header>
          </div>
        );
      }
    }

export default Instructions;
