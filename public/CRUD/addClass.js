export function addClassDB(){
    const currentUser = firebase.auth().currentUser
    const classInput = document.getElementById('classInput').value
    const classTimeInput = document.getElementById('classTimeInput').value

    const db = firebase.firestore();
    const data = {
        ClassName : classInput,
        Enrolled : currentUser.email,
        ClassTime : classTimeInput
    }
    const docName = `${classInput}-${currentUser.email}`
    let setDoc = db.collection('Classes').doc(docName).set(data)
    document.getElementById('classInput').innerText = ''
}


