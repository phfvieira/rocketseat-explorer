const students = [
  {
    name: "Pablo Henrique",
    gradeP1: 10,
    gradeP2: 8,
  },
  {
    name: "Luiz",
    gradeP1: 2,
    gradeP2: 8,
  },
  {
    name: "Alexandra",
    gradeP1: 3,
    gradeP2: 5,
  },
  {
    name: "Carlos",
    gradeP1: 7,
    gradeP2: 7,
  },
]
for (let student of students) {
  let message = averageGrade(student)
  alert(message)
}



function averageGrade(student) {
  let average = (student.gradeP1 + student.gradeP2) / 2
  console.log(average)
  if (average < 7) return `${student.name} reprovou`
  else return `${student.name} você foi aprovado`
}