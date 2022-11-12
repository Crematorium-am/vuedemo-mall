<template>
  <div class="home-floor">
    <floor-item v-for="(item, index) in floordata" :key="index" :flooritem="item">     
    </floor-item>
  </div>
</template>

<script>
  import FloorItem from './FloorItem.vue'

  export default {
    name: 'HomeFloor',
    data(){
      return {
      }
    },
    components: {
      FloorItem
    },
    props: {
      floordata: {
        type: Array,
        default(){
          return []
        }
      }
    },
    methods: {
    }
  }
</script>

<style>
</style>