function getGrade(grade : number) : string {
    if(grade >= 100){
        return `Your grade is ${grade} so U are good ;)`;
    } else {
      return 'Sorry bad grade';
    }
}
console.log(getGrade(101));
console.log(getGrade(89));