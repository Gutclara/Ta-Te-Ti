import React from "react";
import PropTypes from "prop-types";

export const Inicio = props => {
	return (
		<div style={{ display: props.escondeono1 }}>
			<div>
				<h1>¿ARRANCAMO?</h1>
				<h3>Elige tu ficha</h3>
				<button
					type="button"
					className="btn btn-success "
					onClick={props.onClick}>
					x
				</button>
				<button
					type="button"
					className="btn btn-success "
					onClick={props.onClick2}>
					o
				</button>
			</div>
		</div>
	);
};
Inicio.propTypes = {
	value: PropTypes.string,
	onClick: PropTypes.func,
	onClick2: PropTypes.func,
	escondeono1: PropTypes.string
};
