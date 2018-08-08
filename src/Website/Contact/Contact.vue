<template>
    <main class="contact-container">
      <div class="contact-box">
				<div class="contact-header">
					<h4 class="header-text">Zadzwoń do nas bądź skorzystaj z naszego formularza!</h4>
				</div>
				<div class="contact-data">
					<img class="contact-img" src="@/Assets/logo.jpg"/>
					<table class="contact-text">
						<tr>Dane Kontaktowe:</tr>
						<tr>Imię i Nazwisko: Marcin X</tr>
						<tr>Telefon: 666 666 666</tr>
						<tr>E-mail: xd@gmail.com</tr>
					</table>
				</div>
				<div class="contact-form">
					<h4 class="form-header">
						Formularz kontaktowy
					</h4>
					<form class="form">
							<input class="input-name" type="text" placeholder="Imię"/>
							<input class="input-email" type="text" placeholder="E-mail"/>
							<input class="input-title" type="text" placeholder="Temat wiadomości"/>
							<textarea class="input-msg" placeholder="Treść wiadomości"></textarea>
					</form>
				</div>
      </div>
    </main>
</template>
<style lang="scss" src="./Contact.scss" scoped>

</style>
<script>
export default {
    name: "Contact"
}
</script>


