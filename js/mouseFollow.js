const pointer = document.querySelector("#follow")
const nav = document.querySelector("nav")
const footer = document.querySelector("footer")
const skills = document.querySelector("#skills")
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

    pointer.animate([
        {left: `${pointer.xPosition}px`, top: `${pointer.yPosition}px`},
        {left: `${xPosition}px`, top: `${yPosition}px`}
    ], {duration: 500, iterations: 1, fill: "forwards"})
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
skills.addEventListener("mouseenter", ()=> {
    pointer.style.display = "block"
    pointer.classList.add("glow")
})
skills.addEventListener("mouseleave", ()=> {
    pointer.style.display = "None"
    pointer.classList.remove("glow")
})