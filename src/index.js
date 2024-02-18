import generateJoke from './generate.joke.js'
import laughing from './assets/laughing.svg'
import './styles/main.scss'

const laughImg = document.getElementById('svgLaugh')
const jokeBtn = document.getElementById('jokeBtn')

laughImg.src = laughing

jokeBtn.addEventListener('click', generateJoke)

// console.log(generateJoke(), 'efefefef') 