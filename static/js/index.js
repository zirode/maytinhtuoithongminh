

function ageProcess() {
    var ageInput = document.getElementById("ageinput").value;

    if(ageInput==""){
        document.getElementById("age-result").innerHTML = '<div class="result result-danger">Khong duoc de rong</div>'
    }else if(ageInput<=0){
        document.getElementById("age-result").innerHTML = '<div class="result result-danger">May chua ra doi thi lam gi tao tinh?</div>'
    }else if(ageInput<=122){
        document.getElementById("age-result").innerHTML = '<div class="result result-success">Tuoi cua ban la: '+ ageInput+'</div>'
    } else {
        document.getElementById("age-result").innerHTML = '<div class="result result-danger">Lam deo gi co ai ' + ageInput + ' tuoi</div>';
    }
}
