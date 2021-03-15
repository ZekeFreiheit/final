let db = firebase.firestore()

document.querySelector('form').addEventListener('submit', async function(event){
    event.preventDefault()

    let orderText = document.querySelector('#order').value

    if (orderText.length > 0){
      // Add user ID to newly created to-do
      let docRef = await db.collection('comments').add({
        comment: orderText
        // userId: user.uid
      })

      let orderId = docRef.id
      console.log(`new comments with ID ${orderId} created`)

      // document.querySelector('.todos').insertAdjacentHTML('beforeend', `
      //   <div class="todo-${todoId} py-4 text-xl border-b-2 border-purple-500 w-full">
      //     <a href="#" class="done p-2 text-sm bg-green-500 text-white">✓</a>
      //     ${todoText}
      //   </div>
      // `)


    }
  })