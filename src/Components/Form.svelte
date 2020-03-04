<script>

	import { fetchSynonyms } from '../apiCalls.js';
	import { word, synonyms, error } from '../stores.js';

	let word_value;
	let synonyms_value;

	const getWords = word.subscribe(value => {
		word_value = value;
	});

	const getSynonyms = synonyms.subscribe(value => {
		synonyms_value = value;
	});

	const handleClick = (e) => {
		e.preventDefault();
		fetchSynonyms(word_value)
		.then(data => synonyms.set(data[0].meta.syns[0]))
		.catch(err => {
			error.set(`There are no synonyms for ${word_value}. Please try another word.`);
		});
	};

	const handleTextChange = (e) => {
		word.set(e.target.value);
		synonyms.set([]);
		error.set('');
	};

</script>

<form>
	<input type='text' placeholder='Enter a word here...' on:keyup={handleTextChange}/>
	<button className='submit-word-button' on:click={handleClick}>Go!</button>
</form>

<style>

	form {
		font-family: 'Open Sans', sans-serif;
		font-size: 1.5vw;
		margin-top: 2vw;
	}

	input {
		width: 30vw;
	}

	button {
		background-color: #FCC1CB;
		border: none;
		font-weight: bold;
		color: white;
		width: 8vw;
	}

	button:hover {
		background-color: white;
		color: #FCC1CB;
		cursor: pointer;
		transform: scale(1.05);
	}

</style>
