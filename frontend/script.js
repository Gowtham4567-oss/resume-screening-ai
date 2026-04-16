async function uploadResume(){
    document.getElementById("result").innerHTML="Resume analyzed successfully";
}

async function sendMessage(){
    let input=document.getElementById("chatInput").value;
    document.getElementById("chatBox").innerHTML += "<p><b>You:</b> "+input+"</p>";
    document.getElementById("chatInput").value="";
}
