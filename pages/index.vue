<template>
  <div class="main" v-if="countries">
    <div class="main__container container">
      <div class="container__filters">
        <UISearch v-model:searchValue="searchValue" />
        <UISelect :options="sortOptions" v-model:option="sortSelected" />
      </div>
      <div class="container__loading" v-if="pending">Loading...</div>
      <div class="container__list" v-else>
        <Card
          class="container__list-item"
          v-for="country in countries"
          :key="country.header"
          :cardData="country"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const timer = ref(null);

const searchValue = ref('');
const sortSelected = ref('');
const sortOptions = ref([
  { value: '', name: 'Filter by Region' },
  { value: 'africa', name: 'Africa' },
  { value: 'americas', name: 'America' },
  { value: 'asia', name: 'Asia' },
  { value: 'europe', name: 'Europe' },
  { value: 'oceania', name: 'Oceania' },
  { value: 'antarctic', name: 'Antarctic' },
]);

const { data: countries, pending } = useLazyAsyncData('countries', () =>
  $fetch(`/api/all?search=${searchValue.value}&filter=${sortSelected.value}`)
);

const refreshCountries = () => {
  const TIME_OUT = 1000;

  if (timer.value) {
    clearTimeout(timer.value);
  }

  timer.value = setTimeout(() => {
    refreshNuxtData('countries');
  }, TIME_OUT);
};

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

.container {
  &__filters {
    display: flex;
    justify-content: space-between;
    margin: 40px 0px;
  }

  &__loading {
    color: var(--color-text);
    font-size: 2rem;
    font-weight: 800;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 240px);
    justify-content: space-between;

    &-item {
      margin-bottom: 60px;
    }
  }
}

@media (max-width: 1160px) {
  .container__list {
    grid-template-columns: repeat(3, 240px);
  }
}

@media (max-width: 910px) {
  .container__list {
    grid-template-columns: repeat(2, 240px);
  }
}

@media (max-width: 670px) {
  .container__list {
    grid-template-columns: repeat(1, 240px);
    justify-content: center;
  }
}
</style>
