const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

// (1 function) get science
const getSubject = (student) => {
  return Object.keys(student.subjects).map(
      (letter) => letter[0].toUpperCase() + letter.slice(1).replace("_", " ")
  );
};

console.log("Students science: ", getSubject(students[0]).join(", "));

//(2 function) average mark
const getAverageMark = (student) => {
  const allStudentMarks = Object.values(student.subjects).flat();
  let sum = 0;

  allStudentMarks.forEach((mark) => sum += mark);

  return (sum / allStudentMarks.length).toFixed(2);
}

console.log("Average mark: ", getAverageMark(students[0]));

//(3 function) students info
const getStudentInfo = (students) => {
  return students.map((student) => {
    let studentData = {...student, averagemark: getAverageMark(student)}
    delete studentData.subjects;
    return studentData;
  })
}

console.log("Students info ", getStudentInfo(students));

