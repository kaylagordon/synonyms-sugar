import App from './Components/App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'synonyms'
	}
});

export default app;
