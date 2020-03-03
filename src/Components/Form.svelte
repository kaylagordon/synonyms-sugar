<script>
	import { fetchSynonyms } from '../apiCalls.js';

	const handleClick = (e) => {
		e.preventDefault();
		fetchSynonyms('chicken');
	}
</script>

<form>
	<input type='text' placeholder='Enter a word here...'/>
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
