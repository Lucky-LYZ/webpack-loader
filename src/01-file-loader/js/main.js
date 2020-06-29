import createHeading from './heading.js'
import '../css/main.css'
import icon from '../img/icon.png'

const heading = createHeading()

document.body.append(heading)

const img = new Image()
img.src = icon

document.body.append(img)
