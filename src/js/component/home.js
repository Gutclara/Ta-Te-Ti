import React, { useState } from "react";
import { Inicio } from "./inicio.js";
import { Tablero } from "./tablero.js";

export function Home() {
	const [empezar, setEmpezar] = useState("none");
	const [inicio, setInicio] = useState("block");
	const [elegirFicha, setElegirFicha] = useState();

	const mostarT = ficha => {
		setEmpezar("block");
		setInicio("none");
		setElegirFicha(ficha);
	};

	return (
		<div className="main">
			<h1 className="display-4">
				<strong>Ta Te Ti</strong>
			</h1>
			<Tablero escondeono={empezar} gol={elegirFicha} />
			<Inicio
				escondeono1={inicio}
				onClick={() => mostarT(true)}
				onClick2={() => mostarT(false)}
			/>
		</div>
	);
}
