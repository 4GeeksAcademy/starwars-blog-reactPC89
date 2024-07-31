import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar bg-black">
			<Link to="/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Star_Wars_logo.png" style={{ width: "150px", flex: "none", margin: "5px" }} alt="Home icon" />
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-outline-warning dropdown-toggle me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favourites {store.favoritesList.length}
					</button>
					<ul className="dropdown-menu dropdown-menu-end" onClick={(e)=> e.stopPropagation()}>
						{store.favoritesList && store.favoritesList.length > 0 ? store.favoritesList.map((item, index) => {
							return (
								<li key={index}><a className="dropdown-item" href="#">{item} <button className="btn btn-danger" onClick={()=> actions.eliminarFavorite(item)}>X</button></a></li>
							)
						})

							:
							<li><a className="dropdown-item" href="#">No hay favoritos</a></li>
						}
					</ul>
				</div>
			</div>
		</nav>
	);
};
