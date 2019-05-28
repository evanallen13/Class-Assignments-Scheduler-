import { addAssignment } from '../CRUD/addAssignment.js'
export function classFetch(){
    const currentUser = firebase.auth().currentUser
    const db = firebase.firestore();
    const classes = db.collection('Classes')

    classes.onSnapshot(docs => {
        docs.forEach(function(doc){
            if(currentUser.email === doc.data().Enrolled){
                classDom(doc.data().ClassName)
            }
        })
    })
}

function classDom(className){
    if(document.getElementById(className) === null){
        const classesDiv = document.getElementById('classesDiv')
        const classDiv = document.createElement('div')
        classDiv.setAttribute('id',className)
        classDiv.setAttribute('class','classDiv')
        classDiv.setAttribute('class',"container")

        const classTitle = Title(className)

        classDiv.appendChild(classTitle)
        classesDiv.appendChild(classDiv)
    }
}
function Title(className){
    const classTitle = document.createElement('div')
    classTitle.setAttribute('class','classTitle')
    const h3 = document.createElement('h3')
    h3.innerText = className 

    const input = document.createElement('input')
    input.setAttribute('class','classInput')
    input.setAttribute('id',`${className}-Input`)
    input.setAttribute('placeholder','Assignment')

    const dueDate = document.createElement('input')
    dueDate.setAttribute('id',`${className}-dueDate`)
    dueDate.setAttribute('class','dueDate')
    dueDate.setAttribute('placeholder','Due Date')

    const addAssignBtn = document.createElement('button')
    addAssignBtn.setAttribute('class','assignBtn')
    addAssignBtn.innerHTML = 'ADD'
    addAssignBtn.addEventListener('click',()=>{
        addAssignmentEvent(className)
    })

    const deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class','deleteBtn')
    deleteBtn.innerHTML = 'DELETE'

    classTitle.appendChild(h3)
    classTitle.appendChild(input)
    classTitle.appendChild(dueDate)
    classTitle.appendChild(addAssignBtn)
    classTitle.appendChild(deleteBtn)
    return classTitle
}

function addAssignmentEvent(className){
    const currentUser = firebase.auth().currentUser.email
    const assignmentName = document.getElementById(`${className}-Input`).value    
    const dueDate = new Date(document.getElementById(`${className}-dueDate`).value)

    addAssignment(className,currentUser,assignmentName,dueDate)
}