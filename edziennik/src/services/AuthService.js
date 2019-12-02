import firebase from "./firebaseSetup"

// What fields does the user have?
export async function register (email, password, firstName, lastName, role) {
  try {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(
      email,
      password
    )

    const id = userCredential.user.uid

    // After registration what do we have to do?
    await firebase.database().ref(`/users/${id}`).set({
      email,
      firstName,
      lastName,
      role
    })

    // What type of user do we create? What is its role?

    // If student?
    if (role === "STUDENT") {
      await firebase.database().ref(`/students/${id}`).set({
        classId: "",
        avatarUrl: ""
      })
    }

    // If teacher?
    if (role === "TEACHER") {
      await firebase.database().ref(`/teachers/${id}`).set({
        skills: "",
        classes: ""
      })
    }
  } catch (error) {
    // handle firebase error somehow
  }
}

export async function login (email, password) {
  // login to the system
  const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password)
  const id = userCredential.user.uid

  // get user data
  const dataSnapshot = await firebase.database().ref(`/users/${id}`).once('value')
  const user = dataSnapshot.val()

  // if role === student
  if (user.role === 'STUDENT') {
    // get student data
    const dataSnapshot = await firebase.database().ref(`/students/${id}`).once("value")
    const student = dataSnapshot.val()

    const profile = {
      ...user,
      ...student
    }

    return profile
  }

  // if role === teacher
  // get teacher data
}

export function logout () {
  firebase.auth().signOut()
}
  
