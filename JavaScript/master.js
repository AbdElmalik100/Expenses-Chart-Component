let array = []
fetch("data.json").then((response => response.json())).then((data) => {
    data.forEach (ele => {     
        document.querySelector(`p.${ele.day}`).innerHTML = ele.day
        document.querySelector(`p.${ele.day}`).previousElementSibling.style.height = `${ele.amount}%`
        document.querySelector(`p.${ele.day}`).previousElementSibling.setAttribute("data-amount", `$${ele.amount}`)
        array.push(ele.amount)
    })

    document.querySelectorAll("p").forEach(el => {
        if (parseFloat(el.previousElementSibling.style.height) === Math.max(...array)) {
            el.previousElementSibling.style.backgroundColor = "var(--Cyan)"
        }
    })
})

