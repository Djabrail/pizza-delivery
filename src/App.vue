<template>
  <div id="app">
      <div class="home">
        <div class="wrapper">
          <Header />
            <div class="content">
              <router-view/>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import {mapActions} from 'vuex'
export default {
  components: {Header},
  methods: {
    ...mapActions(['getData'])
  },
  mounted() {
    this.getData()
  },

}
</script>

<style lang="scss">
</style>
