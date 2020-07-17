var app = new Vue({
    el: "#app",
    data() {
        return {
            visible: false,
        };
    },
    methods: {
        open() {
            this.$alert("这是一段内容", "标题名称", {
                confirmButtonText: "确定",
                callback: (action) => {
                    this.$message({
                        type: "info",
                        message: `action: ${action}`,
                    });
                },
            });
        },
    },
    computed: {},
    watch: {},
    mounted() { },
    beforeDestroy() { },
});
