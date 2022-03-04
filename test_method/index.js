//Création d'une instance Vue c'est notre application
Vue.createApp({
    //Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //Toutes les data seront contenues dans this
    data() {
        return{
            uneInjectionBaliseHtml: '<h2>Ceci est un H2</h2>',
            unLien: 'https://blockly.games/'
        };
    },

    // Dans cet Object methods, on va écrire nos fonctions
    methods: {
        affichageRandomDuLivre() {
            const nombreRandom = Math.random();
            if (nombreRandom > 0.5){
                return 'Le livre 1';
            }else{
                return 'Le livre 2';
            }
        }
    },
// L'application est montée sur la balise HTML qui possède l'id app
}).mount('#monApp');