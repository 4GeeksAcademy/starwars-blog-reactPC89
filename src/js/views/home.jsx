import React from "react";
import { ContenedorPersonajes } from "./contenedor-personajes.jsx";
import { ContenedorPlanetas } from "./contenedor-planetas.jsx"
import { ContenedorVehiculos } from "./contenedor-vehiculos.jsx";


export const Home = () => {




	return (
			
			<div className="container-fluid bg-black">
				<ContenedorPersonajes />
				<ContenedorPlanetas />
				<ContenedorVehiculos />
			</div>

	)

};
