Vue.createApp({
    data() {
        return {
            leNombre : 0,
            nameUser : ""
        };
    },
    methods: {
        afficherNameUser(){
            console.log("je suis bien exécutée");
            if (this.nameUser === ""){
                return "test";
            } else {
                return "play again";
            }
        },
        //augmenter
        augmenter(num){
            this.leNombre += num;
        },
        //réduire
        reduire(num){
            this.leNombre -=num;
        },
        changeName(){
            this.nameUser = "toto";
        }
    }  
}).mount('#monApp')

