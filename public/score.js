/******************SECTION 1 (INSTRUCTIONAL ELEMENT)*****************************/
let scoreInstructional=0;
let lecure,tutorial,practical,tes=0,its=0,labexp=0,ins=0;
let numBt,numMt,btsc=0,mtsc=0,phdsc=0;
document.getElementById("AddEngOdd").addEventListener('click',teachingEngagementScore);
document.getElementById("AddEngEven").addEventListener('click',teachingEngagementScore);
document.getElementById("AddIno").addEventListener('click',InnovativeTeachingScore);
document.getElementById("AddLab").addEventListener('click',NewLabExpScore);
document.getElementById("AddExp").addEventListener('click',NewLabExpScore);
document.getElementById("AddInsT").addEventListener('click',InsTaskScore);
document.getElementById("AddSuper").addEventListener('click',AddProjectSupervision);
document.getElementById("AddPSpr").addEventListener('click',AddPHDSupervision);
function teachingEngagementScore(){
  lecture=document.getElementById("Lecture").value;
  tutorial=document.getElementById("Tutorial").value;
  practical=document.getElementById("Practical").value;
  if(lecture==""){lecture=0;}
  else if(tutorial==""){tutorial=0;}
  else if(practical==""){practical=0;}
  tes=tes+(lecture*1)+(tutorial*1)+(practical*0.5);
  if(tes>=14){tes=14;}
  console.log(tes);
}
function InnovativeTeachingScore(){
  its=its+1;
  if(its>2){its=2;}
  console.log(its);
}
function NewLabExpScore(){
if(this.id=="AddLab"){
    labexp=labexp+2;
  }
  if(this.id=="AddExp"){
    labexp=labexp+1;
  }
  console.log(labexp);
}
function InsTaskScore(){
ins=ins+1;
if(ins>2){ins=2;}
console.log(ins);
}
function AddProjectSupervision(){
  if(document.getElementById("project").value=="BTECH"){
    numBt=document.getElementById("groups").value;
    btsc=btsc+numBt*2;
    if(btsc>4){btsc=4;}
  }
  if(document.getElementById("project").value=="MTECH"){
    numMt=document.getElementById("groups").value;
    mtsc=mtsc+numMt*2;
    if(mtsc>4){mtsc=4;}
  }
  console.log(btsc+mtsc);
}
function AddPHDSupervision(){
  if(document.getElementById("status").value=="Awarded"){
    phdsc=phdsc+4;
  }
  else{
    var d=new Date();
    var currYear=d.getFullYear();
    var regYear=document.getElementById("regYear").value;
    var numY=currYear-regYear;
    if(numY<=3){
      phdsc=phdsc+2;
    }
    else if(numY>3 && numY<=5){
      phdsc=phdsc+1;
    }
  }
  console.log(phdsc);
}
scoreInstructional=tes+its+ins+btsc+mtsc+phdsc;
console.log(scoreInstructional);
/*******************************************************************/
/**************************SECTION 2********************************/
let sec2=0,rps=0,cps=0,auth=0,ed=0,ts=0;
document.getElementById("AddJou").addEventListener('click',refPaperScore);
document.getElementById("AddCon").addEventListener('click',conPaperScore);
document.getElementById("AddBook").addEventListener('click',authEdScore);
document.getElementById("AddTechRep").addEventListener('click',techScore);
function refPaperScore(){
  let pu=document.getElementById("paUp").value;
  if(pu=="paid"){rps=rps+0;}
  else{
    let opt=document.getElementById("index").value;
    if(opt=="SCIacc"){rps=rps+1;}
    else if(opt=="SCIpub"){rps=rps+2;}
    else{
      rps=rps+1;
    }
  }
}
function conPaperScore(){
  let opt=document.getElementById("index1").value;
  if(opt=="SCOPUS"){cps=sps+1;}
  else{cps=sps+0.5;}
}
function authEdScore(){
  let opt=document.getElementById("edit").value;
  if(opt=="authored"){auth=auth+2;
  if(auth>2){auth=2;}
  }
  else if(opt=="Edited"){
    ed=ed+1;
    if(ed>2){ed=2;}
  }

}
function techScore(){
  ts=ts+1;
  if(ts>2){ts=2;}
}
/*****************************************************************/
/***********************SECTION 3*********************************/
let sec3=0,sps=0,cpas=0,ps=0,ceds=0;
document.getElementById("AddRerPro").addEventListener('click',SponReaScore);
document.getElementById("AddConPro").addEventListener('click',ConProScore);
document.getElementById("AddPatent").addEventListener('click',patentScore);
document.getElementById("AddLec").addEventListener('click',contEduScore);
function SponReaScore(){
  let FinOu=document.getElementById("finoutlay").value;
  if(FinOu>=5,00,000){
    sps=sps+2;
  }
  else{
    sps=sps+0.5;
  }
}
function ConProScore(){
  let finout=document.getElementById("finoutlay1").value;
  cps=cps+(finout/50,000);
}
function patentScore(){
  let opt=document.getElementById("awafi").value;
  if(opt=="Awarded"){ps=ps+5;}
  else{
    ps=ps+2;
  }
}
function contEduScore(){
ceds=cdes+1;
if(ceds>2){ceds=2;}
}

