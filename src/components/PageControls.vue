<template>
    <div v-if="pageCount > 1" class="nav">
        <button 
            v-for="i in pageNumbers" 
            :key="i"
            :class="{'active': i == currentPage}"
            @click="setCurrentPage(i)">
            {{i}}
        </button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
 computed: {
     ...mapState(['currentPage']),
     ...mapGetters(['pageCount']),
     pageNumbers() {
         return [...Array(this.pageCount + 1).keys()].slice(1)
     }
 },
 methods: {
     ...mapMutations(["setCurrentPage"])
 }   
}
</script>


<style scoped>
.nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
button {
    width: 70px;
    background-color: #f3f3f3;
    border: 2px solid #f3f3f3;
    border-radius: 10px;
    padding: 6px;
    color: #000;
    font-weight: 700;
    cursor: pointer;
    margin: 3px;
}
button:hover {
    background-color: #fff;
    border: 2px solid #f3f3f3;
}
button.active {
    background-color: #fff;
    border: 2px solid #f3f3f3;
}
</style>