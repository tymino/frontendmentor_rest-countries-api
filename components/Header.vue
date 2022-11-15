<template>
  <div class="header">
    <div class="header__wrapper">
      <h1 class="header__title">Where in the world?</h1>
      <Toggle class="header__toggle" />
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  background: var(--color-elements);
  box-shadow: 0px 0px 6px 2px var(--color-shadow);

  &__wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
    padding: 20px 80px;
    color: var(--color-text);
  }
}

.header__title {
  font-size: 1.8rem;
}

.header__toggle {
}
</style>
