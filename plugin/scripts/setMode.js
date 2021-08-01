class ButtonTheme {
    constructor() {
        this.activate = false
        let block = document.createElement('div')
        block.className = 'ProEge-Theme'
        document.body.appendChild(block)
        this.block = document.getElementsByClassName('ProEge-Theme')[0]
        this.block.textContent = 'DarkMode'
    }

    updateToDark() {
        button.block.className += ' black'
        button.activate = true
        let allElementDiv = document.body.getElementsByTagName("*");
        for (let i = 0; i < allElementDiv.length; i++) {
            allElementDiv[i].classList.add('black')
        }
    }

    updateToDefault() {
        button.block.classList.remove('black')
        button.activate = false
        let allElementDiv = document.body.getElementsByTagName("*")
        for (let i = 0; i < allElementDiv.length; i++) {
            allElementDiv[i].classList.remove('black')
        }

    }

    setTheme() {
        if (button.activate) button.updateToDefault()
        else button.updateToDark()
            }
}


let button = new ButtonTheme()

button.block.addEventListener("click", button.setTheme)