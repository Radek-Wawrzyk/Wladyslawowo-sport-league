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
									mistrzów aż o 20 punktów w klasyfikacji generalnej</p>
					</div>
				</div>
			</div>
		</header>
		<div class="columns">
			<div class="column is-one-fifth"></div>
			<div class="column is-three-fifths">
				<div class="home-main">
					<div class="home-events">
						<img src="http://placehold.it/950x550"/>
						<div class="events">
							<div class="columns">
								<div class="column is-three-quarters bars">
									<div class="event-topbar">
										Sprawdź nadchodzące wydarzenia!
									</div>
									<div class="event-botbar">
										Najbliższy mecz ligowy baseball już pod koniec lipca
									</div>
								</div>
								<div class="column is-one-quarter events-other">
									<div class="event-item">
										<img src="http://placehold.it/150x100"/>
										<div class="item-bar">
											Piłka nożna mężczyzn
										</div>
									</div>
									<div class="event-item">
										<img src="http://placehold.it/150x100"/>		
										<div class="item-bar">
											Siatkówka plażowa
										</div>								
									</div>
									<div class="event-item">
										<img src="http://placehold.it/150x100"/>	
										<div class="item-bar">
											Kolarstwo
										</div>									
									</div>
									<div class="event-item">
										<img src="http://placehold.it/150x100"/>			
										<div class="item-bar">
											Znajdź więcej wydarzeń
										</div>							
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="column is-two-fifths">
				<aside class="event-sidebar">
				</aside>
			</div>
		</div>
	</main>
</template>
<style lang="scss" src="./Home.scss" scoped></style>
<script>
export default {
  name: "Home"
};
</script>