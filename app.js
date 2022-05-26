const stuff = document.querySelector('.stuff')
const input = document.querySelector('#ch')
const board = document.querySelector('.board')
const count = stuff.getElementsByTagName('div').length

input.addEventListener('input', numbers)
let stars = ''
function numbers(e) {
  stars = ''
  let num = e.target.value
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if ((i + j) % 2 == 0) {
        stars += '<div class="blank"></div>'
      } else {
        stars += '<div class="full"></div>'
      }
    }
  }
  console.log(stars)
  board.innerHTML = `${stars}`
  board.style.maxWidth = `${num * 12}px`
  return stars
}
