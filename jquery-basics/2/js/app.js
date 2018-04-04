const spoiler = $('.spoiler')
  , $button = $('<button>Reveal Spoiler</button>')
$('.spoiler span').hide()
spoiler
.on( 'click'
   , 'button'
   , function buttonClick(event) {
     console.log(event)
     $(this)
     .hide()
     $(event.delegateTarget)
     .find('span')
     .show()
   })
.append($button)
