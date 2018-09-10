<template>
  <transition name="fade-normal">
    <div v-if="loading" class="pageloader-container">
      <div class="loader"/>
    </div>
  </transition>
</template>
<script>

export default {
  name: "PageLoader",
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 750);
  }
}

</script>

<style lang="scss" src="./PageLoader.scss" scoped/>