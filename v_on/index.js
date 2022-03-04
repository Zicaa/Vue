Vue.createApp({
    data() {
        return {
            leNombre : 0,
            uneString : "Coucou"
        };
    },
    methods: {
        augmenter(num){
            this.leNombre += num;
        },

        reduire(num){
            this.leNombre -=num;
        },
        capterEventClick(event){
            console.log(event);
        },
        capterEventInput(event){
            console.log(event);
            this.uneString = event.target.value;
        }
    }  
}).mount('#monApp')

