import firebase from "./firebaseSetup"

export async function addSkill (newSkill) {
  // fetch skills
  const skills = await fetchSkills()

  const lowerCaseSkills = skills.map(skill => skill.toLowerCase())
  const lowerCaseNewSkill = newSkill.toLowerCase()

  const alreadyExists = lowerCaseSkills.includes(lowerCaseNewSkill)
  if (alreadyExists) {
    return
  } else {
    const newSkills = [...skills, newSkill]
    firebase.database().ref('/skills').set(newSkills)
  }
}

function removeSkill () {

}

export async function fetchSkills () {
  const dataSnapshot = await firebase.database().ref('/skills').once('value')
  const skills = dataSnapshot.val()

  return skills
}