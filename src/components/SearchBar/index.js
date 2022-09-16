import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useState } from 'react';
import './index.scss';

const SearchBar = () => {
	const [searchText, setSearchText] = useState('');
	const [summonerInfo, setSummonerInfo] = useState([]);

	function getSummonerMatchInfo(event) {
		axios
			.post(
				'http://localhost:4000/summonerInfo',
				{
					Username: searchText,
				},
				{
					headers: { 'Access-Control-Allow-Origin': '*' },
				}
			)
			.then(function (response) {
				setSummonerInfo(response.data);
				console.log(summonerInfo);
			})
			.catch(function (error) {
				console.error(error);
			});
	}

	return (
		<div className="search-bar">
			<input
				type="text"
				placeholder="Search for Summoner"
				onChange={(e) => setSearchText(e.target.value)}
			></input>
			<button onClick={(e) => getSummonerMatchInfo(e)}>
				<FontAwesomeIcon icon={faMagnifyingGlass} color="#4d4d4e" />
			</button>
		</div>
	);
};

export default SearchBar;
