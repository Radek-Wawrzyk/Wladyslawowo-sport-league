<template>
  <main class="website-container settlementDetails-container">
    <div class="settlement-description">
			<img src="@/Assets/Home/buildings.jpg" class="settlement-brand" />
			<div class="description">
				<h4 class="description-header">Os. Czajkowskiego</h4>
				<table class="description-table">
					<tr>Reprezentuje:</tr>
					<tr>
						<th>Gmina: Puck</th>
					</tr>
					<tr>
						<th>Opis: Nowoczesne osiedle z wieloma młodymi, ambitnymi zawodnikami aspirującymi do aktywności w najlepszych lokalnych
							ligach</th>
					</tr>
				</table>
			</div>
			<div class="settlement-logo">
				<h4 class="logo-header">Puck</h4>
				<img class="logo-settlement" src="@/Assets/Home/gmina.png" />
			</div>
		</div>
		<div class="settlement-players">
			<div class="players-heading">
				<h4>Lista zawodników danego osiedla/wsi</h4>
				<div class="stats-buttons">
					<button class="arrow-left">
						<svg aria-hidden="true" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
						  class="svg-inline--fa fa-chevron-left fa-w-10 fa-3x">
							<path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
						</svg>
					</button>
					<button class="arrow-right">
						<svg aria-hidden="true" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
						  class="svg-inline--fa fa-chevron-right fa-w-10 fa-2x">
							<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
						</svg>
					</button>
				</div>
			</div>
			<table class="players-table">
				<thead>
					<tr>
						<th>Imię i Nazwisko</th>
						<th>Gmina</th>
						<th>Osiedle</th>
						<th>Ilość Punktów</th>
						<th>Poz</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>
							<img class="settlement-player" src="@/Assets/Home/player.jpg" /> Mark Zuckerberg</th>
						<th>
							<img class="settlement-img" src="@/Assets/Home/settlement.jpg" /> Kosakowo
						</th>
						<th>Czajkowskiego</th>
						<th>140</th>
						<th>1</th>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="settlement-location">
			<div class="location-heading">
				<h4>Lokalizacja Osiedla/Wsi</h4>
			</div>
			<iframe class="location-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2317.304043924749!2d18.53720831602352!3d54.49286009591487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda0c8f6a33105%3A0xa2dd70483b763ed1!2sPPNT+Gdynia!5e0!3m2!1spl!2spl!4v1529589490438"
			  width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen>
			</iframe>
		</div>
		<div class="settlement-stats">
			<div class="stats-current">
				<div class="stats-heading">
					<h4>Statystyki w obecnym sezonie</h4>
					<div class="stats-buttons">
						<button class="arrow-left">
							<svg aria-hidden="true" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
							  class="svg-inline--fa fa-chevron-left fa-w-10 fa-3x">
								<path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
							</svg>
						</button>
						<button class="arrow-right">
							<svg aria-hidden="true" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
							  class="svg-inline--fa fa-chevron-right fa-w-10 fa-2x">
								<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
							</svg>
						</button>
					</div>
				</div>
				<table class="table table-settlements">
					<thead>
						<tr>
							<th>Nazwa Osiedla/Wsi</th>
							<th>Gmina</th>
							<th>Ilość Punktów</th>
							<th>Poz</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Czajkowskiego</th>
							<th>
								<img class="settlement-img" src="@/Assets/Home/settlement.jpg" /> Puck
							</th>
							<th>140</th>
							<th>1</th>
						</tr>
						<tr>
							<th>Czajkowskiego</th>
							<th>
								<img class="settlement-img" src="@/Assets/Home/settlement.jpg" /> Puck
							</th>
							<th>140</th>
							<th>1</th>
						</tr>
						<tr>
							<th>Czajkowskiego</th>
							<th>
								<img class="settlement-img" src="@/Assets/Home/settlement.jpg" /> Puck
							</th>
							<th>140</th>
							<th>1</th>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="stats-previous">
				<div class="stats-heading">
					<h4>Statystyki w poprzednich sezonach</h4>
					<div class="stats-season">
						<h4>Sezon </h4>
						<button class="arrow-left">
							<svg aria-hidden="true" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
							  class="svg-inline--fa fa-chevron-left fa-w-10 fa-3x">
								<path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
							</svg>
						</button>
						3
						<button class="arrow-right">
							<svg aria-hidden="true" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
							  class="svg-inline--fa fa-chevron-right fa-w-10 fa-2x">
								<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
							</svg>
						</button>
					</div>
					<div class="stats-buttons">
						<button class="arrow-left">
							<svg aria-hidden="true" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
							  class="svg-inline--fa fa-chevron-left fa-w-10 fa-3x">
								<path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
							</svg>
						</button>
						<button class="arrow-right">
							<svg aria-hidden="true" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
							  class="svg-inline--fa fa-chevron-right fa-w-10 fa-2x">
								<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
							</svg>
						</button>
					</div>
				</div>
				<table class="table table-settlements">
					<thead>
						<tr>
							<th>Nazwa Osiedla/Wsi</th>
							<th>Gmina</th>
							<th>Ilość Punktów</th>
							<th>Poz</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Czajkowskiego</th>
							<th>
								<img class="settlement-img" src="@/Assets/Home/settlement.jpg" /> Puck
							</th>
							<th>140</th>
							<th>1</th>
						</tr>
						<tr>
							<th>Czajkowskiego</th>
							<th>
								<img class="settlement-img" src="@/Assets/Home/settlement.jpg" /> Puck
							</th>
							<th>140</th>
							<th>1</th>
						</tr>
						<tr>
							<th>Czajkowskiego</th>
							<th>
								<img class="settlement-img" src="@/Assets/Home/settlement.jpg" /> Puck
							</th>
							<th>140</th>
							<th>1</th>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
  </main>
</template>

<script>

export default {
  name: "SettlementDetails"
}

</script>

<style lang="scss" src="./SettlementDetails.scss" scoped />
