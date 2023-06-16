// #region Log to console and to pre tag
const preLog = document.querySelector('#log')
const log = console.log
console.log = (...args) => {
    preLog.append(...args, '\n')
    log(...args)
}

// #endregion

const dynamic = document.querySelector('.dynamicForm')

const addTable = () => {
    const form = document.createElement('div')
    const select = document.createElement('select')
    
    select.addEventListener('change', (e) => {
        console.dir(e.target)
        e.target.value !== '-- Select Table --' && addTable()
    })
    
    select.append(...getTableOptions())
    form.append(select)
    dynamic.append(form)
}

const getTableOptions = () => {
    return [
        '-- Select Table --',
        'wrk_patient',
        'wrk_rdv',
        'wrk_facture',
        'cfg_examen'
    ].map(table => {
        const option = document.createElement('option')
        option.value = table
        option.textContent = table
        return option
    })
}

addTable()