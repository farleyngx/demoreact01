import React, { Component } from "react";
import { Players } from "../share/ListOfPlayers";
import PlayerPresentation from "./PlayerPresentation";
import PsgPlayers from "./PsgPlayers";

const psgPlayers = Players.filter((player) => player.club === "PSG");

export default class ComContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: Players,
      psgData: psgPlayers,
    };
  }

  render() {
    return (
      <>
        <PlayerPresentation dataFromContainer={this.state.players} />;
        <hr />;
        <PsgPlayers psgFromContainer={this.state.psgData} />;
      </>
    );
  }
}
