const $odd = $('a:odd')
  , $secureLinks = $('a[href^=\'https:\']')
  , $pdfs = $('a[href$=\'.pdf\']')
$('#links').append('<label><input type=\'checkbox\'> Allow PDF downloads</label>')
$pdfs.attr('download', 'download').addClass('pdf')
.on( 'click'
   , function onClick(event) {
if (!$(':checked').length) {
  event.preventDefault()
  alert('Please check the box to allow PDF downloads.')
}
}
   )
$secureLinks.addClass('secure')
