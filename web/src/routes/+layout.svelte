<header>
	<nav>
		<ul>
			<li><a href="/" class="logo">Z ROŚLIN</a></li>
			<li><a href="/promotions">promocje</a></li>
			<li><a href="/shop">sklep</a></li>
		</ul>

		<ul>
			<li><a href="/contact">kontakt</a></li>
			<li><a href="/cart">koszyk</a></li>
			<li><a href="/account">konto</a></li>
		</ul>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>
	<h2>footer</h2>
</footer>

<style>
	header {
		position: sticky;
		top: 0;
		height: 150px;
		background-color: aqua;
		margin: 0;
		padding: 0;
	}

	.logo {
		font-weight: bold;
	}

	nav ul {
		padding: 0;
		margin: 0;
		list-style-type: none;
		/* display: flex; */
		background-color: red;
	}
</style>
