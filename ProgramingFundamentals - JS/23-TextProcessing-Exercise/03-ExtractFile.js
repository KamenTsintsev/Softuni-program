function extractFile(path) {
    let pathArr = path.split("\\");
    let file = pathArr[pathArr.length - 1].split(".")
    let fileExt = file.pop();
    let fileName = file.join(".")

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExt}`);
}
extractFile('C:\\Internal\\training-internal\\Template.bak.pptx')