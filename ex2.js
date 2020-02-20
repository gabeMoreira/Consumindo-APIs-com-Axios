var form = document.getElementById('app');
var user = document.getElementById('user');
var listElement = document.getElementById('ull')
form.addEventListener('submit', function(e) {
    
   var todos = [];
    
    axios.get('https://api.github.com/users/'+ user.value+'/repos')
    .then(res => {
        for (i = 0; i < res.data.length;i++){
            console.log(res.data[i].name)
            todos.push(res.data[i].name)
        }
    })
    .catch(error => {
        console.log(error+ ' : \nO usuário não existe')
        todos.push('Usuário não existe');
        
    })
    .then(resp => {
        for(todo of todos) {
           
            var todoElement = document.createElement('li');
            var todoText = document.createTextNode(todo);
    
           
            todoElement.appendChild(todoText);
            listElement.appendChild(todoElement);
        }
    })
    

    
    
    e.preventDefault();
});

