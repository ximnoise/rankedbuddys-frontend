import React from 'react';

import { Link } from 'react-router-dom';

import './nav-view.css';

function NavView() {
	return (
		<nav className="">
			<div className="">
				<Link className="" to={'/'}>
					RANKEDBUDDYS
				</Link>
				<div className="">
					<div className="">
						<Link className="" to={'/'}>
							/ HOME
						</Link>
						<Link className="" to={'/'}>
							/ DUO
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavView;
