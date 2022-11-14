<template>
  <div class="card">
    <img class="card__flag" :src="cardData.flags.png" alt="flag" />
    <div class="card__name">{{ setName }}</div>
    <div class="card__population">population: {{ setPopulation }}</div>
    <div class="card__region">region: {{ setRegion }}</div>
    <div class="card__capital">capital: {{ setCapital }}</div>
  </div>
</template>

<script>
export default {
  props: {
    // currentLang: {
    //   type: String,
    //   required: true,
    //   default: 'en',
    // },
    cardData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    setName() {
      return this.cardData.name.official || '';
    },
    setPopulation() {
      return this.cardData.population
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    setRegion() {
      return this.cardData.region || '';
    },
    setCapital() {
      return this.cardData.capital[0] || '';
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
}

.card__flag {
  width: 200px;
  height: auto;
}
.card__name {
  font-weight: 300;
}
</style>
