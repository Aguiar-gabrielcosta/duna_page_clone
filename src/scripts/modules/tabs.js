export default function tabController() {
    const buttons = document.querySelectorAll('.more__buttons__button')
    const tabs = document.querySelectorAll('.more__sections')

    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const target = event.target.dataset.tabTarget

            closeAllTabs(buttons, tabs)
            toggleTab(target)
        })
    })
}

function toggleTab(target) {
    document.querySelector(`[data-tab-target=${target}]`).classList.add('more__buttons__button--is-active')
    document.querySelector(`[data-tab-name=${target}]`).classList.add('more__sections--show')
}

function closeAllTabs(buttons, tabs) {
    buttons.forEach((btn) => {
        btn.classList.remove('more__buttons__button--is-active')
    })

    tabs.forEach((tab) => {
        tab.classList.remove('more__sections--show')
    })
}