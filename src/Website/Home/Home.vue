<template>
	<main class="home-container">
		<header class="home-baner">
			<div class="columns">
				<div class="column">
					<div class="baner-frame">
						<img class="baner-image" src="http://placehold.it/1380x540"/>
					</div>
					<div class="baner-content">
							<h4>Piraci Władysławowo znów na prowadzeniu!</h4>
							<p>Piraci Władysławowo wyprzedzili dotychczasowych 
									mistrzów aż o 20 punktów w klasyfikacji generalnej
							</p>
					</div>
				</div>
			</div>
		</header>
		<div class="home-main">
			<div class="events-info">
				<div class="info-frame">
					<div class="info-main">
						<div class="info-top">
							Sprawdź nadchodzące wydarzenia!
						</div>
						<img class="info-img" src="http://placehold.it/520x400"/>
						<div class="info-bot">
							Najbliższy mecz ligowy baseball już pod koniec lipca
						</div>
					</div>
					<div class="info-other">
						<div class="info-item">
							<img src="http://placehold.it/220x120"/>
							<div class="info-text">
								Piłka nożna mężczyzn
							</div>
						</div>
						<div class="info-item">
							<img src="http://placehold.it/220x120"/>
							<div class="info-text">
								Piłka siatkowa
							</div>
						</div>
						<div class="info-item">
							<img src="http://placehold.it/220x120"/>
							<div class="info-text">
								Kolarstwo
							</div>
						</div>
						<div class="info-item">
							<img src="http://placehold.it/220x120"/>
							<div class="info-text">
								Znajdź więcej wydarzeń
							</div>
						</div>
					</div>
				</div>
			</div>
			<aside class="home-players">
			</aside>
		</div>

	</main>
</template>
<style lang="scss" src="./Home.scss" scoped></style>
<script>
export default {
  name: "Home"
};
</script>