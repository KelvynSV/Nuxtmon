<template>
  <label :style="typeColor">{{type.type.name}}</label>
</template>

<script>
export default {
    props: {
        type: Object
    },
    computed: {
        typeColor(){
            switch (this.type.type.name) {
                case 'fairy': return {'--bg-color': '#f483bb'};
                case 'steel': return {'--bg-color': '#b4b4cc'};
                case 'dark': return {'--bg-color': '#5d4038'};
                case 'dragon': return {'--bg-color': '#673ab7'};
                case 'ghost': return {'--bg-color': '#7555a6'};
                case 'rock': return {'--bg-color': '#bda537'};
                case 'bug': return {'--bg-color': '#98b92e'};
                case 'psychic': return {'--bg-color': '#ec407a'};
                case 'flying': return {'--bg-color': '#9e87e1'};
                case 'ground': return {'--bg-color': '#dfb352'};
                case 'poison': return {'--bg-color': '#aa47bc'};
                case 'fighting': return {'--bg-color': '#d32f2e'};
                case 'ice': return {'--bg-color': '#80deea'};
                case 'grass': return {'--bg-color': '#4cb050'};
                case 'electric': return {'--bg-color': '#fecd07'};
                case 'water': return {'--bg-color': '#2097f5'};
                case 'fire': return {'--bg-color': '#e86513'};
                case 'normal': return {'--bg-color': '#bfb97f'};
            }
        }
    }
}
</script>

<style scoped>
    label{
        background-color: var(--bg-color);
        border-radius: 14px;
        padding: 2px 6px 4px 6px;
        margin: 2px;
        color: white;
    }
</style>