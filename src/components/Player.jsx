import React from "react";
import { Players } from "../share/ListOfPlayers";

export default function Player() {
  return (
    <div className="container">
      <div className="row g-3">
        {Players.map((player) => (
          <div className="col-md-4" key={player.id}>
            <div className="card">
              <img className="img-fluid" src={player.img} alt="" />
              <div className="card-body">
                <h6 className="card-title text-center">{player.name}</h6>
                <p className="text-center">{player.club}</p>
              </div>
              <a href="#" className="card-footer btn btn-primary w-100 detail">Details</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
