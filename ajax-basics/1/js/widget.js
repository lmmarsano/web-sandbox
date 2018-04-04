import $ from 'https://code.jquery.com/jquery-3.3.1.min.js'
$(document).ready
(() => {
	$.getJSON
	( 'data/employees.json'
	, function onRSC(response) {
		const ul = document.createElement('ul')
		for (let employee of response) {
			let li = document.createElement('li')
			li.textContent = employee.name
			li.className = employee.inoffice
			             ? 'in'
			             : 'out'
			ul.appendChild(li)
		}
		ul.className = 'bulleted'
		$('#employeeList')[0].appendChild(ul)
	})

	$.getJSON
	( 'data/rooms.json'
	, function onRSC(response) {
		const ul = document.createElement('ul')
		ul.className = 'rooms'
		for (let room of response) {
			let li = document.createElement('li')
			li.textContent = room.room
			li.className = room.available
					                       ? 'empty'
				            : 'full'
			ul.appendChild(li)
		}
		$('#roomList')[0].appendChild(ul)
	})
})
