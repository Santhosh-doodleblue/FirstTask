import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Luffy from "../Components/luffy.jpg";
import Zoro from "../Components/zoro.jpg";
function Bootstrap() {
  return (
    <>
      <div>
        <div className="container ">
          <div className="row ">
            <div className=" col-md-6 ">
              <img className="img-thumbnail " src={Luffy} alt="" />
              <h1>Monkey D Luffy</h1>
              <h3>The King Of Pirates</h3>
              <p>
                Lorem praesentium non corporis totam maiores! Placeat, mollitia
                esse odio autem recusandae laborum corrupti quaerat minus
                dolorem earum fugit, molestias velit expedita
                maiores!praesentium non corporis totam maiores! Placeat,
                mollitia esse odio autem recusandae laborum corrupti quaerat
                minus dolorem earum fugit, molestias velit expedita maiores!
              </p>
            </div>
            <div className="col-md-6  ">
              <img className="img-thumbnail" src={Zoro} alt="" />
              <h1> Roronoa Zoro</h1>
              <h3>World's Best Swordsmen</h3>
              <p>
                Lorem praesentium non corporis totam maiores! Placeat, mollitia
                esse odio autem recusandae laborum corrupti quaerat minus
                dolorem earum fugit, molestias velit expedita
                maiores!praesentium non corporis totam maiores! Placeat,
                mollitia esse odio autem recusandae laborum corrupti quaerat
                minus dolorem earum fugit, molestias velit expedita maiores!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bootstrap;
