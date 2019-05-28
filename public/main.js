import { authLogInEvent,authSingUpEvent } from './navBtnsEvents/authBtns.js'
import { addClassDB } from '../CRUD/addClass.js'
import { classFetch } from './DOM/classsesDom.js'

const authLogInBtn = document.getElementById('authLogInBtn')
const authSignUpBtn = document.getElementById('authSignUpBtn')
const logOutBtn = document.getElementById('logOutBtn')
const addClassBtn = document.getElementById('addClassBtn')

firebase.auth().onAuthStateChanged(function(currentUser) {
    if (currentUser) {
      classFetch()
    } else {
      console.log('Log in')
    }
  });


authLogInBtn.addEventListener('click',authLogInEvent)
authSignUpBtn.addEventListener('click',authSingUpEvent)

logOutBtn.addEventListener('click',()=>{
    firebase.auth().signOut()
    .catch(e=>{
        console.log(e.message)
    })
    .then(()=>{
        location.reload()
    })
})

addClassBtn.addEventListener('click',()=>{
    addClassDB()
})