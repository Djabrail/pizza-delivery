<template>
  <div class="categories">
    <ul>
      <li 
        v-for="(category, index) in categories" 
        :key="index"
        @click="setCurrentCategory(category)"
        v-bind:class="category == currentCategory ? 'active' : ''">
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters} from 'vuex'
export default {
  computed: {
    ...mapState(['currentCategory']),
    ...mapGetters(['categories'])
  },
  methods: {
    ...mapMutations(['setCurrentCategory'])
  }
};
</script>
