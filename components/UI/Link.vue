<template>
  <NuxtLink class="link" :to="lowerCaseLink">
    <Icon class="link__icon" v-if="linkIconName" :name="linkIconName" />
    <div class="link__name">{{ linkName }}</div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    linkTo: {
      type: String,
      default: '/',
    },
    linkIconName: {
      type: String,
      default: '',
    },
    linkName: {
      type: String,
      default: 'link',
    },
  },
  computed: {
    lowerCaseLink() {
      return this.linkTo.toLowerCase();
    },
  },
};
</script>

<style lang="scss" scoped>
.link {
  display: flex;
  align-items: center;
  padding: 6px 24px;
  background: var(--color-elements);
  border-radius: var(--border-radius);
  box-shadow: 0px 0px 6px 2px var(--color-shadow);
  color: var(--color-text);
  text-decoration: none;

  &__icon {
    margin-right: 10px;
  }

  &__name {
    margin-right: 6px;
    font-weight: 600;
    text-transform: capitalize;
  }
}
</style>
