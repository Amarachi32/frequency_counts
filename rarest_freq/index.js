/*
1) collect a set of unsorted data and store in a variable
2)  create a function to fetch the elements and its frequency counts as key value pairs
        5:5
        4:4
        3:3
        2:2
        1:1
3) sort the data
4) display result (the elements and its frequency counts) of the nth term
*/
const list = [1, 2, 1, 2, 1, 2, 2, 1, 3, 3, 3, 4, 4, 5, 1]

function nth_most_rate(list,n){
    const n_map ={}
    // find the frequency occurrence of the element in an array
    for (let i of list){
        if(n_map[i]){
            n_map[i] ++;
        }else{
            n_map[i] = 1;
        }
    }
    let sortable = []
    for (var item in n_map){
        sortable.push([item, n_map[item]])
    }
    // Sort the array
    sortable.sort(function(a,b){
        return a[1] -b[1]
    })
    return sortable[n-1]
    
}
console.log(nth_most_rate(list, 2))
