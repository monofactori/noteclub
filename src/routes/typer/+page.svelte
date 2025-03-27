<script lang="ts">
	// @link: https://www.reddit.com/r/sveltejs/comments/1jk4liy/typewriter_effect_with_reactivity_in_svelte/
	let displayText = $state('');

	const typer = (content: string) => {
		displayText = ''; // Clear content for typewriter effect.
		let index = 0;
		const speed = 50; // Delay in milliseconds between each character.

		const interval = setInterval(() => {
			displayText += content[index];
			index++;
			if (index >= content.length) {
				clearInterval(interval);
			}
		}, speed);
	};
</script>

<div class="uk-placeholder">
	<p class=" uk-h3">
		{displayText}
	</p>
</div>

<button
	class="uk-button uk-button-primary"
	onclick={() => {
		const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
		typer(text);
	}}>Start Typing</button
>
