<template>
    <div>
        <p>Data propery: {{ message }}</p>
        <p>Computed property: {{ longMessage }}</p>
        <p>Method: <button @click="logMessage">Click Me!</button></p>

        <hr>

        <input type="text" v-model="textInput">
        <p>V-model: {{ textInput }}</p>
        <p>Watcher: {{ helperText }}</p>

        <hr>

        <p>Parent propery: {{ parentMessage }}</p>
        <p>Parent method: <button @click="parentMethod">Click Me!</button></p>

        <hr>

        <PropMessage :msg="'Hello Prop!'"/>

        <hr>

        <InjectMessage />

        <hr>

        <EmitMessage />
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Watch, Provide, Emit } from 'vue-property-decorator';

    import Parent from './Parent';

    import PropMessage from './PropMessage.vue';
    import InjectMessage from './InjectMessage.vue';
    import EmitMessage from './EmitMessage.vue';

    // components
    @Component({
        components: {
            PropMessage,
            InjectMessage,
            EmitMessage,
        },
    })

    export default class Hello extends Parent  {
        // data
        private message: string = 'Hello World!';
        private textInput: string = '';
        private helperText: string = 'Smaller then 5...';

        // inject
        @Provide('msg') private msg = 'Im provided...';

        // methods
        private logMessage() {
            console.log('Im clicked!');
        }

        private childEmit() {
            console.log('Emitted!');
        }

        // computed
        get longMessage() {
            return `${this.message}, Im computed!`;
        }

        // watchers
        @Watch('textInput')
        private reverseString(newVal: string, oldVal: string) {
            console.log(newVal.split('').reverse().join(''), oldVal);

            if (this.textInput.length > 5) {
                this.helperText = 'Larger then 5...';
            } else {
                this.helperText = 'Smaller then 5...';
            }
        }

        // hooks
        private created() {
            console.log('Im created!');
        }
}
</script>

<style>

</style>
