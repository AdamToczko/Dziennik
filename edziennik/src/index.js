import "./services/firebaseSetup"
import { register, login } from "./services/AuthService"
import { fetchSkills, addSkill } from "./services/SkillService"
import * as ClassService from "./services/ClassService"

// register("student10@example.com", "abc123", "Tom", "Lorens", "STUDENT")

// fetchSkills()
login("student10@example.com", "abc123")
<<<<<<< HEAD
addSkill('JS')
=======
// addSkill('JS')
// ClassService.addClass("JFDD13")
ClassService.addTeacherToClass("", "-Lv5fUxFOPEJWFE4sSrK")
>>>>>>> 6c83aa503a5b674d87643387975fe6fa34058b47
