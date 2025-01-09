const imgs_links = ["https://www.centerpartiet.se/images/200.1c8a0b9018e3adc73c8144b/1712159030169/Gruppbild%20ep%20valet%20Centerpartiet.jpeg", "https://media.istockphoto.com/id/1490642745/sv/foto/pride-day.jpg?s=612x612&w=0&k=20&c=p6Md50NhbyifOAYMUi8l8xRHitgGh-1C11e6-9p3nV0=", "https://www.oxfordlearning.com/wp-content/uploads/2018/09/how-to-help-your-child-focus-in-school.jpeg"]

let counter = 0
const take_bilder_annosn = document.getElementById("bilder_annosn");
let take_right = document.getElementById("right")
let take_left = document.getElementById("left")

let take_scroll_to_nera_dig = 1170
   
function bli_medlem() {

    window.scrollTo(0, take_scroll_to_nera_dig)

}

let get_kallor_btn = document.getElementById("kallorr")
let turnss = 0
let neznam_id = document.getElementById("neznam")
function dropDown_kallor() {



    if (turnss === 0) {

       let create_link = document.createElement("a")
       create_link.setAttribute("id", "get_hidden")
       create_link.setAttribute("href", "https//:Centerpartiet.se")
       create_link.innerText = "Centerpartiet.se"
       get_kallor_btn.style.zIndex = "100000"
       get_kallor_btn.style.paddingBottom = "20%"

       neznam_id.appendChild(create_link)
       turnss = 1



    } else {

        let removee = document.getElementById("get_hidden")
        removee.remove()
        get_kallor_btn.style.paddingBottom = "0%"
        turnss = 0

    }
    


}

take_bilder_annosn.setAttribute("style", `background-image: url(${imgs_links[counter]})`)

let take_h1_bilder = document.querySelector("#bilder_annosn h1")
let take_p_bilder = document.querySelector("#bilder_annosn p")
take_right.addEventListener("click", function() {

    if (counter < 2) {

        counter++
        console.log(imgs_links[counter])
        if (counter === 0) {

            take_h1_bilder.innerHTML = "ANGIVERILAGEN STOPPADES"
            take_p_bilder.innerHTML = "Tillsammans har vi visat att det går att trycka tillbaka politik som skadar och slår splittring i Sverige. Angiverilagen var ett steg på vägen, men vårt arbete fortsätter."

        } else if (counter === 1) {

            take_h1_bilder.innerHTML = "vill du vara med och påverka? <br> BLI MEDLEM"
            take_p_bilder.innerHTML = "Runtom i hela landet samlas engagerade medlemmar för att bygga ett friare, grönare och starkare samhälle. Var med på resan mot ett bättre Sverige, du också! "

        } else {

            take_h1_bilder.innerHTML = "GE Varje unge chansen att lyckas i skolan"
            take_p_bilder.innerHTML = "Vilket betyg ger vi det systemet? "

        }


    } else {

        counter = 0
        take_h1_bilder.innerHTML = "ANGIVERILAGEN STOPPADE"
        take_p_bilder.innerHTML = "Tillsammans har vi visat att det går att trycka tillbaka politik som skadar och slår splittring i Sverige. Angiverilagen var ett steg på vägen, men vårt arbete fortsätter."


    }
    take_bilder_annosn.setAttribute("style", `background-image: url(${imgs_links[counter]})`)
    console.log(counter)


})

take_left.addEventListener("click", function() {
    console.log(this)

    if (counter > 0) {

        counter--

        if (counter === 0) {

            take_h1_bilder.innerHTML = "ANGIVERILAGEN STOPPADES"
            take_p_bilder.innerHTML = "Tillsammans har vi visat att det går att trycka tillbaka politik som skadar och slår splittring i Sverige. Angiverilagen var ett steg på vägen, men vårt arbete fortsätter."

        } else if (counter === 1) {

            take_h1_bilder.innerHTML = "vill du vara med och påverka? <br> BLI MEDLEM"
            take_p_bilder.innerHTML = "Runtom i hela landet samlas engagerade medlemmar för att bygga ett friare, grönare och starkare samhälle. Var med på resan mot ett bättre Sverige, du också! "

        } else {

            take_h1_bilder.innerHTML = "GE Varje unge chansen att lyckas i skolan"
            take_p_bilder.innerHTML = "Vilket betyg ger vi det systemet? "

        }


    } else if (counter === 0) {

        counter = 2
        take_h1_bilder.innerHTML = "GE Varje unge chansen att lyckas i skolan"
        take_p_bilder.innerHTML = "Vilket betyg ger vi det systemet? "  

    }
    console.log(counter)
    take_bilder_annosn.setAttribute("style", `background-image: url(${imgs_links[counter]})`)

    
    })
    
let counterr = 0
setInterval(function() {


    if (counterr === 0) {

        take_h1_bilder.innerHTML = "ANGIVERILAGEN STOPPADES"
        take_p_bilder.innerHTML = "Tillsammans har vi visat att det går att trycka tillbaka politik som skadar och slår splittring i Sverige. Angiverilagen var ett steg på vägen, men vårt arbete fortsätter."

    } else if (counterr === 1) {


        take_h1_bilder.innerHTML = "vill du vara med och påverka? <br> BLI MEDLEM"
        take_p_bilder.innerHTML = "Runtom i hela landet samlas engagerade medlemmar för att bygga ett friare, grönare och starkare samhälle. Var med på resan mot ett bättre Sverige, du också! "

    } else if(counterr === 2){

        take_h1_bilder.innerHTML = "GE Varje unge chansen att lyckas i skolan"
        take_p_bilder.innerHTML = "Vilket betyg ger vi det systemet? "

    } else {

        counterr = 0
        take_h1_bilder.innerHTML = "ANGIVERILAGEN STOPPADES"
        take_p_bilder.innerHTML = "Tillsammans har vi visat att det går att trycka tillbaka politik som skadar och slår splittring i Sverige. Angiverilagen var ett steg på vägen, men vårt arbete fortsätter."

    }
    take_bilder_annosn.setAttribute("style", `background-image: url(${imgs_links[counterr]})`)
    counterr++
    console.log(counterr)
    counter = counterr-1     

}, 8000)


