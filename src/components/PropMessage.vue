<template>
    <div>
        {{ msg }}
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';

    @Component({})

    export default class PropComponent extends Vue {
        @Prop() private msg!: string;
    }
</script>

<style>

</style>
