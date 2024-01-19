import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const PlanetDetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  actions.detailPlanets(params.idContact);

  return (
    <div className="container">
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="row py-5">
          <div className="col-4"></div>
          <div className="col-8 p-4">
            <h1 className="fw-semibold">{store.selectPlanetProperties.name}</h1>
            <p className="text-uppercase">{store.selectPlanet.description}</p>
          </div>
        </div>
      </div>
      <div className="container text-center border-top border-dark">
        <div className="row mt-4">
          <div className="col-2">
            <p className="fw-bolder">Nombre</p>
            <p className="list-unstyled mb-0 text-uppercase">
              {store.selectPlanetProperties.name}
            </p>
          </div>
          <div className="col-2">
            <p className="fw-bolder">Clima</p>
            <p className="list-unstyled mb-0 text-uppercase">
              {store.selectPlanetProperties.climate}
            </p>
          </div>
          <div className="col-2">
            <p className="fw-bolder">Poblacion</p>
            <p className="list-unstyled mb-0 text-uppercase">
              {store.selectPlanetProperties.population}
            </p>
          </div>
          <div className="col-2">
            <p className="fw-bolder">Periodo Orbital</p>
            <p className="list-unstyled mb-0 text-uppercase">
              {store.selectPlanetProperties.orbital_period}
            </p>
          </div>
          <div className="col-2">
            <p className="fw-bolder">Periodo Rotativo</p>
            <p className="list-unstyled mb-0 text-uppercase">
              {store.selectPlanetProperties.rotation_period}
            </p>
          </div>
          <div className="col-2">
            <p className="fw-bolder">Diametro</p>
            <p className="list-unstyled mb-0 text-uppercase">
              {store.selectPlanetProperties.diameter}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
