<template>
  <div class="toggle" @click="toggleTheme">
    <Icon class="toggle__icon" :name="setIcon()" />
    <div class="toggle__name">dark mode</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userTheme: 'light-theme',
    };
  },
  methods: {
    setIcon() {
      return this.userTheme === 'light-theme' ? 'moon' : 'moonFill';
    },
    setTheme(theme) {
      this.userTheme = theme;
      document.documentElement.className = theme;
    },
    toggleTheme() {
      this.userTheme === 'light-theme'
        ? this.setTheme('dark-theme')
        : this.setTheme('light-theme');
    },
  },
};
</script>

<style lang="scss" scoped>
.toggle {
  display: flex;
  align-items: center;
  cursor: pointer;

  &__icon {
    width: 20px;
    width: 20px;
  }

  &__name {
    margin-left: 10px;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: capitalize;
  }
}

@media (max-width: 600px) {
  .toggle {
    &__name {
      font-size: 1rem;
    }
  }
}

@media (max-width: 330px) {
  .toggle {
    justify-content: flex-end;

    &__name {
      width: 40px;
    }
  }
}
</style>
