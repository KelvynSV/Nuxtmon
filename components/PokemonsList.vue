<template>
<div>
    <div class="pokemon-card-container block-inline">
        <pokemon-card v-for="puke in pokemons" :pokemon="puke" :key="puke.name"/>
    </div>
</div>
</template>

<script>
export default {
   /* async fetch() {
        this.pokeForms = await fetch('https://pokeapi.co/api/v2/pokemon-form?limit=100.').then((res) => res.json());

        for (let index = 0; index < this.pokeForms.results.length; index++) {
            const element = this.pokeForms.results[index];
            const temppoke = await fetch('https://pokeapi.co/api/v2/pokemon-form/'+element.name).then((res) => res.ok? res.json(): null);
            if (temppoke) this.pokemons.push(temppoke);
        }
    },
*/
    async beforeMount(){
        this.loadPokemonsInList(48);
    },

    async mounted(){
        window.onscroll = () => {
            if (document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight)
                this.loadPokemonsInList(28);
        }
    },

    data() {
        return {
            pokemons: [],
            loadedPokemons: 0
        }
    },

    methods: {
        async loadPokemonsInList(quantidade) {
            await new Promise(resolve => setTimeout(resolve, 2000));

            var response = await fetch('https://pokeapi.co/api/v2/pokemon-form?limit='+quantidade+'&offset='+this.loadedPokemons);
            this.loadedPokemons += quantidade;

            var pokemons = await response.json();
            if (pokemons.results.lenght < quantidade) this.loadPokemonsInList = null;

            for(var pokemon of pokemons.results) {
                var detailResponse = await fetch('https://pokeapi.co/api/v2/pokemon-form/'+pokemon.name);

                if (detailResponse.ok) {
                    var detailPokemon = await detailResponse.json();
                    this.pokemons.push(detailPokemon);
                }
            }
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