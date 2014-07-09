var app = app || {};

app.Register = (function(){
    
    var RegisterViewModel = (function(){
        
        var signup = function(){
            var username = $("#Username").val(),
            	password = $("#Password").val(),
            	name 	= $("Name").val(),
            	email    = $("#Email").val(),
            	bg 	  = $("#blood_group").val(),
            	gender   = $("#gender").val(),
            	dob 	 = $("#datepicker").val(),
            	state	= $("#categories").val(),
            	city	 = $("#products").val(),
            	country  = "India",
            	pincode  = $("Pincode").val();
            	
            el.Users.register(username,password,{
                DisplayName:name,
                Email:email,
                Blood_Group:bg,
                Gender:gender,
                DOB:dob,
          	  State:state,
                City:city,
                Country:country,
                Pincode:pincode
            }).then(function(){
                navigator.notification.alert("User Registration Successfull",function(){},"User Registration",'OK');
                app.application.navigate("#index.html");
            }).then(function(){
                navigator.notification.alert(err.message, function(){}, 'User Registration', 'OK');
            })
        };
        
        var show = function(){
            $("#blood_group").val("0");
            $("#gender").val("0");
            $("#Country").val("India");
        };
        
        return{
            signup:signup,
            show :show
        };
    }());
    return RegisterViewModel;
}());