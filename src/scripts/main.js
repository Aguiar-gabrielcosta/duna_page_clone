import dragableCarousel from "./modules/dragCarousel.js"
import navbarController from "./modules/navbar.js"
import tabController from "./modules/tabs.js"

document.addEventListener('DOMContentLoaded', () => {
    tabController()
    navbarController()
    dragableCarousel()
})