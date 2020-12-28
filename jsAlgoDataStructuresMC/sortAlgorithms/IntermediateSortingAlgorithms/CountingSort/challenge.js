//* The Full Counting Sort - Hacker Rank
//? In this challenge you need to print the string that accompanies each integer in a list sorted by the integers. If two strings are associated with the same integer, they must be printed in their original order so your sorting algorithm should be stable. There is one other twist. The first half of the strings encountered in the inputs are to be replaced with the character "".
//? Insertion Sort and the simple version of Quicksort are stable, but the faster in-place version of Quicksort is not since it scrambles around elements while sorting.
//? In this challenge, you will use counting sort to sort a list while keeping the order of the strings preserved.
//? For example, if your inputs are  you could set up a helper array with three empty arrays as elements. The following shows the insertions:
//? i	string	converted	list
//? 0				[[],[],[]]
//? 1 	a 	-		[[-],[],[]]
//? 2	b	-		[[-],[-],[]]
//? 3	c			[[-,c],[-],[]]
//? 4	d			[[-,c],[-,d],[]]
//? The result is then printed:  - c - d

const fullCountSort = (arr) => {
    //determine min/max, also swap - for the first half of the strings
    let min = Infinity;
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        let subArray = arr[i];
        min = Math.min(parseInt(subArray[0]), min);
        max = Math.max(parseInt(subArray[0]), max);
        arr[i][1] = i < (arr.length / 2) ? '-' : subArray[1];
    }
    let elementRange = max - min + 1;
    let countArray = new Array(elementRange).fill(0);
    //count the elements for each type
    for(let i = 0; i < arr.length; i++){
        let subArray = arr[i];
        countArray[parseInt(subArray[0]) - min] += 1;
    }
    //swap the counts for the index
    for(let i = 1; i < countArray.length; i++){
        countArray[i] += countArray[i - 1];
    }
    //move indeces over one to the right
    for(let i = countArray.length - 1; i >= 0; i--){
        countArray[i] = i === 0 ? 0 : countArray[i - 1];
    }
    let outputArray = new Array(arr.length);
    for(let i = 0; i < arr.length; i++){
        let subArray = arr[i];
        outputArray[countArray[parseInt(subArray[0]) - min]] = subArray[1];
        countArray[parseInt(subArray[0]) - min] += 1;
    }
    return outputArray;
}


let test = [ [ '0', 'ab' ],
  [ '6', 'cd' ],
  [ '0', 'ef' ],
  [ '6', 'gh' ],
  [ '4', 'ij' ],
  [ '0', 'ab' ],
  [ '6', 'cd' ],
  [ '0', 'ef' ],
  [ '6', 'gh' ],
  [ '0', 'ij' ],
  [ '4', 'that' ],
  [ '3', 'be' ],
  [ '0', 'to' ],
  [ '1', 'be' ],
  [ '5', 'question' ],
  [ '1', 'or' ],
  [ '2', 'not' ],
  [ '4', 'is' ],
  [ '2', 'to' ],
  [ '4', 'the' ] ]

console.log(fullCountSort(test));