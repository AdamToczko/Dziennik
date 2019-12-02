import firebase from "./firebaseSetup"

export async function addClass(name) {
  await firebase.database().ref('/classes').push({
    name,
    students: '',
    teachers: ''
  })
}

export async function fetchClasses() {
  const dataSnapshot = await firebase.database().ref('/classes').once('value')
  return dataSnapshot.val()
}

export async function removeClass(id) {
  await firebase.database().ref(`/classes/${id}`).set(null)
}

export async function addTeacherToClass(teacherId, classId) {
  const teachersInClassRef = firebase.database().ref(`/classes/${classId}/teachers`)
  const teachersInClass = await teachersInClassRef.once('value').then(ds => ds.val())
  
  debugger
}

export function addStudentToClass(studentId, classId) {

}

export function removeTeacherFromClass(teacherId, classId) {

}

export function removeStudentFromClass(studentId, classId) {

}