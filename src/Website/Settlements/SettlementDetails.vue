<template>
	<main class="website-container">
		<section class="description">
			<h2 class="description-header title is-3">{{ settlement.name }}</h2>
			<figure class="description-img" v-if="settlement.imageUrl">
				<img :src="settlement.imageUrl" :alt="settlement.name" />
			</figure>
			<div class="description-content">
				<p class="description-content-text">{{ settlement.description }}</p>
				<p class="description-content-text">Liczba zawodników: <b>{{ settlement.playerCount }}</b></p>
			</div>
		</section>
		<section class="stats">
			<div class="stats-table">
				<header class="website-header">
					<h3 class="title is-4">Gracze osiedla</h3>
				</header>
				<div class="table-responsive">
					<table class="table-panel">
						<thead>
							<tr>
								<th>lp.</th>
								<th>Nazwisko i imię</th>
								<th>Liczba punktów</th>
							</tr>
							</thead>
							<tbody>
							<tr v-for="(player, index) in settlementPlayers" :key="index">
								<th>{{ index + 1  }}</th>
								<th>{{ player.player.name }}</th>
								<th>{{ player.points }}</th>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="stats-table">
				<header class="website-header">
					<h3 class="title is-4">Ranking dzielnic/wsi</h3>
				</header>
				<div class="table-responsive">
					<table class="table-panel">
						<thead>
							<tr>
								<th>lp.</th>
								<th>Nazwa dzielnicy lub wsi</th>
								<th>Liczba punktów</th>
							</tr>
						</thead>
						<tbody>
						<tr v-for="(item, index) in settlements"  :key="index" :class="{ 'is-active' : item.id === settlement.id}">
							<th>{{ index + 1 }}</th>
							<th>{{ item.name }}</th>
							<th>{{ item.points }} pkt</th>
						</tr>
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
	name: "SettlementDetails",
	computed: {
		settlement() {
	    return this.$store.getters.briefSettlementById(this.id); 
		},
		settlements() {
			return this.$store.getters.settlements;
		},
		settlementPlayers() {
			return this.$store.getters.playerSettlements(this.id);
		}
	}
}

</script>
