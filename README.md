# Algorithms and Data Structures <!-- omit in toc -->

#### Table of Contents 
- [**General**](#general)
- [**Algorithms**](#algorithms)
  - [**Problem Solving**](#problem-solving)
    - [**Steps**:](#steps)
    - [**Patterns**:](#patterns)
  - [**Recursion**](#recursion)
    - [**Basics**](#basics)
    - [**Different Types Of Recursive Functions**](#different-types-of-recursive-functions)
    - [**Examples**](#examples)
  - [**Searching Algorithms**](#searching-algorithms)
    - [**Linear Search**](#linear-search)
    - [**Binary Search**](#binary-search)
    - [**Naive String Search**](#naive-string-search)
  - [**Sorting Algorithms**](#sorting-algorithms)
    - [**Quadratic Sorting**](#quadratic-sorting)
      - [**Bubble Sort**](#bubble-sort)
      - [**Insertion Sort**](#insertion-sort)
      - [**Selection Sort**](#selection-sort)
    - [**Intermediate Sorting**](#intermediate-sorting)


## **General**
- This repository houses coding challenges and learning material for different algorithms and data structures I have learned.
- If you are interested in learning more about some of this material, I have included some snippets as well as some notes to help explain some of the code you will find in the repo.

**Quick Note about these Examples:**
- If you are downloading the examples, I would highly suggest downloading the [better comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) vscode extension. It will make the example questions far easier to read, and you might even start to notice a pattern in the way I write the comments.

Enjoy!!

## **Algorithms**
- Algorithms are a process or set of steps to solve a problem or accomplish a specific task.
- Algorithms are the foundation for being a successful problem solver and developer.
- Almost everything we do as programmers involves some sort of problem solving.
### **Problem Solving**
#### **Steps**:
    1. Understand the problem
    2. Explore concrete examples
    3. Break down the problem into steps
    4. Solve the problem (or attempt to)
    5. Look at your solution...try and refactor

#### **Patterns**:
 - Frequency Counters:
   - Uses objects or sets to collect values/frequencies of those values
   - Ex: [frequencyCounter.js](https://github.com/plooney81/AlgoPractice/blob/master/jsAlgoDataStructuresMC/problemSolvingPatterns/frequencyCounters.js)
 - Multiple Pointers:
   - Creating pointers or values that correspond to an index or position and move towards the begginning, middle, or end...depending on a condition.
   - Ex: [multiplePointers.js](https://github.com/plooney81/AlgoPractice/blob/master/jsAlgoDataStructuresMC/problemSolvingPatterns/multiplePointers.js)
 - Sliding Window:
   - Creates a window which can either be an array or number from one position to another.
   - Depending on a certain condition, the window either increases or closes and new window is created.
   - Ex: [slidingWindowPatter.js](https://github.com/plooney81/AlgoPractice/blob/master/jsAlgoDataStructuresMC/problemSolvingPatterns/slidingWindowPatter.js)
 - Divide and Conquer:
   - Involves dividing a data set into smaller chunks and repeating a process with a subset of the data.
   - Ex: [binarySearch](https://github.com/plooney81/AlgoPractice/blob/master/jsAlgoDataStructuresMC/searchAlgorithms/binarySearch.js)
 - Additional Examples:
   - Frequency Counters:
     - [sameFrequency](https://github.com/plooney81/AlgoPractice/blob/master/jsAlgoDataStructuresMC/problemSolvingPatterns/optionalChallenges/fc_sameFrequency.js)
   - Multiple Pointers: 
     - [averagePair](https://github.com/plooney81/AlgoPractice/blob/master/jsAlgoDataStructuresMC/problemSolvingPatterns/optionalChallenges/mp_averagePair.js)
     - [duplicates](https://github.com/plooney81/AlgoPractice/blob/master/jsAlgoDataStructuresMC/problemSolvingPatterns/optionalChallenges/mp_duplicates.js)
     - [isSusequence](https://github.com/plooney81/AlgoPractice/blob/master/jsAlgoDataStructuresMC/problemSolvingPatterns/optionalChallenges/mp_isSubsequence.js)
   - Sliding Window:
     - [findLongestSubstring](https://github.com/plooney81/AlgoPractice/blob/master/jsAlgoDataStructuresMC/problemSolvingPatterns/optionalChallenges/sw_findLongestSubstring.js)
     - [maxSubarraySum](https://github.com/plooney81/AlgoPractice/blob/master/jsAlgoDataStructuresMC/problemSolvingPatterns/optionalChallenges/sw_maxSubarraySum.js)
     - [minSubArrayLen](https://github.com/plooney81/AlgoPractice/blob/master/jsAlgoDataStructuresMC/problemSolvingPatterns/optionalChallenges/sw_minSubArrayLen.js)
   - Divide and Conquer:
     - [quickSort](https://github.com/plooney81/AlgoPractice/blob/master/jsAlgoDataStructuresMC/sortAlgorithms/IntermediateSortingAlgorithms/QuickSort/quickSort.js)
     - [mergeSort](https://github.com/plooney81/AlgoPractice/blob/master/jsAlgoDataStructuresMC/sortAlgorithms/IntermediateSortingAlgorithms/MergeSort/mergeSort.js)

### **Recursion**
#### **Basics**
- Recursion is simply a function or method that calls itself
- Two things need to be present in a recursive function:
    1. A base case --> Condition when the recursion ends
    2. Invoking the fuction with different input.
- Common recursion pitfalls:
  - NO BASE CASE!!
  - Forgetting to return something...or returning the wrong thing
  - Stack overflow

#### **Different Types Of Recursive Functions**
- Helper method Recursion:
    - Utilizes a helper method to handle the recursion piece of the function instead of the whole function being recursive.
    - A little more straightforward and easier to read.
- Pure Recursion
  -  Simply returns and concats...i.e. the whole function is recursive.
  -  Some helpful tips:
     -  Arrays ==> Use methods like slice, spread operator, and concat that make copies of arrays
     -  String ==> use methods like slice, substr, or substring
     -  Objects ==> use object.assign or the spread operator
  - Not as straightforward as above, but are a fun challenge and much shorter!
- A good example highlighting the difference between these two can be found [here](https://github.com/plooney81/AlgoPractice/blob/master/jsAlgoDataStructuresMC/recursion/helperMethodVsPureRecursion.js)

#### **Examples**
- Check out these more basic examples [here](https://github.com/plooney81/AlgoPractice/tree/master/jsAlgoDataStructuresMC/recursion/problemSet)
- If you are looking for more of a challenge, check these [examples](https://github.com/plooney81/AlgoPractice/tree/master/jsAlgoDataStructuresMC/recursion/moreChallengingProblemSet) out

### **Searching Algorithms**

#### **Linear Search**
- Simply check every element of an array to see if the element matches the search item.
- Linear search is the best we do with an unsorted array.
- Time Complexity: O(n)
- Example: [linearSearh.js](https://github.com/plooney81/AlgoPractice/blob/master/jsAlgoDataStructuresMC/searchAlgorithms/linearSearch.js)

#### **Binary Search**
- Binary Search is a divide and conquer type algorithm that eliminates half of the remaining elements at a time.
- The basics:
  - Finds the element in the middle of the array and compares that to the search element
  - If the middle is greater than the search:
    - Than the algorithm eliminates all elements in the array to the right of the current middle
  - If the middle is smaller than the search:
    - Than the algorithm eliminates all elements in the array to the left of the current middle
- Time Complexity: O(log n)
- **NOTE: Binary Search Algorithm only works on SORTED arrays**
- Example: [binarySearch.js](https://github.com/plooney81/AlgoPractice/blob/master/jsAlgoDataStructuresMC/searchAlgorithms/binarySearch.js)

#### **Naive String Search**
- Searches for substrings in a larger string
- Nested for loops, out checks the larger string and inner checks the substring (or search string).
- If the characters match, keep going, if they don't, break out of the inner loop, and go to the next character in the outer loop.
- Time Complexity: O(n^2)
- Example: [naiveStringSearch.js](https://github.com/plooney81/AlgoPractice/blob/master/jsAlgoDataStructuresMC/searchAlgorithms/naiveStringSearch.js)

### **Sorting Algorithms**

#### **Quadratic Sorting**

##### **Bubble Sort**
##### **Insertion Sort**
##### **Selection Sort**

#### **Intermediate Sorting**