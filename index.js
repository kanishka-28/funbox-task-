document.getElementById("submit").addEventListener("click", function run(){
        let mark1 = parseInt(document.getElementById("marks_1").value);
        let mark2 = parseInt(document.getElementById("marks_2").value);
        let mark3 = parseInt(document.getElementById("marks_3").value);
        let mark4 = parseInt(document.getElementById("marks_4").value);
        let mark5 = parseInt(document.getElementById("marks_5").value);
        let max = Math.max(mark1, mark2, mark3, mark4, mark5);
        let avg = (mark1+mark2+mark3+mark4+mark5)/5 ;
        // alert(mark1)
        if(mark1==NaN || mark2==null || mark5==null || mark3==null || mark4==null){
            alert("please provide all the marks");
        }
        else{
            document.getElementById("max").innerHTML = "max marks : " + max;
        document.getElementById("final").innerHTML = avg + "%";
        }

    })