import { addClassDB } from '../CRUD/addClass.js'
export function authLogInEvent(){
    const emailInput = document.getElementById('emailInput').value
    const passwordInput = document.getElementById('passwordInput').value
    const auth = firebase.auth()

    const promise = auth.signInWithEmailAndPassword(emailInput,passwordInput)
    promise.then(()=>{
       console.log('yes')
    })
    promise.catch(e => {
        handleError(e)
    })
}

export function authSingUpEvent(){
    const emailInput = document.getElementById('emailInput').value
    const passwordInput = document.getElementById('passwordInput').value
    const auth = firebase.auth()

    const promise = auth.createUserWithEmailAndPassword(emailInput,passwordInput)
    promise.then(() => {
        console.log('yes')
    })
    promise.catch(e => {
        handleError(e)
    })
}

function handleError(e){
    const errorMsg = document.getElementById('errorMsg')
    errorMsg.innerHTML = e.message
    setTimeout(()=>{
        errorMsg.innerHTML = ' '
    },3 * 1000)   
}


