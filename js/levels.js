const LVLS = [1, 2, 3, 4, 5]
function changeLVL(now) {
    LVLS.forEach(element => {
        console.log(element)
        document.getElementById(`lvl${element}`).style.display = 'none'
    })
    document.getElementById(`lvl${now}`).style.display = 'block'
}
changeLVL(1)

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('link1')) {
        changeLVL(1)
    }
    else if (e.target.classList.contains('link2')) {
        changeLVL(2)
    }
    else if (e.target.classList.contains('link3')) {
        changeLVL(3)
    }
    else if (e.target.classList.contains('link4')) {
        changeLVL(4)
    }
    else if (e.target.classList.contains('link5')) {
        changeLVL(5)
    }
})

document.addEventListener('contextmenu', function(e) {
    e.preventDefault()    
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'F12') {
        event.preventDefault()
    }
    if (event.key === 'ctrl' && event.key === 'shift' && event.key === 'I') {
        event.preventDefault()
        // alert('Сочетание Ctrl + Shift + I перехвачено!')
    }
})