<template>
  <main class="website-container details-container">
    <div class="event-description">
      <img class="event-logo" src="@/Assets/Home/event.jpg"/>
      <div class="event-desc">
        <div>
          <h4 class="description-header">Mistrzostwa Juniorów - TryActive 2018 - Władysławowo</h4>
          <label>Miejsce: Hala Sportowa nr. 1 - ul. Kaźmierczaka 12</label>
          <p>Czas: 14 lipiec 2018, od 12:00</p>
        </div>
        <button class="regulations-download">Pobierz regulamin imprezy</button>
      </div> 
    </div>
    <div class="event-location">
			<div class="location-heading">
				<h4>Lokalizacja Osiedla/Wsi</h4>
			</div>
			<iframe class="location-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2317.304043924749!2d18.53720831602352!3d54.49286009591487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda0c8f6a33105%3A0xa2dd70483b763ed1!2sPPNT+Gdynia!5e0!3m2!1spl!2spl!4v1529589490438"
			  width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen>
			</iframe>
		</div>
    <div class="rank-table">
			<div class="list-header">
				<h4 class="header-text">Ranking punktowy imprezy</h4>
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
    <div class="score-table">
      <div class="list-header">
				<h4 class="header-text">Tabela wyników</h4>
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
    <div class="photos-baner">
      <img src="@/Assets/Home/info-2.jpg"/>
      <div class="baner-text">
        Sprawdź wszystkie zdjęcia z tego wydarzenia!
        Możesz je znaleźć również na naszej stronie FB!
      </div>
    </div>
    <div class="photo-gallery">
			<div class="table-heading">
				<h4>Zdjęcia z imprezy</h4>
					<div class="list-buttons">
					<button @click="moveLeft" class="arrow-left">
						<svg aria-hidden="true" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-left fa-w-10 fa-3x"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
					</button>
					<button @click="moveRight" class="arrow-right">
						<svg aria-hidden="true" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10 fa-2x"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
					</button>
				</div>
			</div>
			<div class="table-list">
				<div ref="tableFrame" v-bind:style="{left : frameLeft}" class="table-frame">
					<div class="list-item">
						<img src="@/Assets/Home/info.jpg" class="item-background"/>
					</div>
					<div class="list-item">
						<img src="@/Assets/Home/info.jpg" class="item-background"/>
					</div>
          <div class="list-item">
						<img src="@/Assets/Home/info.jpg" class="item-background"/>
					</div>
          <div class="list-item">
						<img src="@/Assets/Home/info.jpg" class="item-background"/>
					</div>
          <div class="list-item">
						<img src="@/Assets/Home/info.jpg" class="item-background"/>
					</div>
          <div class="list-item">
						<img src="@/Assets/Home/info.jpg" class="item-background"/>
					</div>
          <div class="list-item">
						<img src="@/Assets/Home/info.jpg" class="item-background"/>
					</div>
          <div class="list-item">
						<img src="@/Assets/Home/info.jpg" class="item-background"/>
					</div>
          <div class="list-item">
						<img src="@/Assets/Home/info.jpg" class="item-background"/>
					</div>
          <div class="list-item">
						<img src="@/Assets/Home/info.jpg" class="item-background"/>
					</div>
          <div class="list-item">
						<img src="@/Assets/Home/info.jpg" class="item-background"/>
					</div>
				</div>
			</div>
    </div>
  </main>
</template>
<script>
export default {
	name: "EventDetails",
	data: function()
		{
			return{
				left: 0
			}
		},
		computed:
		{
			frameLeft: function()
			{
				return this.left + 'px';
			}
		},
		methods:
		{
			moveRight()
			{
				console.log(this.left);
				console.log(-this.$refs.tableFrame.childNodes[0].clientWidth * this.$refs.tableFrame.childNodes.length);
				if(this.left >= ((-this.$refs.tableFrame.childNodes[0].clientWidth + 10) * this.$refs.tableFrame.childNodes.length /2) + this.$refs.tableFrame.clientWidth)
				{
					this.left -= this.$refs.tableFrame.childNodes[0].clientWidth;
				}
			},
			moveLeft()
			{
				if(this.left < 0)
					this.left += this.$refs.tableFrame.childNodes[0].clientWidth;
			}
		}
}
</script>
<style scoped lang="scss" src="./EventDetails.scss"></style>