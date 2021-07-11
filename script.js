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
  let sum =  allStudentMarks.reduce((prev, curr) => prev += curr);

  return Number((sum / allStudentMarks.length).toFixed(2));
}

console.log("Average mark: ", getAverageMark(students[0]));

//(3 function) students info
const getStudentInfo = (students) => {
  return students.map((student) => {
    return {
      course: student.course,
      name: student.name,
      averageMark: getAverageMark(student)
    };
  });
}
console.log("Students info ", getStudentInfo(students));

//(4 function) students names
const getStudentsName = (student) => {
  return student.map(item => item.name).map(letter => letter[0].toUpperCase() + letter.slice(1)).sort();
}

console.log("Students names ", getStudentsName(students));

//(5 function) best student
const getBestStudent = (students) => {
  let maxMark = 0;
  let nameOfTheBestStudent;

  students.forEach((student) => {
    let averangeMark = getAverageMark(student)
    if (averangeMark > maxMark) {
      maxMark = averangeMark
      nameOfTheBestStudent = student.name
    }
  })

  return nameOfTheBestStudent;
}

console.log("Best of the best student: ", getBestStudent(students));

//(6 function) calculate word
const calculateWordLetters = (string) => {
  let newObject = {};
  const letters = string.split("");

  letters.forEach((letter) => {
    newObject[letter] = letters.filter((element) => element === letter).length;
  })

  return newObject;
}

console.log("Calculate letters in word", calculateWordLetters("javascriptsostrong"))