/*******************************************************************/
/************************SECTION 4*********************************/
let sec4=0,coorgSc=0,partOut=0,partIn=0,visSc=0,exsc=0;
document.getElementById("AddCourse").addEventListener('click',CourseOrgScore);
document.getElementById("AddPart").addEventListener('click',PartCouScore);
document.getElementById("AddVisit").addEventListener('click',VisitScore);
document.getElementById("AddExtTask").addEventListener('click',OtherExScore);
function CourseOrgScore(){
  let typeofConf=document.getElementById("conftype").value;
  if(typeofConf=="international" || typeofConf=="stcmdp"){
    coorgSc=coorgSc+2;
  }
  else{
    coorgSc=coorgSc+1;
  }
  console.log(coorgSc);
}
function PartCouScore(){
  let typeofConf=document.getElementById("typeconf1a").value;
  if(typeofConf=="Outside"){
    partOut=part+2;
    if(partOut>2){partOut=2;}
  }
  else{
    partIn=partIn+1;
    if(partIn>1){partIn=1;}
  }
  console.log(partIn+partOut);
}
function VisitScore(){
visSc=visSc+1;
if(visSc>2){visSc=2;}
console.log(visSc);
}
function OtherExScore(){
  exsc=exsc+1;
  if(exsc>5){exsc=5;}
  console.log(exsc);
}
sec4=coorgSc+partIn+partOut+visSc+exsc;

/****************************************************************/
/**************************SECTION 5****************************/
let sec5=0,deptRes=0,insRes=0,othAss=0;
document.getElementById("AdddeptRes").addEventListener('click',DeptResScore);
document.getElementById("AddInsRes").addEventListener('click',InsTaskScore);
document.getElementById("AddOthAss").addEventListener('click',OthAssScore);
function DeptResScore(){
deptRes=deptRes+1;
if(deptRes>2){deptRes=2;}
}
function InsTaskScore(){
  var res=document.getElementById("insr").value;
  if(res=="Dean" || res=="HOD" || res=="Associate Dean"||res=="Chief Warden"||res=="Deputy Chief Warden"||res=="TEQIP Coordinator"){
    insRes=insRes+5;
  }
  else{
    insRes=insRes+1;
  }
  if(insRes>5){insRes=5;}
}
function OthAssScore(){
  othAss=othAss+1;
  if(othAss>2){othAss=2;}
}
/****************************************************************/

/***********************SECTION 6 (OTHER WORKS)***************/
let scoreOth=0;
document.getElementById("AddOthWork").addEventListener('click',AddOtherWork);
function AddOtherWork(){
scoreOth=scoreOth+1;
if(scoreOth>2){scoreOth=2;}
console.log(scoreOth);
}
/**************************************************************/

/*******************Result***********************************/
document.getElementById("result").addEventListener('click',showResult);
function showResult(){
scoreInstructional=tes+its+ins+btsc+mtsc+phdsc;
sec2=rps+cps+auth+ed+ts;
sec3=sps+cpas+ps+ceds;
sec4=coorgSc+partOut+partIn+visSc+exsc;
sec5=deptRes+insRes+othAss;
let grandt=scoreInstructional+sec2+sec3+sec4+sec5+scoreOth;
document.getElementById("gt").value=grandt;

var tabRes = document.getElementById("ResultTable").getElementsByTagName("tbody")[0];
var row1 = tabRes.insertRow(0);
var row2 = tabRes.insertRow(1);
var row3 = tabRes.insertRow(2);
var row4 = tabRes.insertRow(3);
var row5 = tabRes.insertRow(4);
var row6 = tabRes.insertRow(5);
var row7 = tabRes.insertRow(6);

var cell11 = row1.insertCell(0);
var cell12 = row1.insertCell(1);
var cell13 = row1.insertCell(2);
var cell14 = row1.insertCell(3);
var cell21 = row2.insertCell(0);
var cell22 = row2.insertCell(1);
var cell23 = row2.insertCell(2);
var cell24 = row2.insertCell(3);
var cell31 = row3.insertCell(0);
var cell32 = row3.insertCell(1);
var cell33 = row3.insertCell(2);
var cell34 = row3.insertCell(3);
var cell41 = row4.insertCell(0);
var cell42 = row4.insertCell(1);
var cell43 = row4.insertCell(2);
var cell44 = row4.insertCell(3);
var cell51 = row5.insertCell(0);
var cell52 = row5.insertCell(1);
var cell53 = row5.insertCell(2);
var cell54 = row5.insertCell(3);
var cell61 = row6.insertCell(0);
var cell62 = row6.insertCell(1);
var cell63 = row6.insertCell(2);
var cell64 = row6.insertCell(3);
var cell71 = row7.insertCell(0);
var cell72 = row7.insertCell(1);
var cell73 = row7.insertCell(2);
var cell74 = row7.insertCell(3);

cell11.innerHTML = "1";
cell12.innerHTML = "Instructional Element";
cell13.innerHTML = "30";
cell14.innerHTML = scoreInstructional;

cell21.innerHTML = "2";
cell22.innerHTML = "Research Papers / Publications";
cell23.innerHTML = "30";
cell24.innerHTML = sec2

cell31.innerHTML = "3";
cell32.innerHTML = "Sponsored R&D Consultancy and Extension Elements";
cell33.innerHTML = "16";
cell34.innerHTML = sec3;

cell41.innerHTML = "4";
cell42.innerHTML = "Organization/Participation of Courses/Conferences/Seminar/Workshop and Other Extension works";
cell43.innerHTML = "13";
cell44.innerHTML = sec4;

cell51.innerHTML = "5";
cell52.innerHTML = "Management and Institutional Development Elements";
cell53.innerHTML = "9";
cell54.innerHTML = sec5;

cell61.innerHTML = "6";
cell62.innerHTML = "Other Works";
cell63.innerHTML = "2";
cell64.innerHTML = scoreOth;

cell71.innerHTML = "7";
cell72.innerHTML = "Grand Total";
cell73.innerHTML = "100";
cell74.innerHTML = grandt;
}
/****************************************************************/
/***********LISTS**************************** */

