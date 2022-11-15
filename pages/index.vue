<template>
  <div class="main" v-if="countries">
    <Icon name="back" />
    <Icon class="main__svg" name="chevron" />
    <Icon name="search" />
    <Icon name="moon" />
    <Icon name="moonFill" />

    <div class="main__svg">
      <Icon name="back" />
    </div>

    <Card
      v-for="country in countries"
      :key="country.name.official"
      :cardData="country"
    />
  </div>
</template>

<script setup>
const { data: countries } = await useFetch('/api/countries');
</script>

<style lang="scss" scoped>
.main__svg {
  width: 200px;
  height: 200px;
  color: red;
}
</style>
