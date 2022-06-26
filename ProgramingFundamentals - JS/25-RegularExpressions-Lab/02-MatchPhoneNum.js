function matchPhoneNums(nums) {
    let regEx = /(?<!\d)\+359([ -])2{1}\1\d{3}\1\d{4}\b/g
    let phoneNum = null
    let phoneNums = []
    while ((phoneNum = regEx.exec(nums)) !== null) {
        phoneNums.push(phoneNum[0])
    }
    console.log(phoneNums.join(", "));
}
matchPhoneNums("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")