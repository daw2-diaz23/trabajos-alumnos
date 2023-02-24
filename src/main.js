import './scss/styles.scss'

import { home } from "./vistas/home";
import {header} from "./componentes/header"
import {footer} from "./componentes/footer"

document.querySelector('main').innerHTML= home.template
document.querySelector('header').innerHTML= header.template
document.querySelector('footer').innerHTML= footer.template