function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
 
  return document.getElementById('nested').querySelector('.target')
}

function deepestChild() {
  const start = document.getElementById('grand-node').querySelectorAll('div')
  
  let current = start
  let next = []
 
  while (current) {
    if (current.innerHTML === "boo!") {
      return current
    }
  }
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
 
    current = next.shift()
  }
 }
 return null
}
    
  }
  
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n
   }
}

