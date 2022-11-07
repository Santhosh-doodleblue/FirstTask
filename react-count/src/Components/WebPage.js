import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Luffy from "../Components/images/luffy.jpg";
import Zoro from "../Components/images/zoro.jpg";
import Sanji from "../Components/images/sanji.jfif";
import Nami from "../Components/images/nami.jfif";
import Usopp from "../Components/images/usopp.jfif";
import { GiAnglerFish } from "react-icons/gi";

function Web() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <a href="#" className="navbar-brand ">
            ONE <span className="text-warning">PIECE</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item px-3">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item px-3">
                <a href="#home" className="nav-link">
                  Team
                </a>
              </li>
              <li className="nav-item px-3">
                <a href="#home" className="nav-link">
                  Maps
                </a>
              </li>
              <li className="nav-item px-3">
                <a href="#home" className="nav-link">
                  Characters
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="bg-dark text-light p-5 text-center text-sm-start">
        <div className="container d-sm-flex align-items-center ">
          <div className="me-5">
            <h1>
              Searching for <span className="text-warning"> One Piece </span>?
            </h1>
            <p className="lead my-5">
              Then Create your Pirate Team and enter the Grand Line . Lorem
              totam maiores! Placeat, mollitia esse odio autem recusandae
              laborum corrupti quaerat minus dolorem earum fugit, molestias
            </p>
            <button className="btn btn-info btn-lg">Create Team</button>
          </div>
          <div>
            <img
              className="img-fluid w-75 d-none d-md-block ms-5"
              src={Luffy}
              alt=""
            ></img>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="container">
          <div className="row g-4text-center">
            <div className="col-md-4 mb-5">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <h1>
                    <GiAnglerFish />
                  </h1>
                  <h3 className="card-title mb-3">Fishmen Team</h3>
                  <p className="card-text mb-3">
                    Lorem totam maiores! Placeat, mollitia esse odio autem
                    recusandae laborum corrupti quaerat minus dolorem earum
                    fugit, molestias recusandae laborum corrupti quaerat minus
                  </p>
                  <button className="btn btn-info">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <h1>
                    <GiAnglerFish />
                  </h1>
                  <h3 className="card-title mb-3">Fishmen Team</h3>
                  <p className="card-text mb-3">
                    Lorem totam maiores! Placeat, mollitia esse odio autem
                    recusandae laborum corrupti quaerat minus dolorem earum
                    fugit, molestias recusandae laborum corrupti quaerat minus
                  </p>
                  <button className="btn btn-info">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <h1>
                    <GiAnglerFish />
                  </h1>
                  <h3 className="card-title mb-3">Fishmen Team</h3>
                  <p className="card-text mb-3">
                    Lorem totam maiores! Placeat, mollitia esse odio autem
                    recusandae laborum corrupti quaerat minus dolorem earum
                    fugit, molestias recusandae laborum corrupti quaerat minus
                  </p>
                  <button className="btn btn-info">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 bg-secondary">
        <div className="container">
          <h2 className="text-center text-white mb-5"> Our Team</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img className="img-fluid w-100" src={Zoro} alt="" />
                  <h3>Roronoa Zoro</h3>
                  <h5>Swordsmen</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img className="img-fluid w-100" src={Sanji} alt="" />
                  <h3>Sanji</h3>
                  <h5>Cook</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img className="img-fluid w-100" src={Nami} alt="" />
                  <h3>Nami</h3>
                  <h5>Navigator</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img className="img-fluid w-100" src={Usopp} alt="" />
                  <h3>Usopp</h3>
                  <h5>Vice-Captain</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Web;
