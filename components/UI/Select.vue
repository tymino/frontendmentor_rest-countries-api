<template>
  <div class="container">
    <select
      class="container__select"
      :value="activeValue"
      @input="$emit('update:activeValue', $event.target.value)"
    >
      <option class="container__option" disabled value="">
        Выберите один из вариантов
      </option>
      <option
        class="container__option"
        v-for="value in arrayOfOptions"
        :key="value"
      >
        {{ value }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    activeValue: {
      type: String,
      default: '',
    },
    arrayOfOptions: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  padding: 20px 30px;
  background: var(--color-elements);
  border-radius: var(--border-radius);
}
</style>
