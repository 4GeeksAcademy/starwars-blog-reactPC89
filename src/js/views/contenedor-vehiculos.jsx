import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Vehiculos } from "../component/vehiculos.jsx";



export const ContenedorVehiculos = () => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.obtenerVehiculos()
    }, [])

    return (
        <div className="text-center mt-3">
            <div>
                <h1 className="fw-semibold text-info text-opacity-50">Vehicles</h1>
            </div>
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll custom-scrollbar">
                    {store.vehicles.map((item, index) => (
                        <Vehiculos
                            key={index}
                            name={item.name}
                            model={item.model}
                            cargo_capacity={item.cargo_capacity}
                            id={index + 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    )

};