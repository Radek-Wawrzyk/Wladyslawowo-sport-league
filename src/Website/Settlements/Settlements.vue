<template>
	<main class="website-container settlements-container">
		<div class="settlements-table">
			<div class="settlements-heading">
				<h4>Lista Osiedl i Wsi</h4>
				<div class="settlements-buttons">
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
		
	</main>
</template>
<style lang="scss" src="./Settlements.scss" scoped>
</style>
<script>
	export default {
		name: "Settlements"
	};
</script>