const toggleList = document.getElementById('toggleList')
    , listDiv = document.querySelector('.list')
    , descriptionInput = document.querySelector('input.description')
    , descriptionP = document.querySelector('p.description')
    , descriptionButton = document.getElementById('myButton')
    , addItemInput = document.querySelector('input.addItemInput')
    , addItemButton = document.querySelector('button.addItemButton')
    , unorderedList = document.querySelector('ul')
    , removeItemButton = document.querySelector('button.removeItemButton')

function attachListItemButtons(li) {
	let buttons = document.createDocumentFragment()
	for (let name of ['up', 'down', 'remove']) {
		let button = document.createElement('button')
		button.className = name
		button.textContent = name[0].toUpperCase() + name.substring(1)
		buttons.appendChild(button)
	}
	li.appendChild(buttons)
}

function delegateTagHandler(tagName, handler) {
	tagName = tagName.toLowerCase()
	return function tagNameHandler(event) {
		if (event.target.tagName.toLowerCase() === tagName) {
			handler(event.target)
		}
	}
}

for (let child of Array.from(unorderedList.children)) {
	attachListItemButtons(child)
}

unorderedList.addEventListener
( 'click'
, function onClick(event) {
	let target = event.target
	if (target.tagName === 'BUTTON') {
		let li = target.parentNode
		  , ul = li.parentNode
		switch (target.className) {
			case 'up':
			let prev = li.previousElementSibling
			if (prev) {
				ul.insertBefore(li, prev)
			}
			break
			case 'down':
			let next = li.nextElementSibling
			if (next) {
				ul.insertBefore(next, li)
			}
			break
			case 'remove':
			ul.removeChild(li)
			break
		}
	}
}
)

listDiv.addEventListener
( 'mouseout'
, delegateTagHandler
  ( 'li'
  , function onMouseOut(node) {node.classList.remove('capitalized')}
  )
)

toggleList.addEventListener
( 'click'
, function onClick() {
	if (listDiv.style.display) {
		listDiv.style.display = null
		toggleList.textContent = 'Hide list'
	} else {
		listDiv.style.display = 'none'
		toggleList.textContent = 'Show list'
	}
})
descriptionButton.addEventListener
( 'click'
, function onClick() {
	descriptionP.innerHTML = descriptionInput.value + ':'
	descriptionInput.value = ''
})
descriptionP.title = 'List description'
addItemButton.addEventListener
( 'click'
, function onClick() {
	let li = document.createElement('li')
	li.textContent = addItemInput.value
	attachListItemButtons(li)
	unorderedList.appendChild(li)
	addItemInput.value = ''
})
removeItemButton.addEventListener
( 'click'
, function onClick() {
	unorderedList.lastElementChild.remove()
})
