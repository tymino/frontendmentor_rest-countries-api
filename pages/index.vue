<template>
  <div class="main">
    <Card
      v-for="(country, index) in countriesForPage"
      :key="index"
      :cardData="country"
    />
  </div>
</template>

<script setup>
const { data: countries } = await useFetch(
  'https://restcountries.com/v3.1/all'
);
const countriesForPage = await countries.value.splice(0, 10);

console.log('main page', countriesForPage);
</script>

<style lang="scss" scoped></style>
