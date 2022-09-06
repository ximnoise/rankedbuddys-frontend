import React from 'react';
import searchIcon from '../../media/search-icon.svg';

function PlayerSearch() {
	return (
		<div className="position-absolute top-25 start-50 translate-middle-x container-sm">
			<h2>Rankedbuddys</h2>
			<h3>League of Legends Player Searcher</h3>
			<div className="">
				<select className="dropdown-menu">
					<option className="dropdown-item" value="na">
						NA
					</option>
					<option className="dropdown-item" value="euw">
						EUW
					</option>
					<option className="dropdown-item" value="eun">
						EUN
					</option>
					<option className="dropdown-item" value="kr">
						KR
					</option>
					<option className="dropdown-item" value="br">
						BR
					</option>
					<option className="dropdown-item" value="jp">
						JP
					</option>
					<option className="dropdown-item" value="ru">
						RU
					</option>
					<option className="dropdown-item" value="oce">
						OCE
					</option>
					<option className="dropdown-item" value="tr">
						TR
					</option>
					<option className="dropdown-item" value="lan">
						LAN
					</option>
					<option className="dropdown-item" value="las">
						LAS
					</option>
				</select>
				<input
					type="text"
					aria-label="Text input with dropdown button"
					placeholder="Search for Summoner"
				/>
				<button type="submit" id="button-addon2">
					<img src={searchIcon} alt="Search Icon" />
				</button>
			</div>
		</div>
	);
}

export default PlayerSearch;
