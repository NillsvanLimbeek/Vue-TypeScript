<template>
    <div>
        {{ msg }}
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Inject } from 'vue-property-decorator';

    @Component({})

    export default class InjectMessage extends Vue {

        @Inject() private msg!: string;
    }
</script>

<style>

</style>
