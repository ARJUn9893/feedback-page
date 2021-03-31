function clear() {
    document.getElementById("form").reset();
}
function show() {
    var suggest = document.getElementById("feedback").value;
    var fname = document.getElementById("name").value;
    var lname = document.getElementById("last").value;
    var mname = document.getElementById("middle").value;
    var gen1 = document.getElementById("ml");
    var gen2 = document.getElementById("fl");

    if (suggest == "" || fname == "" || lname == "")
        alert("Please Fill all the details");
    else {
        var para = document.createElement("P");
        para.innerHTML = suggest;
        var user = document.createElement("h3");
        if (gen1.checked == true) {
            if (mname == "")
                user.innerHTML =  'Mr.' + fname + ' ' + lname ;
            else
                user.innerHTML =  'Mr.' + fname + ' ' + mname + ' ' + lname ;
        
        }
        else {
            if (mname == "")
                user.innerHTML = 'Ms/Mrs.' + fname + ' ' + lname ;
            else
                user.innerHTML = 'Ms/Mrs.' + fname + ' ' + mname + ' ' + lname ;
    
        }
        para.style.padding = "10px";
        user.style.textAlign = "center";
        document.getElementById("display").appendChild(para);
        document.getElementById("display").appendChild(user);
        user.style.padding = "0px 0px 30px 0px";
        clear();
    }
}