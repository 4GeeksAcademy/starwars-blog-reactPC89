import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar bg-black">
			<Link to="/">
				<img src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG11.png" style={{ width: "180px", flex: "none", margin: "8px" }} alt="star wars logo inicio" />
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-outline-warning dropdown-toggle me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favourites {store.favoritesList.length}
					</button>
					<ul className="dropdown-menu dropdown-menu-end bg-secondary" onClick={(e) => e.stopPropagation()}>
						{store.favoritesList && store.favoritesList.length > 0 ? store.favoritesList.map((item, index) => {
							return (
								<li key={index}><a className="dropdown-item" href="#">{item} <button className="btn btn-outline-danger rounded-circle" onClick={() => actions.eliminarFavorite(item)}><i className="fa-solid fa-trash"></i></button></a></li>
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
