<template>
  <div class="list">
    <div class="list__line" v-for="data in listData" :key="data">
      <span>{{ data.name }}</span>
      {{ data.payload }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
};
</script>
