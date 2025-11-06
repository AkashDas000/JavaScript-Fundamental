// Merge 2 sort list in a single list

// let left = [1, 3, 5, 7];
// let right = [2, 4, 8, 9];

// function merge(left, right) {
//   let m = left.length;
//   let n = right.length;

//   let p1 = m - 1;
//   let p2 = n - 1;

//   if (p2 < 0) return;

//   for (let i = m + n - 1; i > 0; i--) {
//     if (p1 >= 0 && left[p1] > right[p2]) {
//       left[i] = left[p1];
//       p1--;
//     } else {
//       left[i] = right[p2];
//       p2--;
//     }
//   }
//   return left;
// }

function merge(left, right){
  let res = []
  let i=0;
  let j=0;

  while(i<left.length && j<right.length){
    if(left[i] < right[j]){
      res.push(left[i])
      i++;
    }else{
      res.push(right[j])
      j++;
    }
  }

  return [...res, ...left.slice(i), ...right.slice(j)]
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length/2);

  let left = mergeSort(arr.slice(0, mid));

  let right = mergeSort(arr.slice(mid));


  return merge(left, right);
}

let arr = [8,4,5,6,9,1,3,7]
console.log(mergeSort(arr))

