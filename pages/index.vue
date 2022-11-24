<template>
  <div class="main" v-if="countries">
    <div class="main__wrapper">
      <div class="main__filters">
        <UISearch v-model:searchValue="searchValue" />
        <UISelect :options="sortOptions" v-model:option="sortSelected" />
      </div>
      <div class="main__load" v-if="pending">Loading...</div>
      <div class="main__list" v-else>
        <Card
          class="main__list-item"
          v-for="country in countries"
          :key="country.header"
          :cardData="country"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const searchValue = ref('');
const sortSelected = ref('');
const sortOptions = ref([
  { value: '', name: 'Filter by Region' },
  { value: 'Africa', name: 'Africa' },
  { value: 'America', name: 'America' },
  { value: 'Asia', name: 'Asia' },
  { value: 'Europe', name: 'Europe' },
  { value: 'Oceania', name: 'Oceania' },
]);

const { data: countries, pending } = useLazyAsyncData('countries', () =>
  $fetch(`/api/all?search=${searchValue.value}&filter=${sortSelected.value}`)
);



const refreshCountries = () => refreshNuxtData('countries');

watch(searchValue, refreshCountries);
watch(sortSelected, refreshCountries);
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
  margin-bottom: 20px;
  padding: 0px 80px;
}

.main__filters {
  display: flex;
  justify-content: space-between;
  margin: 40px 0px;
}

.main__list {
  display: grid;
  grid-template-columns: repeat(4, 240px);
  justify-content: space-between;

  &-item {
    margin-bottom: 60px;
  }
}

@media (max-width: 1160px) {
  .main__list {
    grid-template-columns: repeat(3, 240px);
  }
}

@media (max-width: 910px) {
  .main__list {
    grid-template-columns: repeat(2, 240px);
  }
}
@media (max-width: 670px) {
  .main__list {
    grid-template-columns: repeat(1, 240px);
    justify-content: center;
  }
}
</style>
