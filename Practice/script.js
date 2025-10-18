// const input = document.querySelector('input')
// const btn = document.querySelector('button')
// const ul = document.querySelector("ul")

// btn.addEventListener('click', function(){
//      if(input.value.trim() === "") return

//     const item = document.createElement('li')
//     item.innerText = input.value

//     const deletebtn = document.createElement('button')
//     deletebtn.innerText = "Delete"
//     deletebtn.classList.add('delete')

//     const editbtn = document.createElement('button')
//     editbtn.innerText = 'Edit karo'
//     editbtn.classList.add('edit')

//     item.appendChild(deletebtn)
//     item.appendChild(editbtn)
//     ul.appendChild(item)
//     input.value = ""
// })

// ul.addEventListener('click', function(event){

//     if(event.target.classList.contains("delete")){
//         event.target.parentElement.remove()
//     }

//     if(event.target.classList.contains("edit")){
//         const li = event.target.parentElement;
//         console.log(li)
//         const currentText = li.firstChild.textContent.trim()

//         console.log(currentText)

//         const editInput = document.createElement('input')
//         editInput.type = 'text';
//         editInput.value = currentText;

//         li.firstChild.replaceWith(editInput);
//         editInput.focus()

//         editInput.addEventListener('keydown', function(e) {
//           if (e.key === 'Enter') {
//             const newText = editInput.value.trim() || currentText;
//             editInput.replaceWith(document.createTextNode(newText));
//           }
//         });
//     }
// })

const input = document.querySelector('input')
const btn = document.querySelector('button')
const ul = document.querySelector('ul')

btn.addEventListener('click', function(){
  const item = document.createElement('li')
  item.innerText = input.value

  const deletebtn = document.createElement('button')
  deletebtn.innerText = 'Delete'
  deletebtn.classList.add('delete')

  item.appendChild(deletebtn)

  ul.appendChild(item)
  input.value = ""
})


ul.addEventListener('click', function(event){
  if(event.target.classList.contains('delete')){
    event.target.parentElement.remove()
  }
})


