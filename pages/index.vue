<template>
  <div class="main" v-if="countriesForPage">
    <Card
      v-for="country in countriesForPage"
      :key="country.name.official"
      :cardData="country"
    />
  </div>
</template>

<script setup>
const { data: countries } = await useFetch(
  'https://restcountries.com/v3.1/all'
);
const countriesForPage = await countries.value.splice(0, 1);

// add server api
</script>

<style lang="scss" scoped></style>
