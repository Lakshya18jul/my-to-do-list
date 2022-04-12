
//when a checkbox is checked the task should be shown as done 

let all_checkboxes = $("form input[type='checkbox']"); //fetch all checkboxes

for(let i=0;i<all_checkboxes.length ;i++){
    let checkbox = $(all_checkboxes[i]);
    checkbox.on("click" , function(){
        let parent_div = $(checkbox.parent());
        let display_task = $(parent_div.parent());

        if(checkbox.prop("checked")==true){
            //if checked then stike thorough task and change background  
            parent_div.find("span").css("text-decoration" , "line-through");            
            display_task.css("background-color" , "lightgrey");           
        }else{            
            parent_div.find("span").css("text-decoration" , "none");            
            display_task.css("background-color" , "white");
        }
    });
}

