<template>
<div>
    <div class="pokemon-card-container block-inline">
        <pokemon-card v-for="puke in pokemons" :pokemon="puke" :key="puke.name"/>
    </div>
</div>
</template>

<script>
import _ from 'lodash';

export default {
    async beforeMount(){
        this.loadPokemonsInList(48);
    },

    async mounted(){
        window.onscroll = _.debounce(() => {
            if (document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight - 250)
                this.loadPokemonsInList(28);
        }, 500)
    },

    data() {
        return {
            pokemons: [],
            loadedPokemons: 0,
            loadingPokemons: false
        }
    },

    methods: {
        async loadPokemonsInList (quantidade) {
            if (this.loadingPokemons) return;
            this.loadingPokemons = true;

            var response = await fetch('https://pokeapi.co/api/v2/pokemon-form?limit='+quantidade+'&offset='+this.loadedPokemons);
            this.loadedPokemons += quantidade;

            var pokemons = await response.json();
            if (pokemons.results.lenght == 0) this.loadPokemonsInList = null;

            for(var pokemon of pokemons.results) {
                var detailResponse = await fetch(pokemon.url);

                if (detailResponse.ok) {
                    var detailPokemon = await detailResponse.json();
                    this.pokemons.push(detailPokemon);
                }
            }

            this.loadingPokemons = false;
        }
    }
}
</script>

<style scoped>
    .pokemon-card-container{
        margin: auto;
        max-width: 1100px;
        padding-top: 20px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>