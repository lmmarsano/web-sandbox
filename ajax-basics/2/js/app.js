$(document).ready
(function onReady() {
	const $search = $('#search')
	    , photos = $('#photos')[0]
	function newLi(template, link, thumbnail) {
		template.href.value = link
		template.src.value = thumbnail
		return template.li.cloneNode(true)
	}
	function displayPhotos(query) {
		return function callBack(data) {
			const ul = document.createDocumentFragment()
			let template
			{
				let li = document.createElement('li')
				, a = document.createElement('a')
				 , img = document.createElement('img')
				 , href = document.createAttribute('href')
				 , src = document.createAttribute('src')
				li.className = 'grid-25 tablet-grid-50'
				a.setAttributeNode(href)
				a.className = 'image'
				img.setAttributeNode(src)
				a.appendChild(img)
				li.appendChild(a)
				template = { li
				           , href
				           , src
				           }
			}
			for (let item of data.items) {
				ul.appendChild( newLi( template
				     , item.link
				     , item.media.m
				                     )
				              )
			}
			if (!data.items.length) {
				let li = document.createElement('li')
				li.textContent = `Query ${query} yielded no results`
				ul.appendChild(li)
			}
			for (let child of Array.from(photos.childNodes)) {
				if (child.nodeType === child.ELEMENT_NODE) {
					photos.removeChild(child)
				}
			}
			photos.appendChild(ul)
		}
	}
	$('form').on
	( 'submit'
	, function onClick(event) {
		const query = $search.val()
		// the AJAX part
		$.getJSON
		( 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?'
		, { tags: query
		  , format: 'json'
		  }
		, displayPhotos(query)
		)
		event.preventDefault()
	}) // end click
}) // end ready
