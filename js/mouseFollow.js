const pointer = document.querySelector("#follow")
const nav = document.querySelector("nav")
const footer = document.querySelector("footer")

window.addEventListener("mousemove", (e)=>{
    changePosition(e)
})
window.addEventListener("mousedown", (e)=>{
    
    pointer.classList.add("animate")
    setTimeout(remove, 301)

})
function remove(){
    pointer.classList.remove("animate")
}
function changePosition(e){
    const xPosition = e.clientX 
    const yPosition = e.clientY

    pointer.style.left = `${xPosition}px`
    pointer.style.top = `${yPosition}px`
}
nav.addEventListener("mouseenter", ()=> {
    pointer.style.display = "block"
})
nav.addEventListener("mouseleave", ()=> {
    pointer.style.display = "None"
})
footer.addEventListener("mouseenter", ()=> {
    pointer.style.display = "block"
})
footer.addEventListener("mouseleave", ()=> {
    pointer.style.display = "None"
})