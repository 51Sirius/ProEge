class ButtonTheme {
    constructor() {
        let block = document.createElement('div')
        block.className = 'ProEge-Theme'
        document.body.appendChild(block)
        this.block = document.getElementsByClassName('ProEge-Theme')[0]
        this.block.textContent = 'DarkMode'
    }

    updateToDark() {
        let allElementDiv = document.body.getElementsByTagName("*");
        for (let i = 0; i < allElementDiv.length; i++) {
            allElementDiv[i].className += ' black'
        }

    }
}


let button = new ButtonTheme()

button.block.addEventListener("click", button.updateToDark)