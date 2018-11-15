<template>
	<main class="website-main">
		<div class="website-container">
			<header class="website-header">
				<h1 class="title is-3">Kontakt</h1>
			</header>
			<section class="contact">
				<ContactForm></ContactForm>
				<ContactInfo></ContactInfo>
			</section>
		</div>
		<Footer></Footer>
	</main>
</template>

<script>

	import ContactForm from "./ContactForm/ContactForm";
  import ContactInfo from "./ContactInfo/ContactInfo";

  export default {
		name: "Contact",
    components: {
		  ContactInfo,
			ContactForm
		}
  };

</script>

<style lang="scss" src="./Contact.scss" scoped />