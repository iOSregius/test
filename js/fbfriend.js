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
        */}
			
    });
}

/*function fb_users(data){
	for(var f=0;f<data.length;f++){
		var im = "<img src='https://graph.facebook.com/"+data[f].id+"/picture' title='"+data[f].name+"'>"+data[f].name;
		$("#name").append(im);
	}
	
}*/

function fb_users(data1){
		var data = data1;
		
		for(var f=0;f<data.length;f++){

		var im = "<tr><td><img src='https://graph.facebook.com/"+data[f].id+"/picture' title='"+data[f].name+"'></td><td>"+data[f].name+"</td></tr>";
		$("#name").append(im);
		
			var aa = data[f].id;
			var facebookRegister_fb_id = '';
			Parse.initialize("fWOxyeKJiLh7E5itaqrm0roBKFoJe47CDzhjpexq", "3aq8XaBCCms1uZgsVOVjz7CEjgZs6jDS1Er6NGbw");
			
			var FacebookRegister = Parse.Object.extend("FacebookRegister");
			var query = new Parse.Query(FacebookRegister);
			query.equalTo("fb_id", aa);
			query.find({
			success: function(results) {
					for (var i = 0; i < results.length; i++) {					
						// This does not require a network access.
						facebookRegister_fb_id = results[i].get("fb_id");
						//	alert("Successfully retrieved " + post_email + " scores.");					
						//alert(facebookRegister_fb_id + ' match id');
					}
					
					//alert(aa + 'face id');
					if(facebookRegister_fb_id == aa)
					{	
						//window.location = "tolist.html"
						
					var im = "<tr><td><img src='https://graph.facebook.com/"+data[f].id+"/picture' title='"+data[f].name+"'></td><td>"+data[f].name+"</td></tr>";
		$("#name").append(im);
					}
					else
					{
						//alert("no friendzzz");
						/*var FacebookRegister = Parse.Object.extend("FacebookRegister");
						var facebookRegister = new FacebookRegister();
						facebookRegister.save({fb_id: data[f].id,name:data[f].name}, {
						success: function(object) {
							//alert("done");
						}
						});*/
					}
				}
			});
			/*var fbFriends_fb_user_id = '';
			Parse.initialize("fWOxyeKJiLh7E5itaqrm0roBKFoJe47CDzhjpexq", "3aq8XaBCCms1uZgsVOVjz7CEjgZs6jDS1Er6NGbw");
			
			var FbFriends = Parse.Object.extend("FbFriends");
			var query = new Parse.Query(FbFriends);
			query.equalTo("fb_user_id", data[f].id);
			query.find({
			success: function(results) {
					for (var i = 0; i < results.length; i++) {					
						// This does not require a network access.
						fbFriends_fb_user_id = results[i].get("fb_user_id");
						//	alert("Successfully retrieved " + post_email + " scores.");					
						alert(fbFriends_fb_user_id + ' match id');
					}
					
					alert(data[f].id + 'face id');
					if(fbFriends_fb_user_id == data[f].id)
					{	
						//window.location = "tolist.html"
						alert(" already exist !");
					}
					else
					{
						alert("wel come");
						var FbFriends = Parse.Object.extend("FbFriends");
						var fbFriends = new FbFriends();
						fbFriends.save({fb_user_id: data[f].id,name:data[f].name}, {
						success: function(object) {
							//alert("done");
						}
						});
					}
				}
			});*/
		
			//alert(data[f].id);
			
				
		}
	
}

function FBfriends(){
 $(document).ready(function(){
        getUser();
});
}