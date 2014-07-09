var app = app || {};

app.Login = (function(){
    
    var LoginViewModel = (function(){
        
        var login = function(){
            alert("ok");
        };
        
        var closeModelView = function(){
          $("#forgotModalView").kendoMobileModalView("close");  
        };
        
        var ForgotSubmit = function(){
          alert("hello");  
        };
        
        return{
            login:login,
            forgotClose:closeModelView,
			forgotSubmit:ForgotSubmit
        };
    }());
    
    return LoginViewModel;
}());