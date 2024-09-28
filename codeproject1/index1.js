function studentgrade(marks) {
if (marks > 79) {    
    return "A";      //    for marks greater than 79
}
else if (marks >= 60 &&  marks <= 79) {
    return "B";     // for marks between 60 to 79
}
else if (marks >=50 && marks <= 59){
    return "C";     //    for marks between 49 to 59
}
else if (marks >=40 && marks <= 49){
    return "D";    //  for marks between 40 to 49
}
else
    return 'E';   //    for marks less than 40
}