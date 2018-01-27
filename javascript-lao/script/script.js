'use strict'
var students = []
  , qHash = {}
  , message = ''
  , query
  , answer
for (let i = 0; i < 5; i++) {
  students.push({ name: 'Name ' + i
                , track: 'Track ' + i
                , achievements: ['Achievement 0', 'Achievement 1']
                , points: i
                })
}
students.push(students[0])
function print(message) {
  document.getElementById('output').innerHTML = message
}
function stringEl(tagName, content) {
  return '<' + tagName + '>' + content + '</' + tagName + '>'
}
function stringEntry(entry) {
  let {name, track, achievements, points} = entry
  return [ stringEl('h2', name)
         , stringEl( 'dl'
                   , [ stringEl('dt', 'Track')
                     , stringEl('dd', track)
                     , stringEl('dt', 'Achievements')
                     , stringEl( 'dd'
                               , stringEl( 'ul'
                                         , achievements.map(stringEl.bind(undefined, 'li')).join('')
                                         )
                               )
                     , stringEl('dt', 'Points')
                     , stringEl('dd', points)
                     ].join('')
                   )
         ].join('')
}
for (let obj of students) {
  let key = obj.name.trim().toLowerCase()
  if (qHash[key]) {
    qHash[key].push(obj)
  } else {
    qHash[key] = [obj]
  }
}
loop:
for (;;) {
  switch (query = prompt('Enter name to lookup. Cancel to quit.')) {
    case null:
    break loop
    default:
    if (answer = qHash[query.trim().toLowerCase()]) {
      for (let entry of answer) {
        message += stringEntry(entry)
      }
    } else {
      message += stringEl('h2', query + ' not found')
    }
  }
}
print(message)