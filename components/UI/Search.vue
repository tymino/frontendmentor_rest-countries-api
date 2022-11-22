<template>
  <div class="search">
    <Icon class="search__icon" name="search" />
    <input
      class="search__input"
      type="text"
      placeholder="Search for a country..."
      :value="searchValue"
      @input="$emit('update:searchValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    searchValue: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  padding: 20px 30px;
  background: var(--color-elements);
  border-radius: var(--border-radius);

  &__icon {
    margin-right: 20px;
    color: var(--color-text);
  }
  &__input {
    width: 100%;
    padding-top: 1px;
    background: none;
    border: none;
    border-bottom: 1px solid rgba(#000000, 0);
    color: var(--color-text);

    &::placeholder {
      color: var(--color-text);
    }

    &:focus {
      border-bottom: 1px solid var(--color-text);
      outline: none;
    }
  }
}
</style>
