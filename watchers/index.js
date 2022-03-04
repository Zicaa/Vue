const app = Vue.createApp({
    data() {
        return {
            leNombre : 0,
            leMoins:4,
            myString:""
        };
    },
    watch: {
        leNombre(value){
            if(value==7){
                this.leNombre =99;
            }
        },
        leMoins(value){
            if(value==0){
                this.myString="GAME OVER, PLAY AGAIN";
            } else {
                this.myString = "Shout again";
            }
        }
    }  
});

app.mount('#monApp');

