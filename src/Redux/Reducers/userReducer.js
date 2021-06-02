const initialState = {
    isLoading: false,
    items: [],
    hasError: false
 };

const reducer = (state = initialState, action) => { 
    switch (action.type) {
       case 'ITEMS_REQUEST':
          return Object.assign({}, state, {
             isLoading: action.isLoading
          })
       default:
          return state;
    }
 }


 function task(tasks = [], action) {
    
   if (action.type === 'ADD_TODO') {
     return [...tasks, action.task];
   } else if (action.type === 'REMOVE_TODO') {
       return tasks.filter(task => task !== action.task);
     }
   return tasks;
 }