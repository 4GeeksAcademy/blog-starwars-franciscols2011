import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const StarshipDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    actions.detailStarship(params.idContact);


    return (
        <div className="container">
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="row py-5">
                    <div className="col-4">
                    </div>
                    <div className="col-8 p-4">
                        <h1 className="fw-semibold">{store.selectStarshipProperties.name}</h1>
                        <p className="text-uppercase">{store.selectStarship.description}</p>
                    </div>
                </div>
            </div>
            <div className="container text-center border-top border-dark">
                <div className="row mt-4">
                    <div className="col-2">
                        <p className="fw-bolder">Nombre</p>
                        <p className="list-unstyled mb-0 text-uppercase">{store.selectStarshipProperties.name}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Modelo</p>
                        <p className="list-unstyled mb-0 text-uppercase">{store.selectStarshipProperties.model}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Capacidad de carga</p>
                        <p className="list-unstyled mb-0 text-uppercase">{store.selectStarshipProperties.cargo_capacity}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Consumibles</p>
                        <p className="list-unstyled mb-0 text-uppercase">{store.selectStarshipProperties.consumables}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Tripulacion</p>
                        <p className="list-unstyled mb-0 text-uppercase">{store.selectStarshipProperties.crew}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Costo</p>
                        <p className="list-unstyled mb-0 text-uppercase">{store.selectStarshipProperties.cost_in_credits}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};