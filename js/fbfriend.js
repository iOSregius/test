function getUser()
{
    FB.init({
        appId  : '252507681519662',
	  channelUrl : '//zsitro.com/applications/development/backbonelogin/channel.php',
        status     : true, // check login status
        cookie     : true, // enable cookies to allow the server to access the session
        xfbml      : true  // parse XFBML
    });
    //check current user login status
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            loadFriends();
        } else {
            //user is not connected.
            FB.login(function(response) {
                if (response.authResponse) {
                    loadFriends();
                } else {
                    alert('User cancelled login or did not fully authorize.');
                }
            });
        }
    });
}


//function to load friends
function loadFriends()
{
    //get array of friends
    FB.api('/me/friends', function(response) {
        console.log(response);
        var divContainer=$('.facebook-friends');
		//alert(response.data.length);
       	fb_users(response.data);
	    for(i=0;i<response.data.length;i++)
        {
           /*	  $(document.createElement("img")).attr({ src: 'https://graph.facebook.com/'+response.data[i].id+'/picture', title: response.data[i].name ,onClick:'alert("You poked "+this.title);'})
                .appendTo(divContainer);
				
				
				
				
				
			
				Parse.initialize("fWOxyeKJiLh7E5itaqrm0roBKFoJe47CDzhjpexq", "3aq8XaBCCms1uZgsVOVjz7CEjgZs6jDS1Er6NGbw");
				var FbFriends = Parse.Object.extend("FbFriends");
				var query = new Parse.Query(FbFriends);
				query.equalTo("fb_user_id", response.data[i].id);
				query.find({
				success: function(results) {
					for (var i = 0; i < results.length; i++) {
						// This does not require a network access.
						var fbFriends_email = results[i].get("fb_user_id");
					//	alert("Successfully retrieved " + post_email + " scores.");
						
				}
				if(fbFriends_email == response.data[i].id){
						//window.location = "dashboard.html"
						alert("user already exist !");
				}			
				else{
					var fbFriends = new FbFriends();
					fbFriends.save({fb_user_id: response.data[i].id,name:response.data[i].name}, {
					success: function(object) {
					 // $.cookie('user_id', name['first_name'])
					 //alert("inserted");	
					//window.location = "dashboard.html"
					}
				});
			
								
					}
				}
			});	
        */}
			
    });
}

/*function fb_users(data){
	for(var f=0;f<data.length;f++){
		var im = "<img src='https://graph.facebook.com/"+data[f].id+"/picture' title='"+data[f].name+"'>"+data[f].name;
		$("#name").append(im);
	}
	
}*/

function fb_users(data){
	
	for(var f=0;f<data.length;f++){
		var im = "<tr><td><img src='https://graph.facebook.com/"+data[f].id+"/picture' title='"+data[f].name+"'></td><td>"+data[f].name+"</td></tr>";
		$("#name").append(im);
		
		Parse.initialize("fWOxyeKJiLh7E5itaqrm0roBKFoJe47CDzhjpexq", "3aq8XaBCCms1uZgsVOVjz7CEjgZs6jDS1Er6NGbw");
		var FbFriends = Parse.Object.extend("FbFriends");
		
						var fbFriends = new FbFriends();
									fbFriends.save({fb_user_id: data[f].id,name:data[f].name}, {
									success: function(object) {
									 // $.cookie('user_id', name['first_name'])
									 //alert("inserted");	
									//window.location = "main.html"
									}
						});
					
	}
	
}

function FBfriends(){
 $(document).ready(function(){
        getUser();
});
}