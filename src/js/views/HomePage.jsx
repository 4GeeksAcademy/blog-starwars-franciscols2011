import React from "react";
import "../../styles/home.css";
import { Planets } from "../component/Planets.jsx";
import { Starship } from "../component/Starships.jsx";
import { Personajes } from "../component/Personajes.jsx";

export const HomePage = () => (
	<div className="text-center mt-5">
		<Personajes />
		<Planets />
		<Starship />
	</div>
);