let data = []
let loaded = false

window.onload = () => {
document.getElementById("number").focus()
}

fetch("shades.json?v=" + Date.now())
.then(r => r.json())
.then(d => {
    data = d
    loaded = true
    document.getElementById("exactResult").innerHTML = "Ready"
})

document.getElementById("number")
.addEventListener("input", searchShade)
document.getElementById("type")
.addEventListener("change", () => {

document.getElementById("number").value = ""

searchShade()
})

document.getElementById("number")
.addEventListener("keydown", function(e){
    
    if(e.key === "Enter"){
    
        searchShade()
        
        this.blur()   // closes keyboard on mobile
    
    }

})


function searchShade(){

    let type = document.getElementById("type").value
    let input = document.getElementById("number").value.trim()

    let exactBox = document.getElementById("exactResult")
    let table = document.getElementById("similarTable")

    table.innerHTML = ""

    if(!loaded){
        exactBox.innerHTML = "Loading data..."
        return
    }

    if(!input){
        exactBox.innerHTML = "-"
    return
    }

    let exact = null
    let results = []

    for(let s of data){

        if(type === "jayam"){

            if(s.jayam && s.jayam.startsWith(input)){
                results.push(s)
            }

            if(s.jayam === input){
                exact = s
            }

        }

        if(type === "precot"){

            if(s.precot && s.precot.toLowerCase().startsWith(input.toLowerCase())){
                results.push(s)
            }

            if(s.precot && s.precot.toLowerCase() === input.toLowerCase()){
                exact = s
            }

        }

    }

    if(exact){

        exactBox.innerHTML =
        `Precot : ${exact.precot ?? "-"} <br>
        Jayam : ${exact.jayam ?? "-"}`

    }

    else{
        exactBox.innerHTML = "No exact match"
    }

    results.slice(0,8).forEach(r=>{

        let row = document.createElement("tr")

        row.onclick = () => {

        document.getElementById("number").value = r[type]

        searchShade()

        document.getElementById("exactResult")
        .scrollIntoView({behavior:"smooth"})

        }

        if(exact && r.jayam === exact.jayam){
            row.classList.add("highlight")
        }

        row.innerHTML =
        `
        <td>${r.precot ?? "-"}</td>
        <td>${r.jayam ?? "-"}</td>
        `

        table.appendChild(row)

    })

}

if ("serviceWorker" in navigator) {

    navigator.serviceWorker
    .register("service-worker.js")
    .then(() => console.log("Service Worker Registered"))


}
