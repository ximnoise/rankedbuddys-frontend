import axios from 'axios';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavView from '../nav-view/nav-view';
import PlayerSearch from '../player-search/player-search';

import './main-view.css';

function Main() {
	const [searchText, setSearchText] = useState('');
	//const [playerData, setPlayerData] = useState({});
	const [gameList, setGameList] = useState([]);

	function getPlayerGames(event) {
		axios
			.post(
				'http://localhost:4000/past5Games',
				{
					Username: searchText,
				},
				{
					headers: { 'Access-Control-Allow-Origin': '*' },
				}
			)
			.then(function (response) {
				setGameList(response.data);
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	/*
	function searchForPlayer(event) {
		// Set up API call
		var APICallString =
			'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchText}?api_key=${process.env.REACT_APP_API_KEY}';

		// Handle the API call
		axios
			.get(APICallString)
			.then(function (response) {
				// Success
				setPlayerData(response.data);
			})
			.catch(function (error) {
				// Error
				console.log(error);
			});
	}
	*/

	return (
		<Router>
			<div className="">
				<NavView />
			</div>
		</Router>
	);
}

export default Main;

/*
{gameList.length !== 0 ? (
						<div>
							<p>We have data</p>
							{gameList.map((gameData, index) => (
								<div>
									<h2>Game {index + 1}</h2>
									{gameData.info.participants.map(
										(data, participantsIndex) => (
											<li>
												<p>
													PLAYER{' '}
													{participantsIndex + 1}:{' '}
													{data.summonerName}, KDA:{' '}
													{data.kills} / {data.deaths}{' '}
													/ {data.assists}
												</p>
											</li>
										)
									)}
								</div>
							))}
						</div>
					) : (
						<div>
							<p>We have no data</p>
						</div>
					)}

*/
