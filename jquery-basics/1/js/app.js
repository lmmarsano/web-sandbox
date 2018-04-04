'use strict'
$(document)
.ready(() => {
  const preview = { title: $('#blogTitlePreview')
                  , content: $('#blogContentPreview')
                  }
    , input = { title: $('#blogTitleInput')
              , content: $('#blogContentInput')
              }
    , flashMessage = $('#flashMessage')
  flashMessage.hide()
  $('#previewButton')
  .click(() => {
    preview
    .title
    .text(input.title.val())
    preview
    .content
    .text(input.content.val())
    flashMessage
    .slideDown(1000)
    .delay(3000)
    .slideUp()
  })
})