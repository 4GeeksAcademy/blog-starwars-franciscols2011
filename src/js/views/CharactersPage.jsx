import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const CharactersPage = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  actions.infoCharacters(params.idContact);

  return (
    <div className="container">
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="row py-5">
          <div className="col-4"></div>
          <div className="col-8 p-4">
            <h1 className="fw-semibold">
              {store.selectCharacterProperties.name}
            </h1>
            <p className="text-uppercase">
              {store.selectCharacter.description}
            </p>
          </div>
        </div>
      </div>
      <div className="container text-center border-top border-dark">
        <div className="row mt-4">
          <div className="col-2">
            <p className="fw-bolder">Nombre</p>
            <p className="list-unstyled mb-0 text-uppercase">
              {store.selectCharacterProperties.name}
            </p>
          </div>
          <div className="col-2">
            <p className="fw-bolder">Nacimiento</p>
            <p className="list-unstyled mb-0 text-uppercase">
              {store.selectCharacterProperties.birth_year}
            </p>
          </div>
          <div className="col-2">
            <p className="fw-bolder">Genero</p>
            <p className="list-unstyled mb-0 text-uppercase">
              {store.selectCharacterProperties.gender}
            </p>
          </div>
          <div className="col-2">
            <p className="fw-bolder">Altura</p>
            <p className="list-unstyled mb-0 text-uppercase">
              {store.selectCharacterProperties.height}
            </p>
          </div>
          <div className="col-2">
            <p className="fw-bolder">Color</p>
            <p className="list-unstyled mb-0 text-uppercase">
              {store.selectCharacterProperties.skin_color}
            </p>
          </div>
          <div className="col-2">
            <p className="fw-bolder">Color de ojos</p>
            <p className="list-unstyled mb-0 text-uppercase">
              {store.selectCharacterProperties.eye_color}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
