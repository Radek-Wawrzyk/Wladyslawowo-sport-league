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
						<tr>
							<th>1</th>
							<th>Adam Poziomek</th>
							<th>Kawia</th>
							<th>25pkt</th>
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
						<tr>
							<th>1</th>
							<th>Karwia</th>
							<th>25pkt</th>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
		<section class="event-lightbox">
			<header class="event-lightbox-title">
				<h3>Galeria zdjęć</h3>
			</header>
			<lightbox class="event-lightbox-thumbnail" :thumbnail="event.imageUrl[0]" :images="event.imageUrl">
				<lightbox-default-loader slot="loader"/>
			</lightbox>
		</section>
	</main>
</template>

<script>

export default {
	name: "EventDetails",
	computed: {
	  event() {
	    return this.$store.getters.events[1];
		}
	}
}
</script>

<style scoped lang="scss" src="./EventDetails.scss" />