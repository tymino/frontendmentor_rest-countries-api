<template>
  <div class="card">
    <img class="card__flag" :src="cardData.flags.png" alt="flag" />
    <div class="card__name">{{ cardData.name.common }}</div>
    <div class="card__population">population: {{ setPopulation }}</div>
    <div class="card__region">region: {{ cardData.region }}</div>
    <div class="card__capital">capital: {{ cardData.capital[0] }}</div>
  </div>
</template>

<script>
export default {
  props: {
    currentLang: {
      type: String,
      required: true,
      default: 'en',
    },
    cardData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    setPopulation() {
      return this.cardData.population
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
}
</style>
