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
</main>

<style>

	main {
		background-color: #545454;
		background-image: url('../images/background-image.png');
		background-size: 40vw;
		background-repeat: no-repeat;
		background-position: left bottom;
		background-attachment: fixed;
		margin: -2vw;
		padding: 4vw;
		height: 100%;
	}

	div {
		display: flex;
		justify-content: space-between;
	}

</style>
