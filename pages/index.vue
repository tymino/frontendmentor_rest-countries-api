<template>
  <div class="main">
    <h1 v-for="(c, index) in countriesForPage" :key="index">
      Welcome to the homepage
    </h1>
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
