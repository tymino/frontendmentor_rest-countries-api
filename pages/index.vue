<template>
  <div class="main" v-if="countries">
    <div class="main__wrapper">
      <div class="main__filters"></div>
      <div class="main__list" v-if="countries">
        <Card
          class="main__list-item"
          v-for="country in countries"
          :key="country.name.official"
          :cardData="country"
        />
      </div>
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
  /* align-items: center; */
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
  padding: 20px 80px;

  border: 1px solid red;
}

/* .main__filters {
} */

.main__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 60px;
  column-gap: auto;
  border: 1px solid black;

  &-item {
  }
}
</style>
