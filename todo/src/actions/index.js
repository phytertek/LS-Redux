export const ADDTODO = 'ADDTODO'
export const addTodo = value => ({
  type: ADDTODO,
  value
})

export const DELETETODO = 'DELETETODO'
export const deleteTodo = id => ({
  type: DELETETODO, 
  id
})

export const COMPLETETODO = 'COMPLETETODO'
export const completeTodo = id => ({
  type: COMPLETETODO,
  id
})

export const PUTTODOSFROMLOACALSTORAGE = 'PUTTODOSFROMLOACALSTORAGE'
export const putTodosFromLocalStorage = todos => ({
  type: PUTTODOSFROMLOACALSTORAGE,
  todos
})

