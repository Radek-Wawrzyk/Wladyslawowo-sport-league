<template>
	<main class="website-container">
		<header class="event">
			<div class="event-top">
				<h2 class="event-top-title">{{event.name}}</h2>
				<span class="event-top-date">{{event.date}}</span>
			</div>
			<p class="event-description">{{event.description}}</p>
		</header>
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
								<th>Osiedle</th>
								<th>Ilość Punktów</th>
							</tr>
						</thead>
						<tbody>
							<tr :key="index" v-for="(player, index) in event.players">
								<th>{{ index + 1 }}</th>
								<th>{{ player.name }}</th>
								<th>{{ player.settlement }}</th>
								<th>{{ player.points }}</th>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="stats-table">
				<header class="website-header">
					<h3 class="title is-4">Statystyki Osiedl</h3>
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
							<tr v-for="(item,index) in event.settlementScores" :key="index">
								<th>{{ index + 1 }}</th>
								<th>{{ item.key }}</th>
								<th>{{ item.value }}</th>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
		<section v-if="event.imageUrls" class="event-lightbox">
			<header class="event-lightbox-title">
				<h3>Galeria zdjęć</h3>
			</header>
			<p class="no-img" v-if="event.imageUrls.length < 0">Brak zdjęć</p>
			<lightbox v-if="event.imageUrls.length < 0" class="event-lightbox-thumbnail" :thumbnail="event.imageUrls[0]" :images="event.imageUrls">
				<lightbox-default-loader slot="loader"/>
			</lightbox>
		</section>
	</main>
</template>

<script>

export default {
	props: ['id'],
	name: "EventDetails",
	computed: {
	  event() {
	    return this.$store.getters.event(this.id);
		}
	}
}
</script>

<style scoped lang="scss" src="./EventDetails.scss" />