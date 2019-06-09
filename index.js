// add solution here

let musicians = ['John Lennon', 'Paul McCartney']
let instruments = ['Guitar', 'Piano']
let empty = []

function theBeatlesPlay(musicians, instruments){
	for(let a = 0; a < musicians.length; a++){
    empty.push(`${musicians[a]} plays ${instruments[a]}`)
  }
}

