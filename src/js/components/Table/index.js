export default (theadArray, idTbody) => {
    const Table = document.createElement('table')

    const thead = document.createElement('thead')
    const tr = document.createElement('tr')


    theadArray.forEach(theadText => {
        const th = document.createElement('th')
        th.textContent = theadText
        tr.appendChild(th)
    })

    thead.appendChild(tr)

    const tbody = document.createElement('tbody')
    tbody.id = idTbody

    Table.appendChild(thead)
    Table.appendChild(tbody)

    return Table
}