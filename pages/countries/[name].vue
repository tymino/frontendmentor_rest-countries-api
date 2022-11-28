<template>
  <div class="country">
    <UILoading v-if="pending" />
    <div class="country__content content" v-else>
      <UILink
        class="content__link-home"
        linkTo="/"
        linkIconName="back"
        linkName="back"
      />

      <img class="content__flag" :src="country.flag" alt="flag" />

      <div class="content__description description">
        <h1 class="description__header">{{ country.header }}</h1>
        <div class="description__col">
          <div class="description__col--left">
            <div class="description__line">
              <span>native name:</span>
              {{ country.nativeName }}
            </div>
            <div class="description__line">
              <span>population:</span>
              {{ country.population }}
            </div>
            <div class="description__line">
              <span>region:</span>
              {{ country.region }}
            </div>
            <div class="description__line">
              <span>sub region:</span>
              {{ country.subRegion }}
            </div>
            <div class="description__line">
              <span>capital:</span>
              {{ country.capital }}
            </div>
          </div>
          <div class="description__col--right">
            <div class="description__line">
              <span>top level domain:</span>
              {{ country.topLevelDomain }}
            </div>
            <div class="description__line">
              <span>currencies:</span>
              {{ country.currencies }}
            </div>
            <div class="description__line">
              <span>languages:</span>
              {{ country.languages }}
            </div>
          </div>
        </div>

        <div class="description__footer">
          <div class="description__footer-name">border countries:</div>

          <div class="description__footer-links">
            <UILink
              class="description__footer-links-item"
              v-for="name in country.borders"
              :key="name"
              :linkTo="name"
              :linkName="name"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const PARAM_NAME = route.params.name;
const { data: country, pending } = useLazyFetch(
  `/api/countries/${PARAM_NAME}`,
  {
    initialCache: false,
  }
);
</script>

<style lang="scss" scoped>
.country {
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
  padding: 60px 80px;
}
.content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  row-gap: 60px;
  justify-content: space-between;

  font-size: 16px;

  &__link-home {
    justify-self: start;
  }

  &__flag {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    width: 537px;
    height: 357px;
    margin-right: 20px;
  }

  &__description {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
}

.description {
  color: var(--color-text);

  &__header {
    margin: 20px 0px;
  }
  &__col {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    /* &--left {
    }
    &--right {
    } */
  }
  &__line {
    margin-bottom: 8px;
    font-weight: 300;

    & > span {
      font-weight: 600;
      text-transform: capitalize;
    }
  }

  &__footer {
    display: grid;
    grid-template-columns: auto 1fr;
    row-gap: 10px;

    &-name {
      margin-right: 20px;
      padding-top: 6px;
      font-weight: 600;
      text-transform: capitalize;
    }
    &-links {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;

      &-item:not(:last-child) {
        margin: 0px 10px 10px 0px;
      }
    }
  }
}

@media (max-width: 1200px) {
  .content {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, auto);
    justify-items: center;
    row-gap: 40px;

    &__flag {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      margin-right: 0px;
    }

    &__description {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }
  }
}

@media (max-width: 780px) {
  .content {
    &__flag {
      width: 100%;
      height: auto;
    }
  }
}

@media (max-width: 630px) {
  .country {
    padding: 40px 20px;
  }
}

@media (max-width: 520px) {
  .description {
    &__col {
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 40px;

      &--left {
        margin-bottom: 30px;
      }
    }
  }
}
</style>
