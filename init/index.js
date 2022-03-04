//Création d'une instance Vue c'est notre application
Vue.createApp({
    //Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //Toutes les data seront contenues dans this
    data() {
        return {
            unLivre: 'Les mémoires de Steven Seagal',
            unTableau: ['du texte', 99],
            unNombre: 116854161,
            unObjet: {
                name : 'cool',
                tel : 0102030405
            },
        };
    },
    // Dans cet Object methods, on va écrire nos fonctions
    methods: {
        ajouterLivre() {
            this.livre.push(this.valeurDeInput);
            this.valeurDeInput = '';
        },
    },
// L'application est montée sur la balise HTML qui possède l'id app
}).mount('#bookListApp');






