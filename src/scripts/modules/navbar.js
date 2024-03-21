export default function navbarController() {
    const linkItems = document.querySelectorAll('[data-nav-target="submenu"]')
    const main = document.querySelector('main')
    const footer = document.querySelector('footer')

    linkItems.forEach((item) => {
        item.addEventListener('mouseenter', (event) => {
            const targetItem = event.target

            clearSubmenus(linkItems)
            openSubmenu(targetItem)
        })
    })

    main.addEventListener('mouseenter', () => {
        clearSubmenus(linkItems)
    })

    footer.addEventListener('mouseenter', () => {
        clearSubmenus(linkItems)
    })   
}

function clearSubmenus(items) {
    items.forEach((item) => {
        item.classList.remove('header__nav__links__link__item--is-active')
        item.nextElementSibling.classList.remove('header__nav__links__link__submenu--is-active')
    })
}

function openSubmenu(target) {
    
    while (target.tagName !== 'A') {
        target = target.parentNode
    }

    target.classList.add('header__nav__links__link__item--is-active')
    target.nextElementSibling.classList.add('header__nav__links__link__submenu--is-active')
}