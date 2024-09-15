import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const VehiclesDetails = () => {

    const { id } = useParams();
    const { actions, store } = useContext(Context);

    useEffect(() => {
        actions.obtenerVehicleDetails(id);
    }, []);

    return (
        <div className="text-center m-2">
            <div className="row">
                <div className="col-md-4">
                    <div className="card" style={{ width: "100%", margin: "10px" }}>
                    <img
                            src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
                            className="card-img-top"
                            alt={store.vehicle.name}
                    />
                    </div>
                </div>

                <div className="col-md-8 d-flex flex-column p-4 justify-content-center">
                    <h3 className="card-title text-start text-warning">{store.vehicle.name}</h3>
                    <p className="text-start text-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, fugiat? Quas quia, minima omnis minus odio labore harum incidunt nam, dolore tempore reiciendis animi autem. Necessitatibus culpa ex odit ut?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In natus ratione laborum explicabo aliquam suscipit, consequatur voluptatibus iusto aut ipsam! Pariatur excepturi animi sit illum quod perferendis beatae ducimus quo?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, fugiat? Quas quia, minima omnis minus odio labore harum incidunt nam, dolore tempore reiciendis animi autem. Necessitatibus culpa ex odit ut?
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula quam nec odio suscipit, sit amet gravida mi dignissim.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula quam nec odio suscipit, sit amet gravida mi dignissim.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In natus ratione laborum explicabo aliquam suscipit, consequatur voluptatibus iusto aut ipsam! Pariatur excepturi animi sit illum quod perferendis beatae ducimus quo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, fugiat? Quas quia, minima omnis minus odio labore harum incidunt nam, dolore tempore reiciendis animi autem. Necessitatibus culpa ex odit ut?
                    </p>
                    <div className="d-flex text-warning">
                        <p className="card-text me-4">Climate: {store.vehicle.climate}</p>
                        <p className="card-text me-4">Population: {store.vehicle.model}</p>
                        <p className="card-text me-4">Orbital Period: {store.vehicle.cargo_capacity}</p>
                        <p className="card-text me-4">Rotation Period: {store.vehicle.vehicle_class}</p>
                        <p className="card-text me-4">Diameter: {store.vehicle.manufacturer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};