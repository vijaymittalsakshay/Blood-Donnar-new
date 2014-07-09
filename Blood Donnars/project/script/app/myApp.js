var app = (function(global){
    
    //mobile application initialization
    var mobileApp = new kendo.mobile.Application(document.ready,
                                                {
                                                	layout:'donnar-layout',
                                                    transition:'fade',
                                                    skin:'flat'
                                                });
    //everlive library initialize
    var el = new Everlive({
        	apiKey:"xqee7JD1dGXyYLbc",
        	scheme:"http"
    });
    
    //event listener for backbutton
    document.addEventListener("deviceready",function(){
        document.addEventListener("backbutton",onBackKeyDown,false);  
    },false);
    
    //onBackKeyDown Function
    var onBackKeyDown = function(e){
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
    
    //add event listener for register form text field and other field
   document.addEventListener("deviceready",function(){
    
        $(document).ready(function(){
          
            //Masked textbox
           /* $("#Pincode").kendoMaskedTextBox({
               mask:"000 000"
           });*/
            
            //DateTimePicekr
            $("#datepicker").kendoDateTimePicker({
                animation:{
                    close:{
                        effects: "fadeOut zoom:out",
             		   duration: 600
                    },
                    open:{
                         effects: "fadeIn zoom:in",
             		    duration: 600
                    }
                },
                format: "0:MM/dd/yyyy",  //"yyyy/MM/dd hh:mm tt"
                parseFormats: ["MMMM yyyy", "HH:mm"],
                min:new Date(1900,0,1),
                max:new Date(),
                change:onChange
       	 });
            
            function onChange()
            {
            	var DOB = this.value();
                var CDATE = new Date();
                var DIFF = ((CDATE-DOB)/1000/60/60/24);
                
                var MONTH = parseInt(DIFF/30);
                var DAYS = DIFF%30;
               // alert(DAYS);
                var YEAR = parseInt(MONTH/12);
                var yy = MONTH%12; //month
                
                var valueOfDob = YEAR+"Y ,"+yy+"M "+parseInt(DAYS)+" D";
                var day = parseInt(DAYS);
                
                alert("year : "+YEAR);
                alert("month :"+yy);
                alert("days "+day);
               
                
                //alert(valueOfDob);
               /* if(DOB>CDATE){
                    navigator.notification.alert("Select valid date of birth",setValue,"Date of birth","OK");
                }
                
                else
                {
                    $("#Age").val(valueOfDob);
                } */   
            }
            
            //state drop down
             $("#categories").kendoDropDownList({
                   optionLabel: "Select state...",
                   dataTextField: "statename",
                   dataValueField: "stateid",
                   dataSource: {
                   	transport:{
                       		read:{
                                    url:"project/data/stateData.json",
                                    dataType:"json"
                                   }
                               }
                             }
                         }).data("kendoDropDownList");
            
            //city drop down
            $("#products").kendoDropDownList({
                   autoBind: false,
                   cascadeFrom: "categories",
                   optionLabel: "Select City...",
                   dataTextField: "cityname",
                   dataValueField: "cityid",
                   	dataSource: {
                               transport:{
                                    	read:{
                                            url:"project/data/cityData.json",
                                            dataType:"json"
                                          }
                                       }
                                   }
                          }).data("kendoDropDownList");
        });
    },false);
    
    //add event listener for update blood donnar form text field
    
    
    return{
        application:mobileApp,
        el:el
    };
}(window));