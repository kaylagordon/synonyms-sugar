<script>

	import { fetchSynonyms } from '../apiCalls.js';
	import { word, synonyms, error } from '../stores.js';

	let word_value;
	let synonyms_value;
	let error_value;

	bind:word_value = $word;
	bind:synonyms_value = $synonyms;
	bind:error_value = $error;

	const handleClick = async (e) => {
		if (e.target.id === 'button') {
			word.set(e.target.value);
			fetchSynonyms(e.target.value)
			.then(data => synonyms.set(data[0].meta.syns[0]))
			.catch(err => {
				error.set(`There are no synonyms for ${e.target.value}. Please try another word.`);
			});
		};
	};

	const showHover = (e) => {
		if (e.target.id === 'button') {
			e.target.style.background = '#FCC1CB';
			e.target.style.color = 'white';
		};
		let allButtons = document.querySelectorAll('#button');
		allButtons.forEach(button => {
			if (button.id !== e.target.id) {
				button.style.background = 'white';
				button.style.color = '#545454'
			}
		})
	};

</script>

<section className='word-box'>
	<h1>{$word}</h1>
	<div on:click={handleClick} on:mouseover={showHover}>
		{@html $synonyms.map(synonym =>
			`<button
				style="
				font-size: 1.2vw;
				background-color: white;
				border: none;
				font-weight: bold;
				color: #545454;
				margin-right: .5vw;
				cursor: pointer;"
				id='button'
				value=${synonym}
			>${synonym}</button>`
		)}
		{@html $error && `<p style="color:white;" >${$error}</p>` }
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
		color: #545454;
	}


</style>
