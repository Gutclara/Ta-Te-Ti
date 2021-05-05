import React from "react";
import { Cuadrado } from "./cuadrado.js";
import { Tablero } from "./tablero.js";

//create your first component
export function Home() {
	return (
		<div className="main">
			<h1 className="display-4">
				<strong>Ta Te Ti</strong>
			</h1>
			<Tablero />
		</div>
	);
}
