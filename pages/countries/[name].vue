<template>
  <div class="country">
    <MyLink
      class="country__link-home"
      linkTo="/"
      linkIconName="back"
      linkName="back"
    />

    <img class="country__flag" :src="country.flag" alt="flag" />

    <div class="country__description description">
      <h1 class="description__header">{{ country.header }}</h1>
      <div class="description__col--left">
        <div class="description__line">
          <span>native name:</span>
          {{ country.nativeName }}
        </div>
        <div class="description__line">
          <span>population:</span>
          {{ country.population }}
        </div>
        <div class="description__line">
          <span>region:</span>
          {{ country.region }}
        </div>
        <div class="description__line">
          <span>sub region:</span>
          {{ country.subregion }}
        </div>
        <div class="description__line">
          <span>capital:</span>
          {{ country.capital }}
        </div>
      </div>
      <div class="description__col--right">
        <div class="description__line">
          <span>top level domain:</span>
          {{ country.topLevelDomain }}
        </div>
        <div class="description__line">
          <span>currencies:</span>
          {{ country.currencies }}
        </div>
        <div class="description__line">
          <span>languages:</span>
          {{ country.languages }}
        </div>
      </div>
      <div class="description__footer">
        <span>border countries:</span>

        <div class="description__footer-links">
          <MyLink
            v-for="name in country.borders"
            :key="name"
            :linkTo="name"
            :linkName="name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const PARAM_NAME = route.params.name;
const { data: country } = await useFetch(`/api/countries/${PARAM_NAME}`, {
  initialCache: false,
});

// console.log(country);
</script>

<style lang="scss" scoped>
.country {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  row-gap: 60px;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
  padding: 60px 80px;

  font-size: 16px;

  &__link-home {
    justify-self: start;
  }

  &__flag {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    width: 84%;
  }
  &__description {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
}

.description {
  &__header {
  }
  &__col {
    &--left {
    }
    &--right {
    }
  }
  &__line {
    & > span {
      font-weight: 600;
      text-transform: capitalize;
    }
  }
}
</style>
