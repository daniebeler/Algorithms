import Algorithm from "../interfaces/Algorithm"

class QuickSort implements Algorithm {
    name = 'Quick Sort'
    description = 'This is the description of quick sort'
    bestComplexity = 'O(n × log n) '
    averageComplexity = 'O(n × log n) '
    worstComplexity = 'O(n2)'
}

export default QuickSort