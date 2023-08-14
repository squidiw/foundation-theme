/**
 * imports
 */
//AlpineJS Imports
import Alpine from 'alpinejs'
import AlpineGlobals from './alpine/index.js'

//Liquid-ajax-cart(https://liquid-ajax-cart.js.org/guide/)
import 'liquid-ajax-cart';

import './css/main.css'
import './components/cart'
import formatMoney from './components/formatMoney'

window._formatMoney = formatMoney

// Register and initialize AlpineJS
window.Alpine = Alpine
AlpineGlobals.register(Alpine)
Alpine.start()