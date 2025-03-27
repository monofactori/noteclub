<script lang="ts"> 
    let { children } = $props();
</script>


<main class="uk-container uk-padding">
	{@render children?.()}
</main>