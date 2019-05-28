export function addAssignment(className,User,assignName,dueDate){
    const db = firebase.firestore();
    const time = firebase.database.ServerValue.TIMESTAMP
    const data = {
        ClassName : className,
        Enrolled : User,
        Assignment : assignName,
        Due : dueDate,
        Assigned : time
    }
    const docName = `${className}-${User}-${assignName}`
    let setDoc = db.collection('Assignments').doc(docName).set(data)
    .then(()=>{location.reload()})
}
