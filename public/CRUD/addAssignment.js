export function addAssignment(className,User,assignName,dueDate,assignDate){
    const db = firebase.firestore();
    const data = {
        ClassName : className,
        Enrolled : User,
        Assignment : assignName,
        Due : dueDate,
        Assigned : assignDate
    }
    const docName = `${className}-${User}-${assignName}`
    let setDoc = db.collection('Assignments').doc(docName).set(data)
    .then(()=>{location.reload()})
}
