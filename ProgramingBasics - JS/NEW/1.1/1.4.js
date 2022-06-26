function conv(pagesInput, pph, daysInput) {
    let pages = Number(pagesInput)
    let pagesPerHour = Number(pph)
    let days = Number(daysInput)

    let hours = pages / pagesPerHour / days

    console.log(hours.toFixed(1))
}

conv(212, 20, 2)


