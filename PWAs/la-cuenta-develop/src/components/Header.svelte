<script>
	import { listaCompartir, totalCompartir, divisionCompartir, cantidadDePersonasCompartir } from '../routes/compartirCuenta.js';

	let navigatorShare = false;
	let compartir;

	let formatter = new Intl.NumberFormat('es-AR', {
		style: 'currency',
		currency:  'ARS'
	});

	if(typeof window !== "undefined") {
		if (navigator.share) {
			navigatorShare = true;
		} else {
			console.log("Web Share is not supported");
		}
	}

	function compartirCuenta() {

		compartir = "";

		compartir += "🧾 La Cuenta: \r\n\r\n"

		for (var i = 0, l = $listaCompartir.length; i < l; i++) {
			if ($listaCompartir[i].resto === 0) {
				compartir += $listaCompartir[i].quien + " ya puso -- " + formatter.format($listaCompartir[i].cuanto) + "\r\n";
			} else if ($divisionCompartir > $listaCompartir[i].cuanto) {				
				compartir += $listaCompartir[i].quien + " debe -- " + formatter.format($listaCompartir[i].resto) + "\r\n";
			} else{				
				compartir += "A " + $listaCompartir[i].quien + " le deben -- " + formatter.format($listaCompartir[i].resto) + "\r\n";
			}
		}

		if ($cantidadDePersonasCompartir > $listaCompartir.length) {
			compartir += "El resto debe -- " + formatter.format($divisionCompartir) + "\r\n";
		}

		compartir += "__________________\r\n\r\n";
		compartir += "💰 Total : " + formatter.format($totalCompartir) + "\r\n";
		compartir += "Cada uno : " + formatter.format($divisionCompartir) + "\r\n";

		navigator.share({
			title: 'La Cuenta',
			text: compartir,
			url: 'https://agustinl.github.io/la-cuenta/',
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}

</script>

<header>
	<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
		<a class="navbar-brand" href="#!">
			<img src="apple-touch-icon.png" width="30" height="30" alt="" loading="lazy" class="d-inline-block align-top" />
			<strong>La Cuenta</strong>
		</a>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item active">
					<a class="nav-link" href="#!">
						Inicio
					</a>
				</li>
				{#if navigatorShare}
				<li class="nav-item">
					<a class="nav-link" href="#!" on:click={compartirCuenta}>
						Compartir
					</a>
				</li>
				{/if}
			</ul>
		</div>
	</nav>
</header>