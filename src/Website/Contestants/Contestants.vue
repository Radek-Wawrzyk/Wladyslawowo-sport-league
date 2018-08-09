<template>
	<main class="contestants-container">
		<div class="contestants-list">
			<div class="list-header">
				<h4 class="header-text">Lista Zawodników</h4>
				<div class="list-buttons">
					<button class="arrow-left">
						<svg aria-hidden="true" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-left fa-w-10 fa-3x"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
					</button>
					<button class="arrow-right">
						<svg aria-hidden="true" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10 fa-2x"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
					</button>
				</div>
			</div>
			<div class="list-body">
				<table class="table players-table">
					<thead>
						<tr>
							<th>Imię i Nazwisko</th>
							<th>Gmina</th>
							<th>Osiedle</th>
							<th>Ilość Punktów</th>
							<th>POZ</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>
								<div class="table-cell">
									<img class="table-img" src="@/Assets/Home/player.jpg"/>
									<label class="table-label">Mark Zuckerberg</label>
								</div>
							</th>
							<th>
								<div class="table-cell">
									<img class="table-img" src="@/Assets/Home/settlement.jpg"/>
									<label class="table-label">Kosakowo</label>
								</div>
							</th>
							<th>Czajkowskiego</th>
							<th>140</th>
							<th>1</th>
						</tr>
						<tr>
							<th>
								<div class="table-cell">
									<img class="table-img" src="@/Assets/Home/player.jpg"/>
									<label class="table-label">Mark Zuckerberg</label>
								</div>
							</th>
							<th>
								<div class="table-cell">
									<img class="table-img" src="@/Assets/Home/settlement.jpg"/>
									<label class="table-label">Kosakowo</label>
								</div>
							</th>
							<th>Czajkowskiego</th>
							<th>140</th>
							<th>2</th>
						</tr>
						<tr>
							<th>
								<div class="table-cell">
									<img class="table-img" src="@/Assets/Home/player.jpg"/>
									<label class="table-label">Mark Zuckerberg</label>
								</div>
							</th>
							<th>
								<div class="table-cell">
									<img class="table-img" src="@/Assets/Home/settlement.jpg"/>
									<label class="table-label">Kosakowo</label>
								</div>
							</th>
							<th>Czajkowskiego</th>
							<th>140</th>
							<th>3</th>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="contestant-details">
			<div class="contestant">
				<div class="details-profile">
					<img class="player-img" src="@/Assets/Home/player.jpg"/>
					<div class="player-info">
						<h4 class="player-header">Mark Zuckerberg</h4>
						<table class="player-table">
							<tr>Reprezentuje:</tr>
							<tr><th>Gmina:</th><th>Kosakowo</th></tr>
							<tr><th>Osiedle:</th><th>Czajkowskiego</th></tr>
						</table>
					</div>
				</div>

				<div class="details-settlement">
					<h4 class="settlement-header">Puck</h4>
					<img class="settlement-img" src="@/Assets/Home/gmina.png"/>
				</div>
			</div>
			<div class="season-achievments">
				<div class="season-tops">
					<h4 class="achievments-header">Osiągnięcia sezonu</h4>
					<ul class="achievments">
						<li class="achievment">
							<svg class="trophy-gold" aria-hidden="true" data-prefix="fas" data-icon="trophy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"></path></svg>
							Najdłuższy skok w dal - 12 metrów
						</li>
						<li class="achievment">
							<svg class="trophy-silver" aria-hidden="true" data-prefix="fas" data-icon="trophy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" ><path fill="currentColor" d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"></path></svg>
							Najwięcej przyjętych piłek - 44
					  </li>
						<li class="achievment">
							<svg class="trophy-copper" aria-hidden="true" data-prefix="fas" data-icon="trophy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" ><path fill="currentColor" d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"></path></svg>
							Najwięcej odbić - 29
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="contestant-seasons">
			<div class="left-panel">
				<div class="panel-header">
					<h4>Aktualny sezon</h4>
					<h4>Sezon 4</h4>
				</div>
				<table class="table panel-table">
					<thead>
						<tr>
							<th>Zawody</th>
							<th>Liga</th>
							<th>Pkt</th>
							<th>Pozycja</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Baseball - Mistrzostwa pomorza</th>
							<th>Trzecia</th>
							<th>45</th>
							<th>1</th>
						</tr>
						<tr>
							<th>Baseball - Mistrzostwa pomorza</th>
							<th>Trzecia</th>
							<th>45</th>
							<th>1</th>
						</tr>
						<tr>
							<th>Baseball - Mistrzostwa pomorza</th>
							<th>Trzecia</th>
							<th>45</th>
							<th>1</th>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="right-panel">
				<div class="panel-header">
					<h4>Poprzednie sezony</h4>
					<h4>Sezon 3</h4>
					<div class="season-buttons">
					<button class="arrow-left">
						<svg aria-hidden="true" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-left fa-w-10 fa-3x"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
					</button>
					3
					<button class="arrow-right">
						<svg aria-hidden="true" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10 fa-2x"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
					</button>
				</div>
				</div>
				<table class="table panel-table">
					<thead>
						<tr>
							<th>Zawody</th>
							<th>Liga</th>
							<th>Pkt</th>
							<th>Pozycja</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Baseball - Mistrzostwa pomorza</th>
							<th>Trzecia</th>
							<th>45</th>
							<th>1</th>
						</tr>
						<tr>
							<th>Baseball - Mistrzostwa pomorza</th>
							<th>Trzecia</th>
							<th>45</th>
							<th>1</th>
						</tr>
						<tr>
							<th>Baseball - Mistrzostwa pomorza</th>
							<th>Trzecia</th>
							<th>45</th>
							<th>1</th>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</main>
</template>
<style lang="scss" src="./Contestants.scss" scoped>

</style>
<script>
export default {
    name: "Contestants"
}
</script>


