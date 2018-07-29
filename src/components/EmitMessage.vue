<template>
    <button @click="logChildMessage">Emit!</button>
</template>

<script lang="ts">
    import { Vue, Component, Emit } from 'vue-property-decorator';

    export default class EmitMessage extends Vue {
        @Emit('child-emit')
        private logChildMessage() {
            console.log('Emit...');
        }
    }
</script>

<style>

</style>
