import React from 'react';

function PlayerSearch() {
	return (
		<div className="position-absolute top-25 start-50 translate-middle-x">
			<h2>Rankedbuddys</h2>
			<h3>League of Legends Player Searcher</h3>
			<div class="input-group mb-3">
				<button
					class="btn btn-outline-secondary dropdown-toggle"
					type="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Dropdown
				</button>
				<ul class="dropdown-menu">
					<li>
						<a class="dropdown-item" href="#">
							Action
						</a>
					</li>
					<li>
						<a class="dropdown-item" href="#">
							Another action
						</a>
					</li>
					<li>
						<a class="dropdown-item" href="#">
							Something else here
						</a>
					</li>
					<li>
						<hr class="dropdown-divider"></hr>
					</li>
					<li>
						<a class="dropdown-item" href="#">
							Separated link
						</a>
					</li>
				</ul>
				<input
					type="text"
					class="form-control"
					aria-label="Text input with dropdown button"
				/>
				<button
					class="btn btn-outline-secondary"
					type="button"
					id="button-addon2"
				>
					Button
				</button>
			</div>
		</div>
	);
}

export default PlayerSearch;
