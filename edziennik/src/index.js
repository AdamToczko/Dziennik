import firebase from 'firebase'

const  {
    REACT_APP_API_KEY,
    REACT_APP_AUTH_DOMAIN,
    REACT_APP_DATABASE_URL,
    REACT_APP_PROJECT_ID,
    REACT_APP_STORAGE_BUCKET,
    REACT_APP_MESSAGING_SENDER_ID,
    REACT_APP_APP_ID
  } = process.env

  const firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_AUTH_DOMAIN,
    databaseURL: REACT_APP_DATABASE_URL,
    projectId: REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
    appId: REACT_APP_APP_ID
  };

  firebase.initializeApp(firebaseConfig)

// What fields does the user have?

async function register (email, password, firstName, lastName, role) {
    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(
            email, 
            password
            )

            const id = userCredential.user.uid
    // After registration what do we have to do ? -> Add to users
       await firebase.database().ref(`/users/${id}`).set({
           email,
           firstName,
           lastName,
           role,
       })     
      
    //    debugger //stops 

    // What type of user do we create? What is its role?

    //If student?
    if (role === "STUDENT") {
        await firebase.database().ref(`/students/${id}`).set({
          classId: "",
          avatarUrl: ""
        })
      }
    //If teacher?
    if (role === "TEACHER") {
        await firebase.database().ref('/teachers').push({
         skills: [],
         class: [],
         id: id   
        })
    }

    } catch (error){
        // handle firebase error
    }
    
   
}

register("student@example.com", "abc123", "John", "Doe", "STUDENT")