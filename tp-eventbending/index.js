//Création d'une instance Vue 
Vue.createApp({
    data(){
        return {
            uneString : "",
            uneStringEsc : "",
        };
    },

// je créé ma fonction avec méthods : création des paragraphes à l'event keyup
// si on presse la touche escape : on utilise la variable uneStringEsc
// sinon on utilise la variable uneString
    methods: {
        creerPara(event){
            if (event.key="Escape"){
                this.uneStringEsc=event.target.value;
            } else {
                this.uneString=event.target.value;
            }
        },

// je créé le bouton d'alerte
        alert(){
            alert("Alerte générale");
        }
    },
    
}).mount('#monApp');
