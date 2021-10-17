function toggleAboutMe() {
    
    var text = document.getElementById("aboutMe");
    if (text.style.display === "none") {
        document.getElementById("test1").innerHTML = "v About Me";
        text.style.display = "block";
    } else {
        text.style.display = "none";
        document.getElementById("test1").innerHTML = "> About Me";
    }
}

function toggletest() {

    var text = document.getElementById("myProjects");
    if (text.style.display === "none") {
        document.getElementById("test2").innerHTML = "v My Projects";
        text.style.display = "block";
    } else {
        text.style.display = "none";
        document.getElementById("test2").innerHTML = "> My Projects";
    }
}

function toggleLinks() {

    var text = document.getElementById("Links");
    if (text.style.display === "none") {
        document.getElementById("test3").innerHTML = "v Links";
        text.style.display = "block";
    } else {
        text.style.display = "none";
        document.getElementById("test3").innerHTML = "> Links";
    }
}