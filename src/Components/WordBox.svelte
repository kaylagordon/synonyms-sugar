<script>

	import { fetchSynonyms } from '../apiCalls.js';
	import { word, synonyms } from '../stores.js';

	let word_value;
	let synonyms_value;

	bind:word_value = $word;
	bind:synonyms_value = $synonyms;

	const handleClick = async (e) => {
		if (e.target.id === 'button') {
			word.set(e.target.value);
			let synonymsArr = await fetchSynonyms(e.target.value);
			synonyms.set(synonymsArr);
		}
	}


</script>

<section className='word-box'>
	<h1>{$word}</h1>
	<div on:click={handleClick}>
		{@html $synonyms.map(synonym =>
			`<button
				id='button'
				value=${synonym}
			>${synonym}</button>`
		)}
	</div>
</section>

<style>
	section {
		text-align: center;
	}

	h1 {
		color: #B3E9EA;
		font-size: 8vw;
		margin-top: 0;
	}

	div {
		text-align: center;
		width: 40vw;
		margin: auto;
		margin-top: -5vw;
	}

</style>
