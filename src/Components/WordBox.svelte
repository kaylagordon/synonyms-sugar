<script>

	import { fetchSynonyms } from '../apiCalls.js';
	import { word, synonyms } from '../stores.js';

	let word_value;
	let synonyms_value;

	bind:word_value = $word;
	bind:synonyms_value = $synonyms;


</script>

<section className='word-box'>
	<h1>{$word}</h1>
	<div>
		{@html $synonyms.map(synonym => `<button value=${synonym}>${synonym}</button>`)}
	</div>
</section>

<style>


</style>
