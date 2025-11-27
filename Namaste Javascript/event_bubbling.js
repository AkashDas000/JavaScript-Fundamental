document.querySelector("#GrandParent").addEventListener('click', ()=> {
    console.log('Grand Parent clicked')
},)

document.querySelector("#parent").addEventListener('click', ()=> {
    console.log('Parent clicked')
},)

document.querySelector("#child").addEventListener('click', ()=> {
    event.stopPropagation()
    console.log('Child clicked')
}, )
