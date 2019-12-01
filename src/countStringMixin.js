export const countStringMixin = {
    data() {
        return {
            stringTwo: 'Abracadabra',
        }
    },
    computed: {
        countStringComputed() {
            return this.stringTwo + ' (' + this.stringTwo.length + ')';
        }
    }
}