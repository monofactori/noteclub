<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="uk-container uk-padding">
	{@render children?.()}
</main>
