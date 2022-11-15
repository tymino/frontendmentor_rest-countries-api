<template>
  <div class="main" v-if="countries">
    <div class="main__filters"></div>
    <div class="main__list" v-if="countries">
      <Card
        class="main__item"
        v-for="country in countries"
        :key="country.name.official"
        :cardData="country"
      />
    </div>
  </div>
</template>

<script setup>
const { data: countries } = await useFetch('/api/countries');
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  margin: 80px;
}

/* .main__filters {
} */

.main__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-auto-rows: min-content;
  row-gap: 40px;
  column-gap: 60px;
}
</style>
