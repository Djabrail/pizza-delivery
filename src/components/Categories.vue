<template>
  <div class="categories">
    <ul>
      <li class="active">Все</li>
      <li v-for="(category, index) in categories" :key="category.index">
        {{ category.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
  },
};
</script>
