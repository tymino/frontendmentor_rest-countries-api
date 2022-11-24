<template>
  <div class="wrapper">
    <div class="select" @click="handleOpenOfOptions">
      <div class="select__value">
        {{ selectedOption }}
      </div>
      <Icon class="select__chevron" name="chevron" />

      <div class="select__options" v-if="isOpenSelect">
        <div
          class="select__options-item"
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpenSelect: true,
      selectedOption: 'default',
    };
  },
  props: {
    options: {
      type: Array,
      default: () => [{ value: 'default', name: 'default' }],
    },
  },
  methods: {
    handleOpenOfOptions() {
      this.isOpenSelect = !this.isOpenSelect;
    },
    changeSelect(event) {
      this.$emit('update:selectedValue', event.target.value);
    },
  },
  mounted() {
    this.selectedOption = this.options[0].name;
  },
};
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 100%;
  padding: 14px;
  background: var(--color-elements);
  border-radius: var(--border-radius);
  box-shadow: 0px 2px 4px 0px var(--color-shadow);
  color: var(--color-text);

  user-select: none;
  cursor: pointer;

  &__value {
    font-weight: 600;
  }

  &__chevron {
    width: 16px;
    height: 16px;
    margin-left: 10px;
  }
}

.select__options {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 14px;
  margin-top: 4px;

  background: var(--color-elements);
  border-radius: var(--border-radius);
  box-shadow: 0px 2px 4px 0px var(--color-shadow);

  &-item {
    padding: 2px 0px;

    &:hover {
      font-weight: 600;
    }
  }
}
</style>
