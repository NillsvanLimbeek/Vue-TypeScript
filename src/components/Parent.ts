import { Vue, Component } from 'vue-property-decorator';

export default class Parent extends Vue {
    // data
    private parentMessage: string = 'Im your father...';

    // methods
    private parentMethod() {
        console.log('Hello! Im the parent!');
    }
}
