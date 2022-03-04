Vue.createApp({
  data(){
      return{
          listFilm : [],
          myFilm : '',
      }
  },
  methods : {
      addFilm(){
          this.listFilm.push(this.myFilm);
      },

      supprimerFilm(unIndex){
          this.listFilm.splice(unIndex, 1);
      },
  },
}).mount('#app');
