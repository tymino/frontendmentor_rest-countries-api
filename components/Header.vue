<template>
  <div class="header">
    <div class="header__content">
      <div class="header__content-title">Where in the world?</div>
      <UIToggle />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  background: var(--color-elements);
  box-shadow: 0px 0px 6px 2px var(--color-shadow);

  &__content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
    padding: 20px 80px;
    color: var(--color-text);

    &-title {
      font-size: 1.8rem;
      font-weight: 800;
    }
  }
}

@media (max-width: 630px) {
  .header {
    &__content {
      padding: 20px;

      &-title {
        font-size: 1.2rem;
      }
    }
  }
}
@media (max-width: 330px) {
  .header {
    &__content {
      padding: 20px;

      &-title {
        width: 120px;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
