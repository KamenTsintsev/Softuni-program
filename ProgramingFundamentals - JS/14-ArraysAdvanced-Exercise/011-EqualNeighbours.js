function equalNeighbours(matrix) {
    let count = 0;
    let neighbourBelow = (array, arrayBelow) => {
        for (let j = 0; j < array.length; j++) {
            let element = array[j];
            let elementBelow = arrayBelow[j]
            if (element === elementBelow) {
                count++;
            }
        }
        return count;
    }

    let neighbourNext = (array) => {
        for (let j = 0; j < array.length - 1; j++) {
            let element = array[j];
            let nextElement = array[j + 1]
            if (element === nextElement) {
                count++;
            }
        }
        return count;
    }

    for (let i = 0; i < matrix.length; i++) {
        let arr = matrix[i];
        let nextArr = matrix[i + 1]
        // neighbour Below
        if (nextArr !== undefined) {
            neighbourBelow(arr, nextArr);
        }
        // neighbour next 
        neighbourNext(arr);
    }
    console.log(count);
}
equalNeighbours([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']])

// equalNeighbours([
//     ['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']])