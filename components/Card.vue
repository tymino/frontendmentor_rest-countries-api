<template>
  <div class="card">
    <img class="card__flag" :src="cardData.flags.png" alt="flag" />
    <div class="card__wrapper">
      <div class="card__name">{{ setName }}</div>
      <div class="card__description card__description--population">
        <span>population:</span> {{ setPopulation }}
      </div>
      <div class="card__description card__description--region">
        <span>region:</span> {{ setRegion }}
      </div>
      <div class="card__description card__description--capital">
        <span>capital:</span> {{ setCapital }}
      </div>
    </div>
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
  width: 240px;
  background: var(--color-elements);
  box-shadow: 0px 0px 6px 2px var(--color-shadow);
  border-radius: var(--border-radius);
  color: var(--color-text);

  &__wrapper {
    padding: 22px;
  }

  &__flag {
    width: 240px;
    height: 140px;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }

  &__name {
    margin-bottom: 10px;
    font-size: 1.2rem;
    font-weight: 600;
  }

  &__description {
    margin-bottom: 4px;
    font-size: 1rem;
    font-weight: 300;

    & > span {
      font-weight: 600;
      text-transform: capitalize;
    }
  }
}
</style>
