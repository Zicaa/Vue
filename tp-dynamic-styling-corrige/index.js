const app = Vue.createApp({
    data() {
        return {
            className:"",
            visible: true,
            colorName:""
        };
    },
    computed: {
        classDyn(){
            if(this.className === "hello"){
                return "maClasseHello";
            }if(this.className === "world"){
                return "maClasseWorld";
            }if(this.visible){
                return "maClasseVisible";
            }if(!this.visible){
                return "maClasseHidden";
            }
        },

        colorBack(){
            if(this.colorName === "red"){
                return "maClasseRedBack";
            }if(this.colorName === "green"){
                return "maClasseGreenBack";
            }if(this.colorName === "yellow"){
                return "maClasseYellowBack";
            }if(this.colorName === "black"){
                return "maClasseBlackBack";
            }
        },

        paraHidden(){
            if(this.visible){
                return "maClasseVisible";
            }if(!this.visible){
                return "maClasseHidden";
            }
        },
    },
});
app.mount('#monApp')