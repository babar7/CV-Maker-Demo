function gettingData(event){
  event.preventDefault();
  let name = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let contactNumber = document.getElementById("contactNumber").value;
  let address = document.getElementById("address").value;
  let cnicNumber = document.getElementById("cnicNumber").value;
  let birth_day = document.getElementById("birth_day").value;
  let birthMonth = document.getElementById("birthMonth").value;
  let birthYear = document.getElementById("birthYear").value;
  let careerObjective = document.getElementById("careerObjective").value;
  let dg1 = document.getElementById("dg1").value;
  let ds1 = document.getElementById("ds1").value;
  let in1 = document.getElementById("in1").value;
  let yr1 = document.getElementById("yr1").value;
  let dg2 = document.getElementById("dg2").value;
  let ds2 = document.getElementById("ds2").value;
  let in2 = document.getElementById("in2").value;
  let yr2 = document.getElementById("yr2").value;
  let dg3 = document.getElementById("dg3").value;
  let ds3 = document.getElementById("ds3").value;
  let in3 = document.getElementById("in3").value;
  let yr3 = document.getElementById("yr3").value;
  let tst1 = document.getElementById("tst1").value;
  let tsd1 = document.getElementById("tsd1").value;
  let tst2 = document.getElementById("tst2").value;
  let tsd2 = document.getElementById("tsd2").value;
  let tst3 = document.getElementById("tst3").value;
  let tsd3 = document.getElementById("tsd3").value;
  let ps1 = document.getElementById("ps1").value;
  let ps2 = document.getElementById("ps2").value;
  let ps3 = document.getElementById("ps3").value;

  let userDataObj = {
    name,
    email,
    contactNumber,
    address,
    cnicNumber,
    birth_day,
    birthMonth,
    birthYear,
    careerObjective,
    dg1,
    ds1,
    in1,
    yr1,
    dg2,
    ds2,
    in2,
    yr2,
    dg3,
    ds3,
    in3,
    yr3,
    tst1,
    tsd1,
    tst2,
    tsd2,
    tst3,
    tsd3,
    ps1,
    ps2,
    ps3,

  }
  console.log("userDaraObj", userDataObj);
  alert("Done");
  let jsnUserDataObj = JSON.stringify(userDataObj)
  localStorage.setItem("userData", jsnUserDataObj);
  console.log(jsnUserDataObj,"<<<<<<<=====");
  location = 'cvTemplet.html'


}


// function addDegrees(){
//     let acadmicFieldsDiv = document.getElementById("acadmicFields")
//     let fieldLength = document.getElementById("degreFields").value;
//     console.log("asdasdadada", fieldLength);
//     for(let i = 0 ; i < fieldLength ; i++){
//         let fieldDiv = document.createElement("DIV");
//         fieldDiv.classList.add("form-group", "col-md-2");
//         let fieldLabel = document.createElement("LABEL");
//         fieldLabel.for = "matriculation" ;
//         let fieldLabelText = document.createTextNode("Degree");
//         fieldLabel.appendChild(fieldLabelText);
//         let fieldInput = document.createElement("INPUT");
//         fieldInput.type = "text";
//         fieldInput.classList.add("form-control");
//         fieldInput.id = "degreeInput" + i ;
//         fieldInput.placeholder = "SSC or O levels"

//         fieldDiv.appendChild(fieldLabel);
//         fieldDiv.appendChild(fieldInput);
//         acadmicFieldsDiv.appendChild(fieldDiv);

//     }
// }
{/* <table class="table">
<thead class="thead-light">
  <tr>
    <th scope="col">#</th>
    <th scope="col">First</th>
    <th scope="col">Last</th>
    <th scope="col">Handle</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
  <tr>
    <th scope="row">2</th>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
  </tr>
  <tr>
    <th scope="row">3</th>
    <td>Larry</td>
    <td>the Bird</td>
    <td>@twitter</td>
  </tr>
</tbody>
</table> */}

{/* <div class="form-group col-md-1">
 <label for="matriculation">City</label>
 <input type="text" class="form-control" id="matriculation" placeholder="SSC">
</div> */}