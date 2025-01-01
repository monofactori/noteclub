<script>
	import Header from './Header.svelte'; 
</script>

<div class="app">
	<Header />

	<main class="uk-container">
		<slot />
	</main>

	<footer class="uk-section uk-background-secondary uk-light">
		<div class="uk-container">
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
		</div>
		
	</footer>
</div>

<style>
 
</style>
