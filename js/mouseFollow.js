const pointer = document.querySelector("#follow")

window.addEventListener("mousemove", (e)=>{
    changePosition(e)
})
window.addEventListener("mousedown", (e)=>{
    
    pointer.classList.add("animate")
    console.log("started")
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
    pointer.style.display = "block"
}