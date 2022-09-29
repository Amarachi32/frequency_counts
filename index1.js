/* 
1:5
2:4
3:3
4:2
5:1
*/
const list = [1, 2, 1, 2, 1, 2, 2, 1, 3, 3, 3, 4, 4, 5, 1]


function nth_most_rate(list,n){
    //get the frequency count of the elements 
    let count = 0
    for (let i of list){
        if(i === n){
            count ++;
        }
    }
    return count;
}
console.log(nth_most_rate(list, 2))

