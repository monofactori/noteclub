<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header>
	<nav class="uk-navbar-container uk-navbar-transparent uk-background-primary uk-light">
		<div class="uk-container">
			<div uk-navbar>
				<div class="uk-navbar-left">
					<ul class="uk-navbar-nav">
						<li class={$page.url.pathname === '/' ? 'uk-active' : undefined}>
							<a href="/">Главная</a>
						</li>
						<li class={$page.url.pathname === '/about' ? 'uk-active' : undefined}>
							<a href="/about">О нас </a>
						</li>
						<li class={$page.url.pathname === '/forms' ? 'uk-active' : undefined}>
							<a href="/forms">Формы</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</header>
