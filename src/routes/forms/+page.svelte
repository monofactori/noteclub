<svelte:head>
	<title>Формы в Sveltekit</title>
	<meta name="description" content="Обработка форм" />
</svelte:head>


<script>
	import { enhance } from "$app/forms";
	export let data;
	$: entries = data.entries || [];
</script>

<section class="uk-section">
	<h1>Формы в Sveltekit</h1>

	<form class="uk-form" method="POST" action="?/addEntry" use:enhance>
		<div class="uk-margin">
			<label for="name">Name:</label>
			<input type="text" name="name" id="name" class="uk-input" required />
		</div>
		<div class="uk-margin">
			<label for="email">Email:</label>
			<input type="email" name="email" id="email" class="uk-input" required />
		</div>
		<div class="uk-margin">
			<label for="message">Message:</label>
			<textarea name="message" id="message" class="uk-textarea" required />
		</div>
		<div class="uk-margin">
			<button type="submit" class="uk-button uk-button-primary">Submit</button>
		</div>
	</form>
	<h2>Entries:</h2>
	<ul>
		{#each entries as entry}
			<li>
				<strong>{entry.name}</strong>: {entry.message}
			</li>
		{/each}
	</ul>
</section>
