<template>
    <div>
        <button @click="childEmit()">Emit!</button>
        <button @click="childEmitMessage(object)">Emit Message!</button>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Emit } from 'vue-property-decorator';

    export default class EmitMessage extends Vue {
        private object = {
            name: 'Nills',
            age: 31,
        };

        @Emit('child-emit')
        private childEmit() {
            // placeholder
        }

        @Emit('child-emit-message')
        private childEmitMessage(obj: object) {
            // placeholder
        }
    }
</script>

<style>

</style>
