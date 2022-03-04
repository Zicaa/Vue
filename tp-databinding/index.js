//Création d'une instance Vue 
Vue.createApp({
    data(){
        return {
            nom : 'Le Joker',
            img : "https://i.pinimg.com/originals/68/a5/2f/68a52fb0adb55ae2dffae61a5a817d18.jpg",
            age : 45,
        };
    },

    // je créé mes fonctions avec méthods : nombre fétiche aléatoire et âge + 10 ans
    methods: {
        functionRandum() {
            return Math.random();
        },
        functionAge(){
            return this.age + 10;
        }
    },

// L'application est montée sur la balise HTML qui possède l'id app
}).mount('#app');