import "./services/firebaseSetup"
import { register, login } from "./services/AuthService"
import { fetchSkills, addSkill } from "./services/SkillService"
import * as ClassService from "./services/ClassService"

// register("student10@example.com", "abc123", "Tom", "Lorens", "STUDENT")

// fetchSkills()
login("student10@example.com", "abc123")
// addSkill('JS')
// ClassService.addClass("JFDD13")
// ClassService.addTeacherToClass("", "-Lv9zx_ucePnW0RCWMS3")
