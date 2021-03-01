let counter = 1


function addListItem() {
  let item = document.querySelector("input").value
  console.log(item)
  let red = Math.floor(Math.random() * 256) + 60
  if (red > 255) {
    red = 255
  }
  let green = Math.floor(Math.random() * 256) + 60
  if (green > 255) {
    green = 255
  }
  let blue = Math.floor(Math.random() * 256) + 60
  if (blue > 255) {
    blue = 255
  }
  let color = `rgb(${red}, ${green}, ${blue})`
  let ol = document.querySelector("ol")
  let li = document.createElement("li")
  let br = document.createElement("br")
  li.appendChild(document.createTextNode(item))
  li.style.backgroundColor=color
  // li.style.display="table"
  li.style.paddingLeft="5px"
  li.style.paddingRight="5px"

  ol.appendChild(li)
  //div.appendChild(br)

  document.querySelector("input").value="item"
}