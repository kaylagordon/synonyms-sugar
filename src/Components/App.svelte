<script>
	import Form from './Form.svelte';
	import Title from './Title.svelte';
	import WordBox from './WordBox.svelte';
</script>

<main>
	<div>
		<Title />
		<Form />
	</div>
	<WordBox />
	<img alt='donuts' src='./images/background-image.png' />
</main>

<style>

	main {
		background-color: #545454;
		margin: -2vw;
		padding: 4vw;
	}

	div {
		display: flex;
		justify-content: space-between;
	}

	img {
		width: 35%;
		margin: -4vw;
		margin-top: 8%;
	}

</style>
