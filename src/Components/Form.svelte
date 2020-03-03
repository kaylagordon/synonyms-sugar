<script>

	import { fetchSynonyms } from '../apiCalls.js';
	import { word } from '../stores.js';

	let word_value;
	let synonyms = [];

	const unsubscribe = word.subscribe(value => {
		word_value = value;
	});

	const handleClick = async (e) => {
		e.preventDefault();
		synonyms = await fetchSynonyms(word_value);
		console.log(synonyms);
	};

	const handleTextChange = (e) => {
		word.set(e.target.value)
		console.log(word_value);
	}

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

</style>
