let arr= []
function getData() {

  fetch('http://localhost:3000/data')
  .then(res=> res.json())
  .then(data=>{
    arr=data
  })
  .catch(e => {
    console.log(e);
    res.status(404).json({msg:'not found'})
  })

}

function filterData() {
  const namekey3 = document.getElementById('namekey3').value
  fetch(`http://localhost:3000/data/${namekey3}`)
  .then(res=> res.json())
  .then(data=>{
    console.log(data)
    posterData(data)
  })
  .catch(e => {
    console.log(e);
    res.status(404).json({msg:'not found'})
  })
}
let body =document.getElementById('root')

function posterData(array) {
  body.innerHTML = ""
  let mapArr = array.map(item =>{
    let div = document.createElement('div')
    body.appendChild(div)
    let h6 = document.createElement('h1')
    div.appendChild(h6)
    let title1 = document.createTextNode(item['title'])
    h6.appendChild(title1)
    let poster = document.createElement("IMG");
    poster.setAttribute("src", item['poster_path'])
    div.appendChild(poster)
    let b = document.createElement('b')
    div.appendChild(b)
    let vote = document.createTextNode(`Vote average: ${item['vote_average']}`)
    b.appendChild(vote)
    let discription = document.createElement('p')
    div.appendChild(discription)
    let textDisc = document.createTextNode(item['overview'])
    discription.appendChild(textDisc)
    let button = document.createElement('button')
    div.appendChild(button)
    let textButton = document.createTextNode('Add this film!')
    button.appendChild(textButton)
  } )
}
