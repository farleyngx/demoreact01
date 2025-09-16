import React, { Component } from 'react'

export default class Content extends Component {
  render() {
    return (
      <div className="main-content container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div>
                <img
                  className="img-fluid"
                  src="public\images\cr.jpg"
                  alt=""
                />
                <h6 className="card-footer text-center">Cristiano Ronaldo</h6>
                <p className="text-center">Manchester United</p>
                <h6 className="card-footer text-center detail">Details</h6>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div>
                <img
                  className="img-fluid"
                  src="public\images\kane.jpg"
                  alt=""
                />
                <h6 className="card-footer text-center">Kante</h6>
                <p className="text-center">Chelsea</p>
                <h6 className="card-footer text-center detail">Details</h6>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div>
                <img
                  className="img-fluid"
                  src="public\images\messi.jpg"
                  alt=""
                />
                <h6 className="card-footer text-center">Messi</h6>
                <p className="text-center">PSG</p>
                <h6 className="card-footer text-center detail">Details</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div>
                <img
                  className="img-fluid"
                  src="public\images\neymar.jpg"
                  alt=""
                />
                <h6 className="card-footer text-center">Neymar</h6>
                <p className="text-center">PSG</p>
                <h6 className="card-footer text-center detail">Details</h6>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div>
                <img
                  className="img-fluid"
                  src="public\images\kane.jpg"
                  alt=""
                />
                <h6 className="card-footer text-center">Kane</h6>
                <p className="text-center">Tottenham</p>
                <h6 className="card-footer text-center detail">Details</h6>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div>
                <img
                  className="img-fluid"
                  src="public\images\haaland.jpg"
                  alt=""
                />
                <h6 className="card-footer text-center">Haaland</h6>
                <p className="text-center">Manchester City</p>
                <h6 className="card-footer text-center detail">Details</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
