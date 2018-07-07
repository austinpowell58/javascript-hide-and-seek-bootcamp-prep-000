function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
 
  return document.getElementById('nested').querySelector('.target')
}

function deepestChild() {
  const start = document.getElementById('grand-node')
  
  const desc = start.querySelectorAll('*')
  for (let i = 0; i < desc.length; i++) 
  if (desc[i].childElementCount === 0) {
    return desc[i]
  }
 

    
  

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n
   }
}

