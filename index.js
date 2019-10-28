document.querySelector("main").remove()
const newHeader = document.createElement("h1")
newHeader.setAttribute("id", "victory")
newHeader.innerHTML = "David is the champion"
document.body.appendChild(newHeader)
