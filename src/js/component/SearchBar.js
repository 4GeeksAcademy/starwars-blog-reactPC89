import React, { useState, useContext, useEffect, useRef } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const { store } = useContext(Context);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const searchBarRef = useRef(null);

    const handleInputChange = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        if (term.trim() === "") {
            setSuggestions([]);
            return;
        }

        const filteredCharacters = store.characters.filter(character =>
            character.name.toLowerCase().includes(term)
        );
        const filteredPlanets = store.planets.filter(planet =>
            planet.name.toLowerCase().includes(term)
        );
        const filteredVehicles = store.vehicles.filter(vehicle =>
            vehicle.name.toLowerCase().includes(term)
        );

        setSuggestions([...filteredCharacters, ...filteredPlanets, ...filteredVehicles]);
    };

    const handleSelectSuggestion = (item) => {
        const id = item.url.split('/').filter(Boolean).pop();
        if (item.url.includes("people")) {
            navigate(`/personajes-details/${id}`);
        } else if (item.url.includes("planets")) {
            navigate(`/planet-details/${id}`);
        } else if (item.url.includes("vehicles")) {
            navigate(`/vehicles-details/${id}`);
        }

        setSearchTerm("");
        setSuggestions([]);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
                setSuggestions([]);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (searchTerm === "") {
            setSuggestions([]);
        }
    }, [searchTerm]);

    return (
        <div className="search-container" ref={searchBarRef}>
            <input
                type="text"
                className="search-input"
                placeholder="Search for characters, planets, vehicles..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            {suggestions.length > 0 && (
                <ul className="suggestions-list">
                    {suggestions.map((item, index) => (
                        <li key={index} onClick={() => handleSelectSuggestion(item)}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;

