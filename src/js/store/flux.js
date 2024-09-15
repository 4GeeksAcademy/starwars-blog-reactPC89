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
				const storedCharacters = localStorage.getItem("characters");
				if (storedCharacters) {
					setStore({ characters: JSON.parse(storedCharacters) });
					return;
				}
				try {
					const response = await fetch(`https://swapi.dev/api/people/`, {
						method: `GET`,
					})
					if (response.ok) {
						const data = await response.json()
						setStore({ characters: data.results });
						localStorage.setItem("characters", JSON.stringify(data.results));
					}
				}
				catch (error) {
					console.log(error);
					return false;
				}
			},

			obtenerPlanetas: async () => {
				const storedPlanets = localStorage.getItem("planets");
				if (storedPlanets) {
					setStore({ planets: JSON.parse(storedPlanets) });
					return;
				}
				try {
					const response = await fetch(`https://swapi.dev/api/planets/`, {
						method: `GET`,
					})
					if (response.ok) {
						const data = await response.json()
						setStore({ planets: data.results });
						localStorage.setItem("planets", JSON.stringify(data.results));
					}
				}
				catch (error) {
					console.log(error);
					return false;
				}
			},

			obtenerVehiculos: async () => {
				const storedVehicles = localStorage.getItem("vehicles");
				if (storedVehicles) {
					setStore({ vehicles: JSON.parse(storedVehicles) });
					return;
				}

				try {
					const response = await fetch(`https://swapi.dev/api/vehicles/`, {
						method: `GET`,
					})
					if (response.ok) {
						const data = await response.json()
						setStore({ vehicles: data.results });
						localStorage.setItem("vehicles", JSON.stringify(data.results));
					}
				}
				catch (error) {
					console.log(error);
					return false;
				}
			},


			obtenerPersonajeDetails: async (id) => {
                const storedCharacter = localStorage.getItem(`character_${id}`);
                if (storedCharacter) {
                    setStore({ character: JSON.parse(storedCharacter) });
                    return;
                }

                try {
                    const response = await fetch(`https://swapi.dev/api/people/${id}`, {
                        method: `GET`,
                    });
                    if (response.ok) {
                        const data = await response.json();
                        setStore({ character: data });
                        localStorage.setItem(`character_${id}`, JSON.stringify(data));
                    }
                } catch (error) {
                    console.log(error);
                    return false;
                }
            },

            obtenerPlanetaDetails: async (id) => {
                const storedPlanet = localStorage.getItem(`planet_${id}`);
                if (storedPlanet) {
                    setStore({ planet: JSON.parse(storedPlanet) });
                    return;
                }

                try {
                    const response = await fetch(`https://swapi.dev/api/planets/${id}`, {
                        method: `GET`,
                    });
                    if (response.ok) {
                        const data = await response.json();
                        setStore({ planet: data });
                        localStorage.setItem(`planet_${id}`, JSON.stringify(data));
                    }
                } catch (error) {
                    console.log(error);
                    return false;
                }
            },

            obtenerVehicleDetails: async (id) => {
                const storedVehicle = localStorage.getItem(`vehicle_${id}`);
                if (storedVehicle) {
                    setStore({ vehicle: JSON.parse(storedVehicle) });
                    return;
                }

                try {
                    const response = await fetch(`https://swapi.dev/api/vehicles/${id}`, {
                        method: `GET`,
                    });
                    if (response.ok) {
                        const data = await response.json();
                        setStore({ vehicle: data });
                        localStorage.setItem(`vehicle_${id}`, JSON.stringify(data));
                    }
                } catch (error) {
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
