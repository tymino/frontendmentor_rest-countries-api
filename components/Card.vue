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
  background: var(--color-elements);
  box-shadow: 0px 0px 6px 2px var(--color-shadow);
  color: var(--color-text);

  &__flag {
    width: 200px;
    height: auto;
  }

  &__name {
    font-weight: 300;
  }
}
</style>
