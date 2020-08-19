var interview = [{"question": "Question 1","rating": 0, "comment": "No Comment"},
                {"question": "Question 2","rating": 0, "comment": "No Comment"},
                {"question": "Question 3","rating": 0, "comment": "No Comment"},
                {"question": "Question 4","rating": 0, "comment": "No Comment"},
                {"question": "Question 5","rating": 0, "comment": "No Comment"}
                ];
console.log(interview.length);
let q = 0;
document.getElementById("question").innerHTML = interview[q].question;
document.getElementById("prev").style.visibility = "hidden";

showNextQuestion = () => {
    if(q < interview.length-2)
    {
        q++;
        document.getElementById("question").innerHTML = interview[q].question;
        document.getElementById("prev").style.visibility = "visible";
        console.log(interview);
    }
    else if(q == interview.length-2)
    {
        q++;
        document.getElementById("question").innerHTML = interview[q].question;
        document.getElementById("save").innerHTML = "Save & Finish";
        document.getElementById("next").style.visibility = "hidden";
    }
    else if(q == interview.length-1)
    {
        alert("This is the alst question");
    }
}

showPrevQuestion = () => {
    if(q == interview.length-1)
    {
        document.getElementById("next").style.visibility = "visible";
        document.getElementById("save").innerHTML = "Save";
        document.getElementById("next").innerHTML = ">";
        q--;
        document.getElementById("question").innerHTML = interview[q].question;
    }
    else if(q > 0)
    {
        q--;
        document.getElementById("question").innerHTML = interview[q].question;
        if(q == 0)
            document.getElementById("prev").style.visibility = "hidden";
    }
    else if(q == 0)
    {
        alert("Can't go back further");
    }
    
}

var rating = 0;
addRating = (r) => {
    rating = r
    console.log(interview[q].rating);
}

saveResponse = () =>{
    if(q < interview.length-2)
    {
        interview[q].comment = document.getElementById("comment").value;
        document.getElementById("prev").style.visibility = "visible";
        document.getElementById("comment").value = "";
        interview[q].rating = rating;
        rating = 0;
        q++;
        document.getElementById("question").innerHTML = interview[q].question;
        console.log(interview);
    }
    else if(q == interview.length-2)
    {
        interview[q].comment = document.getElementById("comment").value;
        document.getElementById("comment").value = "";
        interview[q].rating = rating;
        document.getElementById("next").style.visibility = "hidden";
        rating = 0;
        q++;
        document.getElementById("question").innerHTML = interview[q].question;
        document.getElementById("save").innerHTML = "Save & Finish";
        console.log(interview);
    }
    else if(q == interview.length-1)
    {
        var flag = 0;
        if(interview[q].rating == 0)
        {
            interview[q].comment = document.getElementById("comment").value;
            interview[q].rating = rating;
            rating = 0;
        }
        var missed = [];
        for(var i = 0; i < interview.length; i++)
        {
            if(interview[i].rating == 0)
            {
                missed.push(i+1);
                flag = -1;
            }
        }
        if(flag == -1)
        {
            console.log(missed);
            alert("You have missed questions: " + missed);
        }
        else if(flag == 0)
        {
            var interviewJSON = JSON.stringify(interview);
            localStorage.setItem('questions',interviewJSON);
            location.href = "InterviewResults.html";
        }
    }	
}