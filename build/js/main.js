const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileNavMenu = document.getElementById('mobile-nav-menu')
    const year = document.getElementById('year')

    date = new Date();

    year.innerText = date.getFullYear();

    const toggleMobileNavMenu = () => {
        console.log('toggled Nav bar')
        mobileNavMenu.classList.toggle('hidden')
        mobileNavMenu.classList.toggle('flex')
    }

    hamburgerBtn.addEventListener('click', toggleMobileNavMenu)
    mobileNavMenu .addEventListener('click', toggleMobileNavMenu)
}

document.addEventListener('DOMContentLoaded', initApp)