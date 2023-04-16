let button=document.querySelector("button");

let Display=document.querySelector("h3");
button.addEventListener('click',()=>{
    let input=document.querySelector("input").value;
    let current_date=new Date();
    let year=current_date.getFullYear();
    let date=current_date.getDate();
    let month=current_date.getMonth();
    let Birth=new Date(input);
    let DOB=Birth.getDate();
    let YOB=Birth.getFullYear();
    let MOB=Birth.getMonth();
    if(input=="")
    {
      alert("Enter date of birth");
    }
    else{
    if((year-YOB)==1)
    {
      Display.innerText="You are "+(year-YOB)+" year old";
    }
    else if((year-YOB)==0)
    {
      if((month-MOB)>0){
        Display.innerText="You are "+(month-MOB)+" months old";
      }
      if((month-MOB)==1){
        Display.innerText="You are "+(month-MOB)+" month old";
      }
      else if((month-MOB)==0){
        if((date-DOB)>0)
        {
          Display.innerText="You are "+(date-DOB)+" days old";
        }
        else if((date-DOB)==1)
        {
          Display.innerText="You are "+(date-DOB)+" day old";
        }
        else if((date-DOB)==0)
        {
          Display.innerText="Today you born!! Congratulations..";
        }
        else{
          Display.innerText="Enter valid date of Birth";
        }
      }
      else{
        Display.innerText="Enter valid date of Birth";
      }
    }
    else if((year-YOB)<0)
    {
      Display.innerText="Enter valid date of Birth";
    }
    else
    Display.innerText="You are "+(year-YOB)+" years old";
  }
    Display.style.opacity="1.0";
});