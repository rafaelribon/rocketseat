// class TodoList {
//     constructor() {
//         this.todos = [];

//     }


//     addTodo(){
//         this.todos.push('Novo todo');
//         console.log(this.todos);

//     }
// }


// const MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick =function(){
//     MinhaLista.addTodo();
// }


//Herança

// class List {
//     constructor(){
//         this.data = [];
//     }


//     add(data){
//         this.data.push(data);
//         console.log(this.data);
//     }
// }

// class TodoList extends List {
//     constructor(){
//         super();
//         this.usuario = 'Diego';
//     }

//     mostraUsuario(){
//         console.log(this.usuario)

//     }

// }

// const MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function() {
//     MinhaLista.add('Novo Todo');
// }

// MinhaLista.mostraUsuario();


//Operações com Array 
const arr = [1,3, 4, 5, 8, 9];


arr.teste = '20';
console.log(arr);

const newArr = arr.map(function(item,index){
    return  item + index; 
});

console.log(newArr);


const sum = arr.reduce(function(total, next){
    return total + next;
})

console.log(sum);


const filter  = arr.filter(function(item){
    return item % 2 === 0;
})

console.log(filter);


const find  = arr.find(function(item){

    return item === 5;
})

console.log(find);


