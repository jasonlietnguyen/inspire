// app.controller('TodoController', function(TodoService){
// 	var tc = this;
// 	tc.todos = TodoService.getTodos();
// 	// DO NOT EDIT ABOVE

// })

app.controller('MainController', function (TodoService) {
    var mc=this;
     
    
    mc.list=TodoService.getTodos();
    
    mc.addList = function (newTask) {
        mc.list.push(newTask)
        mc.newTask = {}
        TodoService.saveTodos(mc.list)
     
    }
    
    mc.removeTask = function (index) {
        mc.list.splice(index, 1);
        TodoService.saveTodos(mc.list)   
    }
    
            
})