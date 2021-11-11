// creare un carosello come nella foto e al click dell'utente sulle frecce l'immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiuntoi il titolo e il resto

var carousel = new Vue({
    el: "#app",
    data: {
        activeSlide: 0,
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.'
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
            },
        ]
    },
    methods: {
        nextSlide: function(){
            if(this.activeSlide === this.slides.length -1){
                this.activeSlide = 0;
            } else {
                this.activeSlide ++;
            }
        },
        prevSlide: function(){
            if(this.activeSlide === 0){
                this.activeSlide = this.slides.length -1;
            }else {
                this.activeSlide --;
            }
        }
    }
});






