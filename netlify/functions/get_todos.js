let firebase = require('./firebase')

exports.handler = async function(event) {
  let queryStringUserId = event.queryStringParameters.userId
  console.log(event);
  let todosData = []

  let db = firebase.firestore()

  let querySnapshot = await db.collection('todos')
    .where('userId', '==', queryStringUserId)
    .get()
  let todos = querySnapshot.docs
  for (let i = 0; i < todos.length; i++) {
    let todoId = todos[i].id
    let todo = todos[i].data()
    todosData.push({
      id: todoId,
      text: todo.text
    })
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify(todosData)
  }
}