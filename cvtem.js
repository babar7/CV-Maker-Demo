const userObj = JSON.parse(localStorage.getItem('userData'));

console.log("userObj", userObj);

document.getElementById("fullName").innerHTML = userObj.name;
document.getElementById("cnumber").innerHTML = userObj.contactNumber;
document.getElementById("email").innerHTML = userObj.email;
document.getElementById("address").innerHTML = userObj.address;
document.getElementById("cnicNumber").innerHTML = userObj.cnicNumber;
document.getElementById("carrerObjective").innerHTML = userObj.careerObjective;

document.getElementById("ps1").innerHTML = userObj.ps1;
document.getElementById("ps2").innerHTML = userObj.ps2;
document.getElementById("ps3").innerHTML = userObj.ps3;

document.getElementById("tst1").innerHTML = userObj.tst1;
document.getElementById("tsd1").innerHTML = userObj.tsd1;
document.getElementById("tst2").innerHTML = userObj.tst2;
document.getElementById("tsd2").innerHTML = userObj.tsd2;
document.getElementById("tst3").innerHTML = userObj.tst3;
document.getElementById("tsd3").innerHTML = userObj.tsd3;

document.getElementById("dg1").innerHTML = userObj.dg1;
document.getElementById("ds1").innerHTML = userObj.ds1;
document.getElementById("in1").innerHTML = userObj.in1;
document.getElementById("yr1").innerHTML = userObj.yr1;
document.getElementById("dg2").innerHTML = userObj.dg2;
document.getElementById("ds2").innerHTML = userObj.ds2;
document.getElementById("in2").innerHTML = userObj.in2;
document.getElementById("yr2").innerHTML = userObj.yr2;
document.getElementById("dg3").innerHTML = userObj.dg3;
document.getElementById("ds3").innerHTML = userObj.ds3;
document.getElementById("in3").innerHTML = userObj.in3;
document.getElementById("yr3").innerHTML = userObj.yr3;


