let allTodos = [
    {
        title: 'Title 1', 
        dueDate: '02-13-2029',
        description: 'To Do',
        isComplete: false
    },
    {
        title: 'Title 2', 
        dueDate: '02-13-2029',
        description: 'To Do',
        isComplete: true
    },
    {
        title: 'Title 3', 
        dueDate: '02-13-2029',
        description: 'To Do',
        isComplete: true
    },
    {
        title: 'Title 4', 
        dueDate: '02-13-2029',
        description: 'To Do',
        isComplete: false
    },
    {
        title: 'Title 5', 
        dueDate: '02-13-2029',
        description: 'To Do',
        isComplete: false
    },
    {
        title: 'Title 6', 
        dueDate: '02-13-2029',
        description: 'To Do',
        isComplete: false
    },
    
    
  ];

  function createElementFromTodo(todo) {
    // builds an element and returns it
    const toDoInfo = $(`
            <div class="todo">
        <h3><span class="title"> ${todo.title} </span>
        <span class="due-date">${todo.dueDate}, 3:23:56 PM</span></h3>
        <pre>Click on the left below the icons to expand the left drawer

        When you're done, click complete on this todo.</pre>
        <footer class="actions">
            <button class="action complete">Complete</button>
            <button class="action delete">Delete</button>
        </footer>
        </div>
    `)
        return toDoInfo
  }

  
  function renderTodos() {
    // uses allTodos
    // do forEach for each to do 
    allTodos.forEach(function(element, index){
        console.log(element.title, index)
        if (element.isComplete === true) {
        $(".completed-todos").append(createElementFromTodo(element))   
        } else {
            $(".pending-todos").append(createElementFromTodo(element))
        }
    })
  }

  renderTodos();