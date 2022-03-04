Vue.createApp({
  data(){
      return{
          listMusic : [],
          myMusic : '',
          visible: true
      }
  },

  computed: {
      messageButton(){
          return this.visible?'Afficher la liste': 'Masquer la liste';
      },
  },

  methods : {
      addMusic(){
          this.listMusic.push(this.myMusic);
      },

      supprimerMusic(unIndex){
          this.listMusic.splice(unIndex, 1);
      },

      affichage() {
        this.visible=!this.visible
    },
  },
}).mount('#app');
