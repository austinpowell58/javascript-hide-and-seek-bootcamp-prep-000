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
    // if `current` satisfies the `criteriaFn`, then
    // return it — recall that `return` will exit the
    // entire function!
    if (current.inn {
      return current
    }
  }
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
 
    // after pushing any children (if there
    // are any) of `current` onto `next`, we want to take
    // the first element of `next` and make it the
    // new `current` for the next pass of the `while`
    // loop
    current = next.shift()
  }
 
  // if we haven't
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

