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
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
  padding: 20px 80px;
}

/* .main__filters {
} */

.main__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &-item {
    margin-bottom: 60px;

    &:not(:nth-child(4n)) {
      margin-right: 22px;
    }
    &:last-child {
      margin-right: 0px;
    }
  }
}

@media (max-width: 1185px) {
  .main__list {
    &-item {
      &:not(:nth-child(4n)) {
        margin-right: 0px;
      }
      &:not(:nth-child(3n)) {
        margin-right: 20px;
      }
    }
  }
}

@media (max-width: 919px) {
  .main__list {
    &-item {
      &:not(:nth-child(3n)) {
        margin-right: 0px;
      }
      &:not(:nth-child(2n)) {
        margin-right: 20px;
      }
    }
  }
}
</style>
