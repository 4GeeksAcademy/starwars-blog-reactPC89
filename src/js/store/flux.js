const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			characters: [],
			planets: [],
			vehicles: [],
			character: {},
			planet: {},
			vehicle: {},
			favoritesList: [],

		},
		actions: {

			obtenerPersonajes: async () => {
				try {
					const response = await fetch(`https://swapi.dev/api/people/`, {
						method: `GET`,
					})
					if (response.ok) {
						const data = await response.json()
						setStore({ characters: data.results })
					}
				}
				catch (error) {
					console.log(error);
					return false;
				}
			},

			obtenerPlanetas: async () => {
				try {
					const response = await fetch(`https://swapi.dev/api/planets/`, {
						method: `GET`,
					})
					if (response.ok) {
						const data = await response.json()
						setStore({ planets: data.results })
					}
				}
				catch (error) {
					console.log(error);
					return false;
				}
			},

			obtenerVehiculos: async () => {
				try {
					const response = await fetch(`https://swapi.dev/api/vehicles/`, {
						method: `GET`,
					})
					if (response.ok) {
						const data = await response.json()
						setStore({ vehicles: data.results })
					}
				}
				catch (error) {
					console.log(error);
					return false;
				}
			},


			obtenerPersonajeDetails: async (id) => {
				try {
					const response = await fetch(`https://swapi.dev/api/people/${id}`, {
						method: `GET`,
					})
					if (response.ok) {
						const data = await response.json()
						setStore({ character: data })
					}
				}
				catch (error) {
					console.log(error);
					return false;
				}
			},

			obtenerPlanetaDetails: async (id) => {
				try {
					const response = await fetch(`https://swapi.dev/api/planets/${id}`, {
						method: `GET`,
					})
					if (response.ok) {
						const data = await response.json()
						setStore({ planet: data })
					}
				}
				catch (error) {
					console.log(error);
					return false;
				}
			},

			obtenerVehicleDetails: async (id) => {
				try {
					const response = await fetch(`https://swapi.dev/api/vehicles/${id}`, {
						method: `GET`,
					})
					if (response.ok) {
						const data = await response.json()
						setStore({ vehicle: data })
					}
				}
				catch (error) {
					console.log(error);
					return false;
				}
			},

			agregarFavoritesList: (name) => {
				if (getStore().favoritesList.includes(name)) {
					getActions().eliminarFavorite(name)
				} else {
					setStore({ favoritesList: [...getStore().favoritesList, name] });
				}
			},
			eliminarFavorite: (name) => {
				const newList = getStore().favoritesList.filter((item) => item != name)
				setStore({ favoritesList: newList })
			}
		}
	};
};


export default getState;
