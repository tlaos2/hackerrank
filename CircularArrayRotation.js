/* 

input  
3,2,1
1,2,3
0
1
2

output
2
3
1



[debug output]
a [ 1, 2, 3 ]
k 2
queries [ 0, 1, 2 ]

*/

function circularArrayRotation(a, k, queries) {
  let rtn = [];

  for (let i = 0; i < k; i++) {
    a.unshift(a.pop());
  }

  queries.forEach(q => {
    rtn.push(a[q]);
  });

  return rtn;
}
