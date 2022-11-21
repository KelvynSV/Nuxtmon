<template>
  <div class="nm-card pokemon-card">
    <span class="span-id title">{{pokemon.id}}</span>
    <img :src="pokemon.sprites.front_default" alt="Imagem do pokemon">
    <div class="px-6 py-4">
      <p class="pokemon-card-title title">{{pokemon.name}}</p>
      <p>
        {{pokemon.version_group.name}}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <pokemon-type-tag v-for=" type in pokemon.types" :type="type" :key="type.type.name"/>
    </div>
  </div>
</template>

<script>
import PokemonTypeTag from './PokemonTypeTag.vue'
  export default {
  components: { PokemonTypeTag },
    props: {
        pokemon: {
            type: Object,
            default: () => {}
        }
    }
  }
</script>

<style scoped>
  .pokemon-card{
    width: 220px;
    margin: 20px;
    padding: 30px 10px 30px 10px;
    display: inline-block;
    text-align: center;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
  }

  .pokemon-card-title{
    margin-top: 0px;
    text-transform: capitalize;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .span-id{
    width: 40px;
    height: 40px;
    line-height: 40px;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 20px;
    background-color: #939cc7;
    border-radius: 50px;
    color: white;
    text-align: center;
    box-shadow:  2px 2px 8px #909090;
  }
</style>