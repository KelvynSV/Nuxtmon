<template>
  <pokemons />
</template>

<script lang="ts">

import Vue from 'vue'
import '~/assets/global.css'
import Pokemons from '~/components/PokemonsList.vue'

export default Vue.extend({
  components: { Pokemons },
  name: 'IndexPage',
})
</script>

<style>
  body{
    background: #e0e0e0;
  }
</style>