<template>
  <div class="country">
    <!-- {{ country }} -->
    <MyLink
      class="country__link-home"
      linkTo="/"
      linkIconName="back"
      linkName="back"
    />
    <div class="country__flag"></div>
    <div class="country__description description"></div>
  </div>
</template>

<script setup>
const route = useRoute();

const MAIN_URL = `https://restcountries.com/v3.1/name`;
const PARAM_NAME = route.params.name;

const { data: country } = await useFetch(`${MAIN_URL}/${PARAM_NAME}`);
</script>

<style lang="scss" scoped>
.country {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);

  &__link-home {
    justify-self: start;
  }

  &__flag {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    width: 200px;
    height: 200px;
    background: red;
  }
  &__description {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    width: 200px;
    height: 200px;
    background: blue;
  }
}
</style>
