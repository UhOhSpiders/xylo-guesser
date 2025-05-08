export function bubbleSort(scrambled: { note: number, index: number }[], passes?: number): [{ note: number, index: number }[], number] {
    let i, j, temp;
    let swapped;
    swapped = false;
    let sorted = [...scrambled];
    let sortPasses = passes ? passes : scrambled.length-1

    for (i = 0; i < sortPasses; i++) {
        swapped = false; 
        for (j = 0; j < sorted.length - 1; j++) {
            if (sorted[j].index > sorted[j + 1].index) {
                temp = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;
                swapped = true;
            }
        }
        if (swapped == false) break;
    }

    return [sorted, i]; 
}
