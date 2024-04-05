import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div className="home container-fluid">
        <Navbar isLoggedIn={false} />
        <div className="row homeContainer">
          <div className="col-md-7 text">
            <div className="row">
              <div className="col-12 title">
                <p>Francisco Lopez</p>
              </div>
              <div className="col-12 subheading">
                <p>Auntenticacion con Python Flask y React</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
