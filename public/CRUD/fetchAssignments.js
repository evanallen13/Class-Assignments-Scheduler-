
export function fetchAssign(className){
    const currentUser = firebase.auth().currentUser
    const db = firebase.firestore();
    const Assignments = db.collection('Assignments')
    Assignments.onSnapShot(docs =>{
        
    })
}