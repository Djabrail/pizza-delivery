<template>
<div class="container">
  <div class="content__top">
    <Categories />
    <SortPopup />
  </div>
  <h2 class="content__title">Все пиццы</h2>
  <div class="content__items">
    <PizzaBlock 
      v-for="product in products" 
      :key="product.id"
      :data="product" />
  </div>
  <PageControls />
</div>
</template>

<script>
import PizzaBlock from '@/components/PizzaBlock'
import SortPopup from '@/components/SortPopup'
import Categories from '@/components/Categories'
import PageControls from '@/components/PageControls'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {PizzaBlock, SortPopup, Categories, PageControls},
  computed: {
    ...mapGetters({products:"processedProducts"})
  }
}
</script>
