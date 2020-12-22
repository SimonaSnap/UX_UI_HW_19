var wasClicked = true;
function changeBtnColor()
{
    if (wasClicked)
    {
        document.getElementById("ResumeBtn").style.backgroundColor = "rgb(242, 208, 196)"; 
        document.getElementById("ResumeBtn").style.borderColor = "rgb(89, 30, 46";
        document.getElementById("ResumeBtn").style.color = "rgb(89, 30, 46";
    }
    else
    {
        document.getElementById("ResumeBtn").style.backgroundColor = "rgb(89, 30, 46)";
        document.getElementById("ResumeBtn").style.color = "rgb(242, 208, 196)";
    }
    wasClicked = !wasClicked;
}

function changeBtn2Color()
{
    if (wasClicked)
    {
        document.getElementById("yum_button").style.backgroundColor = "rgb(242, 208, 196)"; 
        document.getElementById("yum_button").style.borderColor = "rgb(89, 30, 46";
        document.getElementById("yum_button").style.color = "rgb(89, 30, 46";
    }
    else
    {
        document.getElementById("yum_button").style.backgroundColor = "rgb(89, 30, 46)";
        document.getElementById("yum_button").style.color = "rgb(242, 208, 196)";
    }
    wasClicked = !wasClicked;
}

function changeBtn3Color()
{
    if (wasClicked)
    {
        document.getElementById("imagine_button").style.backgroundColor = "rgb(242, 208, 196)"; 
        document.getElementById("imagine_button").style.borderColor = "rgb(89, 30, 46";
        document.getElementById("imagine_button").style.color = "rgb(89, 30, 46";
    }
    else
    {
        document.getElementById("imagine_button").style.backgroundColor = "rgb(89, 30, 46)";
        document.getElementById("imagine_button").style.color = "rgb(242, 208, 196)";
    }
    wasClicked = !wasClicked;
}

function changeBtn4Color()
{
    if (wasClicked)
    {
        document.getElementById("safe_button").style.backgroundColor = "rgb(242, 208, 196)"; 
        document.getElementById("safe_button").style.borderColor = "rgb(89, 30, 46";
        document.getElementById("safe_button").style.color = "rgb(89, 30, 46";
    }
    else
    {
        document.getElementById("safe_button").style.backgroundColor = "rgb(89, 30, 46)";
        document.getElementById("safe_button").style.color = "rgb(242, 208, 196)";
    }
    wasClicked = !wasClicked;
}

function changeBtn5Color()
{
    if (wasClicked)
    {
        document.getElementById("project_button").style.backgroundColor = "rgb(242, 208, 196)"; 
        document.getElementById("project_button").style.borderColor = "rgb(89, 30, 46";
        document.getElementById("project_button").style.color = "rgb(89, 30, 46";
    }
    else
    {
        document.getElementById("project_button").style.backgroundColor = "rgb(89, 30, 46)";
        document.getElementById("project_button").style.color = "rgb(242, 208, 196)";
    }
    wasClicked = !wasClicked;
}


//function topfunction() {
    //document.getElementById("topbtn").document.body.scrollTop = 0;
//}

mybutton = document.getElementById("topbtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.documentElement.scrollTop = 0;
}