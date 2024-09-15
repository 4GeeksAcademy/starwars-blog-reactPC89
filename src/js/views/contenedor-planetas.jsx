import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Planetas } from "../component/planetas.jsx";



export const ContenedorPlanetas = () => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.obtenerPlanetas()
    }, [])

    return (
        <div className="text-center mt-3">
            <div>
                <h1 className="fw-semibold text-info text-opacity-50">Planets</h1>
            </div>
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll custom-scrollbar">
                    {store.planets.map((item, index) => (
                        <Planetas
                            key={index}
                            name={item.name}
                            population={item.population}
                            terrain={item.terrain}
                            id={index + 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    )

};
