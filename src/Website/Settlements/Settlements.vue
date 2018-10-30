<template>
	<main class="website-container">
		<header class="website-header">
			<h1 class="title is-3">Osiedla</h1>
		</header>
		<div class="table-responsive">
			<table class="table-panel">
				<thead>
				<tr>
					<th>Lp</th>
					<th>Nazwa osiedla</th>
					<th>Punkty</th>
				</tr>
				</thead>
				<tbody class="table-body">
				<tr v-for="(settlement, index) in settlements" :key="index" @click="$router.push(`/settlements/${settlement.id}`)" :aria-label="settlement.name" :title="settlement.name">
					<th>{{index +1}}</th>
					<th>{{settlement.name}}</th>
					<th>{{settlement.points}}</th>
				</tr>
				</tbody>
			</table>
		</div>
	</main>
</template>

<script>

export default {
	name: "Settlements",
	computed: {
	  settlements() {
	    return this.$store.getters.settlements;
		}
	}
}

</script>

<style lang="scss" src="./Settlements.scss" scoped />