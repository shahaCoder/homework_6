// Задание 1 

let arr = [
    {
        model: "Vaz 2107",
        color: "black", 
        cost: 55000 
    },
    {
        model: "Lacetti",
        color: "white",
        cost: 13000
    },
    
    {
        model: "Rolls Roys",
        color: "Red",
        cost: 23000
    },
    
    {
        model: "Lamborgini",
        color: "blue",
        cost: 30000 
    },
    {
        model: "cobalt",
        color: "black", 
        cost: 1000, 
    },
    {
        model: "nexia",
        color: "red", 
        cost: 6000, 
    },
    {
        model: "taxo",
        color: "darkblue",
        cost: 85000,
    },
    {
        model: "captiva",
        color: "white",
        cost: 25000,
    },
    {
        model: "trailblazer",
        color: "black",
        cost: 70000,
    },
    {
        model: "Toyota supra",
        color: "orange",
        cost: 50000
     },
     
     {
        model: "Dodge",
        color: "blueviolet",
        cost: 30000
     },
     
     {
        model: "Porsche taycan",
        color: "white",
        cost: 15000
     },
     
     {
        model: "tesla",
        color: "grey",
        cost: 5000
     },
     
     {
        model: "R34 GTR",
        color: "blue",
        cost: 7000
     },
     
     { 
       model: "БМВ M4 competition",
       color: "black",
       cost: 40000
     },

     {
         model: "Tico",
         color: "green",
         cost: 2000
     },
 
     {
         model: "Matiz",
         color: "white",
         cost: 2999
     }

]

let cheap = arr.filter(item => item.cost < 7000)
console.table(cheap)
 

// Задание 2
let arr_2 = [4, 16, 19, 22, 11, 144, 967, 19124];

let even = arr_2.filter(item => item % 2 == 0)
console.log(even)

let odd = arr_2.filter(item => item % 2 == 1)
console.log(odd)

