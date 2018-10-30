<template>
	<main class="website-container">
		<section class="description">
			<h2 class="description-header title is-3">Nazwa gracza</h2>
			<figure class="description-img">
				<img class="player-img" src="@/Assets/Home/player.jpg" alt="Mark Zuckerberg"/>
			</figure>
			<div class="description-content">
				<p class="description-content-text">Ilość punktów: 25pkt</p>
				<p class="description-content-text">Nazwa osiedla w którym jest ( z linkiem ofc )</p>
			</div>
		</section>
		<section class="stats">
			<div class="stats-table">
				<header class="website-header">
					<h3 class="title is-4">Statystyki graczy</h3>
				</header>
				<div class="table-responsive">
					<table class="table-panel">
						<thead>
						<tr>
							<th>LP</th>
							<th>Imię i Nazwisko</th>
							<th>Ilość Punktów</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<th>1</th>
							<th>Adam Poziomek</th>
							<th>25pkt</th>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="stats-table">
				<header class="website-header">
					<h3 class="title is-4">Imprezy, w których brał udział</h3>
				</header>
				<div class="table-responsive">
					<table class="table-panel">
						<thead>
						<tr>
							<th>LP</th>
							<th>Nazwa imprezy</th>
							<th>Data</th>
							<th>Ilość punktów</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<th>1</th>
							<th>Turniej tenisa stołowego</th>
							<th>12-05-2018</th>
							<th>25pkt</th>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	</main>
</template>