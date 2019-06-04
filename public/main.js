import { authLogInEvent,authSingUpEvent } from './navBtnsEvents/authBtns.js'
import { addClassDB } from '../CRUD/addClass.js'
import { classFetch } from './DOM/classsesDom.js'

const authLogInBtn = document.getElementById('authLogInBtn')
const authSignUpBtn = document.getElementById('authSignUpBtn')
const logOutBtn = document.getElementById('logOutBtn')
const addClassBtn = document.getElementById('addClassBtn')
const loginBtns = document.getElementById('loginBtns')
const classBtns = document.getElementById('classBtns')

firebase.auth().onAuthStateChanged(function(currentUser) {
    if (currentUser) {
      loginBtns.style.visibility = 'hidden'
      loginBtns.style.height = '0'
      classBtns.style.height = '50px'
      classBtns.style.visibility = 'visible'
      classFetch()
    } else {
      classBtns.style.height = '0'
      classBtns.style.visibility = 'hidden'
      loginBtns.style.visibility = 'visible'
      loginBtns.style.height = '50px'
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