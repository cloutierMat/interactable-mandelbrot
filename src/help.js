
const keyboardShortcuts = [
    ["esc", "Close Help"],
    ["space", "Resume/Stop animation"],
    ["Mouse click", "Centers the plot on your click"],
    ["r", "Reset defaults"],
]

const settingTooltips = [
    ["center", "lots of stuff"]
]

const wrapWithLtGt = (text) => `&lt;${text}&gt;`

const createElement = (tagName) => document.createElement(tagName)
const createTable = () => createElement("table")
const createTableData = () => createElement("td")
const createTableRow = () => createElement("tr")

const createDataElement = (innerHTML) => {
    const keyData = createTableData()
    keyData.innerHTML = innerHTML
    return keyData
}

const createHelpRow = (key, text) => {
    const row = createTableRow()
    row.appendChild(createDataElement(wrapWithLtGt(key)))
    row.appendChild(createDataElement(text))
    return row
}

const init = () => {
    const helpModal = document.getElementById("help-modal-body")

    const keyTable = createTable()
    for (const [key, text] of keyboardShortcuts) {
        keyTable.appendChild(createHelpRow(key, text))
    }
    helpModal.appendChild(keyTable)
}

export default { init }
