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
function assignmentFetch(className){
    const currentUser = firebase.auth().currentUser
    const db = firebase.firestore();
    const assignments = db.collection('Assignments')
    assignments.onSnapshot(docs =>{
        docs.forEach(function(doc){
            if(currentUser.email === doc.data().Enrolled && className === doc.data().ClassName){
                Body(doc.data())
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
        assignmentFetch(className)
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

    const assignDate = document.createElement('input')
    assignDate.setAttribute('id',`${className}-assignDate`)
    assignDate.setAttribute('class','assignDate')
    assignDate.setAttribute('placeholder','Assigned Date')

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
    classTitle.appendChild(assignDate)
    classTitle.appendChild(dueDate)
    classTitle.appendChild(addAssignBtn)
    classTitle.appendChild(deleteBtn)
    return classTitle
}
function Body(assignment){
    const classDiv = document.getElementById(assignment.ClassName)
    const assignmentDiv = document.createElement('div')
    assignmentDiv.setAttribute('class','assignmentDiv')
    const h3 = document.createElement('h3')
    h3.innerHTML = assignment.Assignment

    assignmentDiv.appendChild(h3)
    classDiv.appendChild(assignmentDiv)
}
function addAssignmentEvent(className){
    const currentUser = firebase.auth().currentUser.email
    const assignmentName = document.getElementById(`${className}-Input`).value    
    const dueDate = new Date(document.getElementById(`${className}-dueDate`).value)
    const assignDate = new Date(document.getElementById(`${className}-assignDate`).value)

    addAssignment(className,currentUser,assignmentName,dueDate,assignDate)
}

