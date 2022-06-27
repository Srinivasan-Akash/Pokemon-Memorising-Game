const cards = document.querySelectorAll(".card")


var isFlipped = false
var firstCard, secondCard


cards.forEach((card) => {
    card.addEventListener("click", flip)
})


function flip(){
     this.classList.add("card-flip")   
     this.classList.remove("card")  
     if(!isFlipped){
        isFlipped = true
        firstCard = this
     } else {
        secondCard = this;
        console.log(firstCard, secondCard);
        isFlipped = false
        check()
     }

      
}

function check(){
    if(firstCard.dataset.image === secondCard.dataset.image){
        firstCard.removeEventListener("click", flip)
        secondCard.removeEventListener("click", flip)
        reset();
    } else {
        failure()
    }
}


function failure() {
    setTimeout(() => {
        firstCard.classList.remove("card-flip")   
        firstCard.classList.add("card")  
        secondCard.classList.remove("card-flip")   
        secondCard.classList.add("card")  
        reset()
    }, 1000)
}

function reset(){
    isFlipped = false
    firstCard = null
    secondCard = null
}

let shuffle = () => {
     cards.forEach((card)=>{
        var index = Math.floor(Math.random() * 16)
        card.style.order = index
     })
}

(function(){cards.forEach((card)=>{
       var index = Math.floor(Math.random() * 16)
       card.style.order = index
    })
})()

shuffle()

// window.onload("load", shuffle)


