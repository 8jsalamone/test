function collegeapplication(act,stink){
  if (act > 36 ){
    console.log("How in the world? Are you sure you took the ACT?")
  }

  else if (act >= 31 && act <=36 && !stink) {
    console.log("Welcome to Northwestern!")
  }
  else if (act < 31 || stink){
    console.log("Sorry bud, try DePaul")
}
  }
  collegeapplication(31,false)
