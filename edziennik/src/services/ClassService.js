import firebase from "./firebaseSetup"

export async function addClass(name) {
  // 1. fetch all classes
  // 2. check if class name already exists (check for duplicated)
  // 3. throw error when class already exists
  // 4. otherwise, add class

  await firebase.database().ref('/classes').push({
    name,
    students: '',
    teachers: '',
    plan: ''
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
  } else if (teachersInClass === null) {
    return 
  } else {
    // we have array here!
    let newTeachersInClass = []
    if (teachersInClass.includes(teacherId)) {
      return
    } else {
      newTeachersInClass = [...teachersInClass, teacherId]
    }
    teachersInClassRef.set(newTeachersInClass)
  }
}

export async function removeTeacherFromClass(teacherId, classId) {
  const teachersInClassRef = firebase.database().ref(`/classes/${classId}/teachers`)
  const teachersInClass = await teachersInClassRef.once('value').then(ds => ds.val())

  if (typeof teachersInClass === 'string') {
    return
  } else {
    let newTeachersInClass = []
    if (teachersInClass.includes(teacherId)) {
      newTeachersInClass = teachersInClass.filter(id => id !== teacherId)
    } else {
      return
    }
    teachersInClassRef.set(newTeachersInClass)
  }
}

export async function addStudentToClass(studentId, classId) {
  const studentsInClassRef = firebase.database().ref(`/classes/${classId}/students`)
  const studentsInClass = await studentsInClassRef.once('value').then(ds => ds.val())

  if (typeof studentsInClass === 'string') {
    const students = [studentId]
    studentsInClassRef.set(students)
  } else {
    if (studentsInClass.includes(studentId)) {
      return
    } else {
      let newStudentsInClass
      newStudentsInClass = [...studentsInClass, studentId]
      studentsInClassRef.set(newStudentsInClass)
    }
  }
}

export async function removeStudentFromClass(studentId, classId) {
  const studentsInClassRef = firebase.database().ref(`/classes/${classId}/students`)
  const studentsInClass = await studentsInClassRef.once('value').then(ds => ds.val())

  if (typeof studentsInClass === 'string') {
    return
  } else {
    let newStudentsInClass = []
    if (studentsInClass.includes(studentId)) {
      newStudentsInClass = studentsInClass.filter(id => id !== studentId)
      studentsInClassRef.set(newStudentsInClass)
    } else {
      return
    }
  }
}

// const createLesson = (lesson = 'Free', hours = 0)

// const createDay = (lessons = [createLesson()]) => {
//   return lessons
// }

// const createPlan = (mon = createDay(), tue = createDay(), wed = createDay(), thu = createDay(), fri = createDay(), sat = createDay(), sun = createDay()) => {
//   const plan = [mon, tue, wed, thu, fri, sat, sun]
// }

// const updateClassPlan = async (classId, plan = createPlan()) => {
//   const planInClassRef = firebase.database().ref(`/classes/${classId}/plan`)
//   const planInClass = await planInClassRef.once('value').then(ds => ds.val())
// }