function Grade(Note) {
    if (Note >= 90) {
        return 'A';
    } else if (Note >= 80) {
        return 'B';
    } else if (Note >= 70) {
        return 'C';
    } else if (Note >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

const scoreOfStudents = 91;
console.log(`Score: ${scoreOfStudents}, Grade: ${Grade(scoreOfStudents)}`);

// Aufgabe 2 

let dayOfWeek = 6; 

switch (dayOfWeek) {
    case 1:
        console.log("Понедельник");
        break;
    case 2:
        console.log("Вторник");
        break;
    case 3:
        console.log("Среда");
        break;
    case 4:
        console.log("Четверг");
        break;
    case 5:
        console.log("Пятница");
        break;
    case 6:
        console.log("Суббота");
        break;
    case 7:
        console.log("Воскресенье");
        break;
    default:
        console.log("Значение принимается только от 1 до 7");
        break;
}

