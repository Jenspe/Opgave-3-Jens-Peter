Vue.createApp({

    data() {

        return {
            words: null,
            result: null, 
            result2: null,
            result3: null,
            result4: null,
            result5: null,
            result6: null,
        }
    },

    methods: {
        showWords()
        {                
                let text = this.words;
                let length = text.length;

                this.result = this.words;
                this.result2 = this.words.toLowerCase();
                this.result3 = this.words.toUpperCase();
                this.result4 = this.words.charAt(0).toUpperCase() + this.words.slice(1);
                this.result5 = this.words.slice(0,-1) + this.words.charAt(this.words.length-1).toUpperCase();
                this.result6 = this.words.split("").reverse().join("");                

        },
        
        clearWords(){
            this.result =  null
            this.result2 =  null
            this.result3 =  null
            this.result4 =  null
            this.result5 =  null
            this.result6 =  null
            this.words = []

        }
    }
}).mount("#app")

