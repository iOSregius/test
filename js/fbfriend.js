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
			
    });
}
function fb_users(data1){
		var data = data1;
		var aa = '';
		for(var f=0;f<data.length;f++)
		{

			var im = "<tr><td><img src='https://graph.facebook.com/"+data[f].id+"/picture' title='"+data[f].name+"'></td><td>"+data[f].name+"</td></tr>";
			aa = data[f].id;
			var facebookRegister_fb_id = '';
			Parse.initialize("fWOxyeKJiLh7E5itaqrm0roBKFoJe47CDzhjpexq", "3aq8XaBCCms1uZgsVOVjz7CEjgZs6jDS1Er6NGbw");
			var FacebookRegister = Parse.Object.extend("FacebookRegister");
			var query = new Parse.Query(FacebookRegister);
			query.equalTo("fb_id", aa);
			query.find({
			success: function(results) {
					for (var i = 0; i < results.length; i++) {					
						facebookRegister_fb_id = results[i].get("fb_id");
						show_frnds(facebookRegister_fb_id,data);
					}
				}
			});
		}	
}

function show_frnds(frn,fb_data)
{
	
	for(var f=0;f<fb_data.length;f++)
	{
		if(fb_data[f].id == frn){
			
			var im = "<tr><td><img src='https://graph.facebook.com/"+fb_data[f].id+"/picture' title='"+fb_data[f].name+"'></td><td>"+fb_data[f].name+"</td></tr>";
			$("#name").append(im);
		}
	}	
}

function FBfriends(){
 $(document).ready(function(){
        getUser();
});
}