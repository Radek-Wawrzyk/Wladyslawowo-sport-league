<template>
  <main class="website-container">
    <div class="tabs">
      <ul class="tab-headers">
        <li @click="switchVisible(0)" v-bind:class="{active : visibleTab == 0}" class="tab">Players</li>
        <li @click="switchVisible(1)" v-bind:class="{active : visibleTab == 1}"  class="tab">Settlements</li>
        <li @click="switchVisible(2)" v-bind:class="{active : visibleTab == 2}" class="tab">Events</li>
        <li @click="switchVisible(3)" v-bind:class="{active : visibleTab == 3}" class="tab">News</li>
      </ul>
    </div>
    <div class="tab-contents">
      <div v-if="visibleTab == 0" class="tab-content">
        <ul class="result-list">
          <li class="result-item" :key="index" v-for="(item,index) in results.players">
            <router-link :to="{ name: 'SearchPlayer', params: {id : item.id}}">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>

      <div v-if="visibleTab == 1" class="tab-content">
        <ul class="result-list">
          <li class="result-item" :key="index" v-for="(item,index) in results.settlements">
            <router-link :to="{ name: 'SearchSettlement', params: {id : item.id}}">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>

      <div v-if="visibleTab == 2" class="tab-content">
        <ul class="result-list">
          <li class="result-item" :key="index" v-for="(item,index) in results.events">
            <router-link :to="{ name: 'SearchEvent', params: {id : item.id}}">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>

      <div v-if="visibleTab == 3" class="tab-content">
        <ul class="result-list">
          <li class="result-item" :key="index" v-for="(item,index) in results.news">
            <router-link :to="{ name: 'SearchNews', params: {id : item.id}}">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  props: ['phrase'],
  name: "SearchResults",
  data()
  {
    return{
      visibleTab: 0
    };
  },
  methods:
  {
    switchVisible(tab)
    {
      this.visibleTab = tab;
    }
  },
  computed:
  {
    results()
    {
      return this.$store.getters.search(this.phrase);
    }
  }
}
</script>
<style scoped lang="scss" src="./SearchResults.scss"></style>
