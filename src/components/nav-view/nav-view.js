import React from 'react';

import { Link } from 'react-router-dom';

import './nav-view.css';

function NavView() {
	return (
		<nav class="navbar sticky-top navbar-expand-lg bg-light">
			<div class="container-fluid">
				<Link className="navbar-brand" to={'/'}>
					RANKEDBUDDYS
				</Link>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div class="navbar-nav">
						<Link className="nav-link" to={'/'}>
							/ HOME
						</Link>
						<Link className="nav-link" to={'/'}>
							/ DUO
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavView;
