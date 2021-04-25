document.getElementById("AddDet").onclick=AddDetails;
document.getElementById("AddEngOdd").onclick=AddEngagementOdd;
document.getElementById("AddEngEven").onclick=AddEngagementEven;
document.getElementById("AddIno").onclick=AddInnovation;
document.getElementById("AddExp").onclick=AddLabExp;
document.getElementById("AddLab").onclick=AddLabExp;
document.getElementById("AddInsT").onclick=AddInsTask;
document.getElementById("AddSuper").onclick=AddProjectThesis;
document.getElementById("AddPSpr").onclick=AddPhdSupervision;
document.getElementById("AddJou").onclick=AddJournalPaper;
document.getElementById("AddBook").onclick=AddBook;
document.getElementById("AddTechRep").onclick=AddTechReport;
document.getElementById("AddRerPro").onclick=AddSponsoredProject;
document.getElementById("AddConPro").onclick=AddConsultancyProject;
document.getElementById("AddPatent").onclick=AddPatent;
document.getElementById("AddLec").onclick=AddContinuingEdu;
document.getElementById("AddCourse").onclick=AddCourseConf;
document.getElementById("AddPart").onclick=AddParticipation;
document.getElementById("AddVisit").onclick=AddVisit;
document.getElementById("AddExtTask").onclick=AddExtensionTasks;
document.getElementById("AdddeptRes").onclick=AddDepartmentResp;
document.getElementById("AddInsRes").onclick=AddInstituteResp;
document.getElementById("AddOthAss").onclick=AddOtherAssignments;
document.getElementById("AddOthWork").onclick=AddOtherWork;



