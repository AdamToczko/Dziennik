import firebase from './firebaseSetup'

const addGradeToStudent = (grade, studentId) => {

}

const removeGradeFromStudent = (grade, studentId) => {

}

const getStudentsGrades = async (studentId) => {
  const gradesRef = firebase.database().ref(`/students/${studentId}/grades`)
}
