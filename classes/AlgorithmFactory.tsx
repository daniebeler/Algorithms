import Algorithm from "../interfaces/Algorithm"
import BubbleSort from "./BubbleSort"
import QuickSort from "./QuickSort"
import SelectionSort from "./SelectionSort"

class AlgorithmFactory {
    createAlgorithm(name: string): Algorithm {
        switch (name) {
            case 'quicksort':
                return new QuickSort()
            case 'selectionsort':
                return new SelectionSort()
                case 'bubblesort':
                return new BubbleSort()
            default:
                break;
        }
        return new QuickSort()
    }

}

export default AlgorithmFactory