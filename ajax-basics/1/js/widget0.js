const xhr = new XMLHttpRequest
    , employeeList = document.getElementById('employeeList')
xhr.addEventListener
( 'readystatechange'
, function onRSC() {
  if (this.readyState === this.DONE) {
    const ul = document.createElement('ul')
    for (let employee of this.response) {
      let li = document.createElement('li')
      li.textContent = employee.name
      li.className = employee.inoffice
                   ? 'in'
                   : 'out'
      ul.appendChild(li)
    }
    ul.className = 'bulleted'
    employeeList.appendChild(ul)
  }
})
xhr.overrideMimeType('application/json')
xhr.responseType = 'json'
xhr.open('GET', 'data/employees.json')
xhr.send()

const roomRequest = new XMLHttpRequest
    , roomList = document.getElementById('roomList')
roomRequest.addEventListener
( 'readystatechange'
, function onRSC() {
	if(this.readyState === this.DONE) {
		const ul = document.createElement('ul')
		ul.className = 'rooms'
		for (let room of this.response) {
			let li = document.createElement('li')
			li.textContent = room.room
			li.className = room.available
			             ? 'empty'
			             : 'full'
			ul.appendChild(li)
    }
		roomList.appendChild(ul)
  }
})
roomRequest.responseType = 'json'
roomRequest.open('GET', 'data/rooms.json')
roomRequest.send()

