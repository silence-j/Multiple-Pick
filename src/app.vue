<template>
<div>
    <multiple-pick/>
</div>
</template>
<script>
import VueMultiplePick from './lib/index'
import Vue from 'vue'
Vue.use(VueMultiplePick)
export default{
   name: 'app',
   data(){
     return{
       test: 'test'  
     }  
   },
   methods:{
   },
   created(){
   }
}
</script>
<style>
</style>