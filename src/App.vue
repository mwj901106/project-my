<template>
  <div> 
    <router-view></router-view>
  </div>
</template>

<script>

import Assort from "./pages/Assort/Assort";
import Product from "./pages/Product/Product";

export default {
  components:{
    Assort,
    Product
  }
}
</script>

<style>

</style>
