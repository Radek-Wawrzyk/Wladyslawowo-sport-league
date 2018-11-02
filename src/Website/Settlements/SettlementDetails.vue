<template>
	<main class="website-container">
		<section class="description">
			<h2 class="description-header title is-3">{{ settlement.name }}</h2>
			<figure class="description-img">
				<img src="@/Assets/Home/buildings.jpg" alt="Osiedle" />
			</figure>
			<div class="description-content">
				<p class="description-content-text">{{ settlement.description }}</p>
				<p class="description-content-text">Ilość zawodników: <b>{{ settlement.playerCount }}</b></p>
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
					<h3 class="title is-4">Ranking osiedl</h3>
				</header>
				<div class="table-responsive">
					<table class="table-panel">
						<thead>
							<tr>
								<th>LP</th>
								<th>Nazwa Osiedla</th>
								<th>Ilość Punktów</th>
							</tr>
						</thead>
						<tbody>
						<tr :class="{ 'is-active' : settlementRank.first.data.id === settlement.id}">
							<th>{{ settlementRank.first.pos }}</th>
							<th>{{ settlementRank.first.data.name }}</th>
							<th>{{ settlementRank.first.data.points }}</th>
						</tr>
						<tr :class="{ 'is-active' : settlementRank.second.data.id === settlement.id}">
							<th>{{ settlementRank.second.pos }}</th>
							<th>{{ settlementRank.second.data.name }}</th>
							<th>{{ settlementRank.second.data.points }}</th>
						</tr>
						<tr :class="{ 'is-active' : settlementRank.third.data.id === settlement.id}">
							<th>{{ settlementRank.third.pos }}</th>
							<th>{{ settlementRank.third.data.name }}</th>
							<th>{{ settlementRank.third.data.points }}</th>
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
	computed:
	{
		settlement()
		{
	    return this.$store.getters.briefSettlementById(this.id); 
		},
		settlementRank()
		{
			return this.$store.getters.rankSettlement(this.id);
		}
	}
}

</script>
