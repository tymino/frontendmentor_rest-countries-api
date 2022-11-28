<template>
  <NuxtLink class="card" :to="setLinkPath">
    <img class="card__flag" :src="cardData.flag" alt="flag" />
    <div class="card__wrapper">
      <div class="card__name">{{ cardData.header }}</div>
      <div class="card__description card__description--population">
        <span>population:</span> {{ cardData.population }}
      </div>
      <div class="card__description card__description--region">
        <span>region:</span> {{ cardData.region }}
      </div>
      <div class="card__description card__description--capital">
        <span>capital:</span> {{ cardData.capital }}
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    setLinkPath() {
      return `/countries/${this.cardData.header.toLowerCase()}`;
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
  text-decoration: none;

  &__wrapper {
    padding: 22px;
  }

  &__flag {
    width: 240px;
    height: 150px;
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
