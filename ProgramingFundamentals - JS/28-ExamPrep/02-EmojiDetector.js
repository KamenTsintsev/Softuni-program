function emojiDetector(input) {
    let text = input.shift();
    let emojiPattern = /(?<wholeEmoji>(?<border>:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\k<border>)/g;
    let numberPattern = /\d/g

    let coolTreshold = text.match(numberPattern)
        .map(Number)
        .reduce((a, x) => a * x, 1)

    let regex = null

    let coolEmojis = [];
    let count = 0

    while ((regex = emojiPattern.exec(text)) !== null) {

        let name = regex.groups["emoji"]
        let emojiNum = name.split("")
            .map(el => el.charCodeAt())
            .reduce((a, x) => a += x, 0)

        if (emojiNum >= coolTreshold) {
            coolEmojis.push(regex.groups["wholeEmoji"])
        }
        count++;
    }

    console.log(`Cool threshold: ${coolTreshold}`);
    console.log(`${count} emojis found in the text. The cool ones are:`);
    coolEmojis.forEach(x => console.log(x))
}

// emojiDetector(["**Joy** 23"])
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy** ::Smiley:: ::Smiley:: ::Smiley:: ::Smiley::"])
// emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! 1::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])