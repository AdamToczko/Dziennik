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

         // zatrzymuje wykonyywanie haslo

    // After registration what do we have to do ? -> Add to users



    // What type of user do we create? What is its role?

    //If student?

    //If teacher?

    // If admin?
    } catch (error){
        // handle firebase error
    }
    
    debugger 
}

register("demo24@example.com", "abc123")