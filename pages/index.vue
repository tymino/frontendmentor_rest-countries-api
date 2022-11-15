<template>
  <div class="main" v-if="countries">
    <Icon name="ion:md-arrow-round-back" />
    <Icon class="main__svg" name="charm:chevron-down" />
    <Icon name="ic:baseline-search" />
    <Icon name="ri:moon-line" />
    <Icon name="ri:moon-fill" />

    <div class="main__svg">
      <Icon name="ion:md-arrow-round-back" />
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
