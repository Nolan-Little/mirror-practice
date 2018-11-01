const body = document.querySelector("body")
const div = document.createElement("div")
const label = document.createElement("label")
const input = document.createElement("input")
const article1 = document.createElement("article")
const article2 = document.createElement("article")
const flexContainer = document.createElement("div")
const fragment = document.createElement("fragment")

label.textContent = "Type here to see magic"
label.attributes.for = "typer"
input.attributes.name = "typer"
flexContainer.classList.add("container")

flexContainer.appendChild(article1)
flexContainer.appendChild(article2)
div.appendChild(label)
div.appendChild(input)
div.appendChild(flexContainer)
fragment.appendChild(div)
body.appendChild(fragment)

input.addEventListener("keyup", (event) => {
  article1.textContent = event.target.value
  article2.textContent = event.target.value
})

