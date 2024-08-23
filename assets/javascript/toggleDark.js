var checkbox = document.querySelector('input[name=mode]')

checkbox.addEventListener('change', function () {
    if (this.checked) {
        print(checked)
        document.documentElement.setAttribute('data-theme', 'dark')
        var moon = document.getElementById('moon')
        moon.innerHTML = feather.icons['sun'].toSvg({ 'fill': 'var(--fg-color-dark)' })
    } else {
        print(checked)
        document.documentElement.setAttribute('data-theme', 'light')
        var moon = document.getElementById('moon')
        moon.innerHTML = feather.icons['moon'].toSvg({ 'fill': 'var(--fg-color-dark)' })
    }
})

document.documentElement.setAttribute('data-theme', 'dark')