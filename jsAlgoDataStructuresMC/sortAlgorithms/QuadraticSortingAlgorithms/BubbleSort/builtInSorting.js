const ascendingOrder = (a, b) => {
    return a - b;
}

const descendingOrder = (a, b) => {
    return b - a;
}

console.log([6, 4, 15, 10].sort(ascendingOrder));
console.log([6, 4, 15, 10].sort(descendingOrder));