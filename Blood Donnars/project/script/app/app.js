(function(global){
    var app = global.app = global.app || {};
    
    document.addEventListener('deviceready','onDeviceReady',false);
    
    var onDeviceReady = function(){
      document.addEventListener('backbutton','onBackKeyDown',false);  
    };
    
    var onBackKeyDown = function(){
         var x = mobileApp.view()['element']['0']['id'];
        
		if(x === "login")
        {
            //navigator.app.exitApp(); 
             navigator.notification.confirm('Do you really want to exit?',function(confirmed){
                
                if(confirmed === true || confirmed ===1)
                {
                 	navigator.app.exitApp();
                }
                
            },'Exit','Yes,No');
        }
        else if(x==="register" || x==="donnar_list" || x==="donnar_detail")
        {
            e.preventdefault();
        }
        else if(x === "home")
        {
            navigator.notification.confirm('Do you want to Logout ?',function(confirmed){
                
                if(confirmed === true || confirmed ===1)
                {
                 	mobileApp.navigate("#index.html");
                }
                
            },'Logout','Yes,No');
        }
        else
        {
            //history.go(-1);
           // navigator.app.backhistory();
        }
    };
    
    apps = new kendo.mobile.Application(document.body,{layout:'blood-donnar',skin:'flat',initial:login});
})(window);