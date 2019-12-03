import firebase from "./firebaseSetup"

export async function addClass(name) {
  // 1. fetch all classes
  // 2. check if class name already exists (check for duplicated)
  // 3. throw error when class already exists
  // 4. otherwise, add class

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

  if (typeof teachersInClass === 'string') {
    const teachers = [teacherId]
    teachersInClassRef.set(teachers)
  } else {
    // we have array here!
    // 1. check if teacher is in a class
    // 2. if he is there, do nothing
    // 3. if teacher is not there, add him to the class
    // 4. send new teachers array to firebase
  }
}

export function addStudentToClass(studentId, classId) {

}

export function removeTeacherFromClass(teacherId, classId) {

}

export function removeStudentFromClass(studentId, classId) {

}