import "./services/firebaseSetup"

import { register, login } from "./services/AuthService"
import { fetchSkills, addSkill } from "./services/SkillService"

// register("student10@example.com", "abc123", "Tom", "Lorens", "STUDENT")
login("student10@example.com", "abc123")
addSkill('JS')