let myMaskTemplate = `
<div>
    <div>{{ todo.text }}</div>
    <slot></slot>
</div>
`;
Vue.component('my-mask', {
    template: myMaskTemplate,
    props: {
        todo: [String]
    },
    data() {

    },
    mounted() {
        this.$emit('emit')
    }
});