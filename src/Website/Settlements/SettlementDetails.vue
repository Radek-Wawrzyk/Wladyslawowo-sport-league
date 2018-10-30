<template>
	<main class="website-container">
		<section class="description">
			<h2 class="description-header title is-3">Nazwa Osiedla</h2>
			<figure class="description-img">
				<img src="@/Assets/Home/buildings.jpg" alt="Osiedle" />
			</figure>
			<div class="description-content">
				<p class="description-content-text">Opis osiedla fvg Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto corporis delectus deserunt eius eligendi excepturi fugit id, inventore itaque nesciunt obcaecati quae, quam quia repudiandae sed tempore voluptatem voluptatibus.</p>
				<p class="description-content-text">Ilość zawodników: 15</p>
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
						<tr>
							<th>1</th>
							<th>Osiedle</th>
							<th>25pkt</th>
						</tr>
						<tr class="is-active">
							<th>2</th>
							<th>Obecne osiedle</th>
							<th>16pkt</th>
						</tr>
						<tr>
							<th>3</th>
							<th>Osiedle</th>
							<th>10pkt</th>
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
  name: "SettlementDetails"
}

</script>
