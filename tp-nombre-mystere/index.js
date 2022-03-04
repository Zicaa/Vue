
Vue.createApp({
    data() {
        return {
            leNombre: 0,
            mysteryNumber : Math.round(Math.random() * 10)
        };
    },

   methods: {
       //augmenter de 5 ou de 1
        augmenter(num){
            this.leNombre += num;
        },
   },

   computed: {
       // fonction qui détecte le nombre
       indice(){
        if(this.leNombre==this.mysteryNumber){
            return "Bravo";
        }if(this.leNombre<this.mysteryNumber){
            return "Essaie encore!";
        }if (this.leNombre>this.mysteryNumber){
            return "Tu as dépassé le nombre mystère";
        }
    },
   },

    watch: {
        //création de la fonction qui va surveiller et afficher le nombre mystère
        leNombre(num){
            setTimeout(()=>{
                this.leNombre=0;
            },5000);
        },
    } 
}).mount('#monApp')