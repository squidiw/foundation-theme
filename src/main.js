/**
 * imports
 */
import Alpine from 'alpinejs'
import AlpineGlobals from './alpine/index.js'

import './css/main.css'
import './components/cart'



// Register and initialize AlpineJS
window.Alpine = Alpine
AlpineGlobals.register(Alpine)
Alpine.start()