import Algorithm from "../interfaces/Algorithm"

class SelectionSort implements Algorithm {
    name = 'Selection Sort'
    description = 'Selection Sort is an iterative and in-place sorting algorithm that divides the data structure in two sublists: the ordered one, and the unordered one. The algorithm loops for all the elements of the data structure and for every cycle picks the smallest element of the unordered sublist and adds it to the sorted sublist, progressively filling it. '
    bestComplexity = 'O(n2)'
    averageComplexity = 'O(n2)'
    worstComplexity = 'O(n2)'
}

export default SelectionSort