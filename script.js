showtask();
let addtaskinput=document.getElementById("input");
let addtaskbtn= document.getElementById("task");
addtaskbtn.addEventListener("click" ,function(){

    addtaskinputval=addtaskinput.value ;
    console.log(addtaskinputval);
  let webtask=localStorage.getItem("localtask");
  if(webtask==null)
  {
      taskObj=[];

  }
  else
  {
      taskObj=JSON.parse(webtask);
  }
  taskObj.push(addtaskinputval);
  localStorage.setItem("localtask",JSON.stringify(taskObj));
  showtask();

})


function showtask()
{
    let webtask=localStorage.getItem("localtask");
    if(webtask==null)
    {
        taskObj=[];
  
    }
    else
    {
        taskObj=JSON.parse(webtask);
    }
    let html="";
    let addtasklist=document.getElementById("addedtasklist");
    taskObj.forEach((item,index) => {
        html+= `<tr>
        <th scope="col">${index+1}</th>
        <th scope="col">${item}</th>
       
        <th scope="col"> <button  onclick="del(${index})">Delete</button></th>
      </tr>`;
        
    });
    addtasklist.innerHTML=html;


}

function del(index)
{
    let webtask=localStorage.getItem("localtask");
    let taskObj=JSON.parse(webtask);
    taskObj.splice(index,1);
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    showtask();
}