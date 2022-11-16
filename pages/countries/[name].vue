<template>
  <div class="country">{{ country }}</div>
</template>

<script setup>
const route = useRoute();

const MAIN_URL = `https://restcountries.com/v3.1/name`;
const PARAM_NAME = route.params.name;

const { data: country } = await useFetch(`${MAIN_URL}/${PARAM_NAME}`);
</script>

<style lang="scss" scoped></style>
