<template>
  <div class="country">
    {{ country }}
    <MyLink
      class="country__link-home"
      linkTo="/"
      linkIconName="back"
      linkName="back"
    />

    <!-- <img class="country__flag" :src="country.flags.png" alt="flag" /> -->

    <div class="country__description description">
      <!-- <div class="description__header">{{ country.name.common }}</div> -->
      <div class="description__col--left">
        <div class="description__native-name">
          <span>Native Name:</span>
          {{}}
        </div>
      </div>
      <div class="description__col--right"></div>
      <div class="description__footer"></div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const PARAM_NAME = route.params.name;
const { data: country } = await useFetch(`/api/countries/${PARAM_NAME}`, {
  initialCache: false,
});

// console.log(country.flags.png);
</script>

<style lang="scss" scoped>
.country {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);

  &__link-home {
    justify-self: start;
    align-self: start;
  }

  &__flag {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    width: 200px;
    height: 200px;
    background: red;
  }
  &__description {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    width: 200px;
    height: 200px;
    background: blue;
  }
}
</style>