function AddDetails(){
var tab1Ref = document.getElementById("Table1").getElementsByTagName("tbody")[0];
var row = tab1Ref.insertRow(-1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
cell1.innerHTML = document.getElementById("firstName").value;
cell2.innerHTML = document.getElementById("designation").value;
cell3.innerHTML = document.getElementById("dept").value;
}
function AddEngagementOdd(){
var tab2Ref = document.getElementById("Table2").getElementsByTagName("tbody")[0];
var row = tab2Ref.insertRow(-1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);
var cell8 = row.insertCell(7);
var cell9 = row.insertCell(8);
var cell10 = row.insertCell(9);
cell1.innerHTML = document.getElementById("degree").value;
cell2.innerHTML = document.getElementById("courses").value;
cell3.innerHTML = document.getElementById("typeofCourse").value;
cell4.innerHTML = document.getElementById("students").value;
cell5.innerHTML = document.getElementById("Lecture").value;
cell6.innerHTML = document.getElementById("Tutorial").value;
cell7.innerHTML = document.getElementById("Practical").value;
cell8.innerHTML = document.getElementById("perShare").value;
cell9.innerHTML = document.getElementById("years").value;
cell10.innerHTML = document.getElementById("feedback").value;
}

function AddEngagementEven(){
  var tab3Ref = document.getElementById("Table3").getElementsByTagName("tbody")[0];
  var row = tab3Ref.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);
  var cell10 = row.insertCell(9);
  cell1.innerHTML = document.getElementById("degree").value;
  cell2.innerHTML = document.getElementById("courses").value;
  cell3.innerHTML = document.getElementById("typeofCourse").value;
  cell4.innerHTML = document.getElementById("students").value;
  cell5.innerHTML = document.getElementById("Lecture").value;
  cell6.innerHTML = document.getElementById("Tutorial").value;
  cell7.innerHTML = document.getElementById("Practical").value;
  cell8.innerHTML = document.getElementById("perShare").value;
  cell9.innerHTML = document.getElementById("years").value;
  cell10.innerHTML = document.getElementById("feedback").value;
  }

  function AddInnovation(){
    var data=document.getElementById('inno').value;
    if(data==""){
      alert("First Enter a Valid Entry");
    }
    else{
    var li=document.createElement('li');
    li.className='list-group-item list-group-item-action listlen';
    li.appendChild(document.createTextNode(data));
    var link=document.createElement('a');
    link.className='delete';
    link.innerHTML='<i class="fa fa-remove"></i>';
    li.appendChild(link);
    document.querySelector('ul.list1').appendChild(li);
    }
  }
  function AddLabExp(){
    var data=document.getElementById('labexp').value;
    if(data==""){
      alert("First Enter a valid entry");
    }
    else{
    var li=document.createElement('li');
    li.className='list-group-item list-group-item-action listlen';
    li.appendChild(document.createTextNode(data));
    var link=document.createElement('a');
    link.className='delete';
    link.innerHTML='<i class="fa fa-remove"></i>';
    li.appendChild(link);
    document.querySelector('ul.list2').appendChild(li);
    }
  }
  function AddInsTask(){
    var data=document.getElementById('insTask').value;
    if(data==""){
      alert("First Enter a valid entry");
    }
    else{
    var li=document.createElement('li');
    li.className='list-group-item list-group-item-action listlen';
    li.appendChild(document.createTextNode(data));
    var link=document.createElement('a');
    link.className='delete';
    link.innerHTML='<i class="fa fa-remove"></i>';
    li.appendChild(link);
    document.querySelector('ul.list3').appendChild(li);
    }
  }

  function AddProjectThesis(){
    var table = document.getElementById("Table4");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = document.querySelector("#project").value;
    cell2.innerHTML = document.querySelector("#Title").value;
    cell3.innerHTML = document.querySelector("#groups").value;
    cell4.innerHTML = document.querySelector("#stds").value;
    cell5.innerHTML = document.querySelector("#spvrs").value;
  }
  function AddPhdSupervision() {
    var table = document.getElementById("Table5");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = document.querySelector("#nameofSt").value;
    cell2.innerHTML = document.querySelector("#regYear").value;
    cell3.innerHTML = document.querySelector("#areaofRes").value;
    cell4.innerHTML = document.querySelector("#otherSpr").value;
    cell5.innerHTML = document.querySelector("#pub").value;
    cell6.innerHTML = document.querySelector("#status").value;
  }
  function AddJournalPaper() {
    var table = document.getElementById("Table6");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = document.querySelector("#det").value;
    cell2.innerHTML = document.querySelector("#index").value;
    cell3.innerHTML = document.querySelector("#co-auth").value;
  }

  function AddConferencePaper() {
    var table = document.getElementById("mytable7");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell10.innerHTML = document.querySelector("#det1").value;
    cell2.innerHTML = document.querySelector("#index1").value;
    cell3.innerHTML = document.querySelector("#co-auth1").value;
  }
  function AddBook() {
    var table = document.getElementById("Table7");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = document.querySelector("#auth").value;
    cell2.innerHTML = document.querySelector("#title1").value;
    cell3.innerHTML = document.querySelector("#vol").value;
    cell4.innerHTML = document.querySelector("#edit").value;
  }

  function AddTechReport() {
    var table = document.getElementById("Table8");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = document.querySelector("#title2").value;
    cell2.innerHTML = document.querySelector("#prt").value;
    cell3.innerHTML = document.querySelector("#auth2").value;
    cell4.innerHTML = document.querySelector("#remarks").value;
  }
  function AddSponsoredProject(){
    var table = document.getElementById("Table9");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = document.querySelector("#titleproject").value;
    cell2.innerHTML = document.querySelector("#fundagency").value;
    cell3.innerHTML = document.querySelector("#finoutlay").value;
    cell4.innerHTML = document.querySelector("#startyear").value; 
    cell5.innerHTML = document.querySelector("#pi_name").value;
    cell6.innerHTML = document.querySelector("#statproject").value;

  }
  function AddConsultancyProject(){
    var table = document.getElementById("Table10");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = document.querySelector("#titleproject1").value;
    cell2.innerHTML = document.querySelector("#fundagency1").value;
    cell3.innerHTML = document.querySelector("#finoutlay1").value;
    cell4.innerHTML = document.querySelector("#startyear1").value; 
    cell5.innerHTML = document.querySelector("#pi_name1").value;
    cell6.innerHTML = document.querySelector("#statproject1").value;
  }
  function AddPatent(){
    var table = document.getElementById("Table11");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = document.querySelector("#patents").value;
    cell2.innerHTML = document.querySelector("#grpMem").value;
  }
  function AddContinuingEdu(){
    var table = document.getElementById("Table12");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = document.querySelector("#titlelec").value;
    cell2.innerHTML = document.querySelector("#dplace").value;
    cell3.innerHTML = document.querySelector("#info").value;
  }
  function AddCourseConf() {
    var table = document.getElementById("Table13");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = document.querySelector("#conf1").value;
    cell2.innerHTML = document.querySelector("#sponser").value;
    cell3.innerHTML = document.querySelector("#date2").value;
  }
  function AddParticipation() {
    var table = document.getElementById("Table14");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = document.querySelector("#conf1a").value;
    cell2.innerHTML = document.querySelector("#sponser1").value;
    cell3.innerHTML = document.querySelector("#date3").value;
  }
  function AddVisit() {
    var table = document.getElementById("Table15");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = document.querySelector("#inst1").value;
    cell2.innerHTML = document.querySelector("#visit").value;
    cell3.innerHTML = document.querySelector("#date4").value;
  }
  function AddExtensionTasks(){
    var data=document.getElementById('extent').value;
    if(data==""){
      alert("First Enter a Valid Entry");
    }
    else{
    var li=document.createElement('li');
    li.className='list-group-item list-group-item-action listlen';
    li.appendChild(document.createTextNode(data));
    var link=document.createElement('a');
    link.className='delete';
    link.innerHTML='<i class="fa fa-remove"></i>';
    li.appendChild(link);
    document.querySelector('ul.list4').appendChild(li);
    }
  }
  function AddDepartmentResp(){
    var data=document.getElementById('deptr').value;
    if(data==""){
      alert("First Enter a Valid Entry");
    }
    else{
    var li=document.createElement('li');
    li.className='list-group-item list-group-item-action listlen';
    li.appendChild(document.createTextNode(data));
    var link=document.createElement('a');
    link.className='delete';
    link.innerHTML='<i class="fa fa-remove"></i>';
    li.appendChild(link);
    document.querySelector('ul.list5').appendChild(li);
    }
  }
  function AddInstituteResp(){
    var data=document.getElementById('insr').value;
    if(data==""){
      alert("First Enter a Valid Entry");
    }
    else{
    var li=document.createElement('li');
    li.className='list-group-item list-group-item-action listlen';
    li.appendChild(document.createTextNode(data));
    var link=document.createElement('a');
    link.className='delete';
    link.innerHTML='<i class="fa fa-remove"></i>';
    li.appendChild(link);
    document.querySelector('ul.list6').appendChild(li);
    }
  }
  function AddOtherAssignments(){
    var data=document.getElementById('othAss').value;
    if(data==""){
      alert("First Enter a Valid Entry");
    }
    else{
    var li=document.createElement('li');
    li.className='list-group-item list-group-item-action listlen';
    li.appendChild(document.createTextNode(data));
    var link=document.createElement('a');
    link.className='delete';
    link.innerHTML='<i class="fa fa-remove"></i>';
    li.appendChild(link);
    document.querySelector('ul.list7').appendChild(li);
    }
  }
  function AddOtherWork(){
    var data=document.getElementById('othWork').value;
    if(data==""){
      alert("First Enter a Valid Entry");
    }
    else{
    var li=document.createElement('li');
    li.className='list-group-item list-group-item-action listlen';
    li.appendChild(document.createTextNode(data));
    var link=document.createElement('a');
    link.className='delete';
    link.innerHTML='<i class="fa fa-remove"></i>';
    li.appendChild(link);
    document.querySelector('ul.list8').appendChild(li);
    }
  }

/*For deleting items in the list */
var list2=document.querySelector('.list2');
var list1=document.querySelector('.list1');
var list3=document.querySelector('.list3');
var list4=document.querySelector('.list4');
var list5=document.querySelector('.list5');
var list6=document.querySelector('.list6');
var list7=document.querySelector('.list7');
var list8=document.querySelector('.list8');
list1.addEventListener('click',deleteItem);
list2.addEventListener('click',deleteItem);
list3.addEventListener('click',deleteItem);
list4.addEventListener('click',deleteItem);
list5.addEventListener('click',deleteItem);
list6.addEventListener('click',deleteItem);
list7.addEventListener('click',deleteItem);
list8.addEventListener('click',deleteItem);
  function deleteItem(e){
    if(e.target.parentElement.classList.contains('delete')){
      console.log(e.target.parentElement.parentElement.parentElement.id);
      e.target.parentElement.parentElement.remove();
      }
    }

/*********************************/ 


