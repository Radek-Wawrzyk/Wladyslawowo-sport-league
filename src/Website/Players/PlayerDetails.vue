<template>
	<main class="website-container">
		<section class="description">
			<h2 class="description-header title is-3">{{ player.name }}</h2>
			<figure class="description-img">
				<img class="player-img" src="@/Assets/Home/player.jpg" alt="Mark Zuckerberg"/>
			</figure>
			<div class="description-content">
				<p class="description-content-text">Liczba punktów: <b>{{ player.points }}</b></p>
				<p class="description-content-text">Nazwa dzielnicy/wsi: <b>{{ player.settlement}}</b></p>
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
							<th>lp.</th>
							<th>Nazwisko i imie</th>
							<th>Liczba punktów</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<th>1</th>
							<th>{{ player.name }}</th>
							<th>{{ player.points }} pkt</th>
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
<<<<<<< HEAD
							<tr>
								<th>LP</th>
								<th>Nazwa imprezy</th>
								<th>Data</th>
								<th>Ilość punktów</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(event, index) in player.playedEvents" :key="index">
								<th>{{ index + 1 }}</th>
								<th>{{ event.name }}</th>
								<th>{{ event.date }}</th>
								<th>{{ event.points }}</th>
							</tr>
=======
						<tr>
							<th>lp.</th>
							<th>Nazwa imprezy</th>
							<th>Data</th>
							<th>Liczba punktów</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<th>1</th>
							<th>Turniej tenisa stołowego</th>
							<th>12-05-2018</th>
							<th>25 pkt</th>
						</tr>
>>>>>>> 07cf016b2513b57fd03375020f5315331127e9fd
						</tbody>
					</table>
				</div>
			</div>
		</section>
	</main>
</template>
<script>
export default {
	props: ['id'],
	name: "PlayerDetails",
	computed:
	{
		player()
		{
			return this.$store.getters.briefPlayerById(this.id);
		}
	}
}
</script>
