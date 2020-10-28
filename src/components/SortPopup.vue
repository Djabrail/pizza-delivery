<template>
<div class="sort">
  <div class="sort__label">
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
        fill="#2C2C2C"
      />
    </svg>
    <b>Сортировка по:</b>
    <span @click="onSelect">{{currentItem}}</span>
  </div>
  <div v-show="sortPopup" class="sort__popup">
    <ul>
      <li v-for="item in items" @click="selected(item)" :key="item.value">{{item.label}}</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { value: 'rating', label: 'популярному' },
        { value: 'price', label: 'цене' },
        { value: 'name', label: 'алфавиту' },
      ],
      currentItem: null,
      sortPopup: false

    }
  },
  mounted(){
    this.currentItem = this.items[0].label
  },
   methods: {
     onSelect(){
       this.sortPopup = !this.sortPopup
     },
     selected(item) {
       this.currentItem = this.items.find(obj => obj.value === item.value).label;
       this.onSelect()
     }
   }
}
</script>