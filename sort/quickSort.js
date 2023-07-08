export const quickSort = (arr, start, end) => {
  start = start === undefined ? 0 : start;
  end = end === undefined ? arr.length - 1 : end;

  if (start >= end) {
    return;
  }

  let value = arr[start];

  let i = start;
  let j = end;

  while (i < j) {
    while (i < j && arr[j] >= value) {
      j--;
    }

    if (i < j) {
      arr[i] = arr[j];
      i++;
    }

    while (i < j && arr[i] < value) {
      i++;
    }

    if (i < j) {
      arr[j] = arr[i];
      j--;
    }
  }

  arr[i] = value;

  quickSort(arr, start, i - 1);
  quickSort(arr, i + 1, end);
};
