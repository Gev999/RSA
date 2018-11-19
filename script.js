var p, n, q, fi, e, d, E; 
var public=[], private =[];
document.getElementById('RSA').onclick = RSE_event;
document.getElementById('encryption').onclick = encryptData;
document.getElementById('decryption').onclick = decryptData;

function RSE_event() {
	var errorMessage = "";
	if (document.getElementById("numberP").value === ""){
	errorMessage+='Enter p\n';
	} 
    else {
        p = parseInt(document.getElementById("numberP").value);
        if (!isSimple(p)) {
            errorMessage+='p must be simple\n';
        }
    }
    if (document.getElementById("numberQ").value === ""){
        errorMessage+='Enter q\n';
    }
    else {
        q = parseInt(document.getElementById("numberQ").value);
        if (!isSimple(q)) {
            errorMessage+='q must be simple\n';
        }
    } 
    if (errorMessage !== "") {
        alert(errorMessage);
        return 0;
    }
    n = p * q;
    fi = (p-1)*(q-1);
    e = getSimpleNumber(fi); 
    public = [e, n];
    d = getNumberD(fi, e);
    private = [d, n];
 
    document.getElementById('n').value = n;
    document.getElementById('e').value = e;
    document.getElementById('fi').value = fi;
    document.getElementById('d').value = d;
    document.getElementsByClassName('public')[0].value = e;
    document.getElementsByClassName('public')[1].value = n;
    document.getElementsByClassName('private')[0].value = d;
    document.getElementsByClassName('private')[1].value = n;
}

//??
function decryptData() {
    //document.getElementById('Decrypt').value = Math.pow(E, private[0])%private[1];
}

//??
function encryptData() {
    if (document.getElementById('data').value == "") {
        alert("Enter data");
        return 0;
    }
    else {
        var data = parseInt(document.getElementById('data').value);
        if (data > public[1]) {
            alert("data must be < n !!");
            return 0;
        }
    }
    E = Math.pow(data, public[0])%public[1];
    document.getElementById('Encrypt').value = E;
}

//??
function getNumberD(fi, e) {
    return 5;
}

function getSimpleNumber(start_fi) {
    let array = [];
    for (let num = start_fi- 1, i = 0; num > 0; num--) {
        if (isSimple(num))  { 
            array[i++] = num;  
        }
    }
    return array[Math.floor(Math.random()*array.length)];
}

function isSimple(number) {
    if (number <= 2) return false;
    let x= 2;
    let y = Math.sqrt(number);
    while (x <= y) {
        if (number%x == 0)  return false;
        x++;
    }
    return true;
}
