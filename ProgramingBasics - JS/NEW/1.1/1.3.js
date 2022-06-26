function conv(sum, term, percent) {
    let deposit = Number(sum)
    let termOfDeposit = Number(term)
    let percentage = Number(percent) / 100

    let finalSum = deposit + (termOfDeposit * ((deposit * percentage) / 12))
    console.log(finalSum)
}

conv(200, 3, 5.7)