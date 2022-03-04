const app = Vue.createApp({
    data() {
        return {
            activeColor: "red",
            fontSize : 30,
            selectCard1 : false,
            selectCard2: false
        }
    },
    methods: {
        selectCard(uneCard){
            if(uneCard ==1){
                this.selectCard1 = !this.selectCard1;
            } else if (uneCard == 2){
                this.selectCard2 = !this.selectCard2;
            }
        }
    }
});
app.mount('#monApp')