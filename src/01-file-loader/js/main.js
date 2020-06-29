import createHeading from './heading.js'
import '../css/main.css'
import icon from '../img/icon.png'

const heading = createHeading()
const img = new Image()
img.src = icon

document.getElementById('app').append(heading)
document.getElementById('app').append(img)
