<template>
    <div>
        <h1>Routing</h1>

        <router-link to="/route-one">Route #1</router-link>

        <router-view />
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component({})

    export default class Main extends Vue {

    }
</script>

<style>

</style>
