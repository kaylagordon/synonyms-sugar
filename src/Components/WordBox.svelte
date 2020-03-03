<script>

	import { fetchSynonyms } from '../apiCalls.js';
	import { word, synonyms } from '../stores.js';

	let word_value;
	let synonyms_value;

	const getWords = word.subscribe(value => {
		word_value = value;
	});

	const getSynonyms = synonyms.subscribe(value => {
		synonyms_value = value;
	});

</script>

<section className='word-box'>
	<h1>{word_value}</h1>
	<p>{synonyms_value}</p>

</section>

<style>


</style>
