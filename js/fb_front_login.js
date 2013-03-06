// JavaScript Document
SessionModel = Backbone.Model.extend({
    defaults: {
		id 				:null,
		third_party_id 	:null,
		name 			:null,
		email 			:null,
		status 			:0
    },

    isAuthorized: function(){
       return Boolean(this.get("third_party_id"));
    },

	logout : function(){
		window.activeSession.id = "";
		window.activeSession.clear();
		console.log('logout done!');
	},

	login : function(opts){
		console.log('#####################################\n login called.\n#####################################');
		
		opts.before&&opts.before();

		_session = this;
		this._onALWAYS	= function(){opts.after&&opts.after();};
		this._onERROR 	= function(){console.log('this._onERROR with result:',result);};
		this._onSUCCESS = function(result){
			console.log('this._onSUCCESS with result:',result);
			console.log(_session.get('third_party_id'));
		};
		
		this._getuserdata = function(callback){
			console.log('_getuserdata called;');
			FB.api('/me?fields=third_party_id,email,name,first_name', function(response) {
				if (!response || response.error) {					
					callback(true, response.error);
				} else {
				//window.location = "main.html"
					//alert('first name is ' + response['first_name']);
					//alert('gfname is ' + global_fname);
					//global_fname=response['first_name'];
					//alert('first name is ' + response['first_name']);
					//alert('gfname is ' + global_fname);
					//alert('Location is ' + response['location']['name']);
					/*var date = new Date();
					var days=1;
					date.setTime(date.getTime()+(days*24*60*60*1000));
					var expires = "; expires="+date.toGMTString();
					var fname1="f_name";
					var uname1="u_name";
					var email1="email";
					var fname=response['first_name'];
					var uname=response['name'];
					var email=response['email'];
					var exdate=new Date();
					var exdays=1;
					exdate.setDate(exdate.getDate() + exdays);
					var c_value_fname=escape(fname) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
					var c_value_uname=escape(uname) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
					var c_value_email=escape(email) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
					//document.cookie=c_name + "=" + c_value;
					//alert(c_value);
					document.cookie = fname1 + "=" + c_value_fname;
					document.cookie = uname1 + "=" + c_value_uname;
					document.cookie = email1 + "=" + c_value_email;	*/
					
					//START SET FB USERNAME, NAME AND EMAIL AS COOKIE 
					
					createCookie('f_name',response['first_name'],1);
					createCookie('u_name',response['name'],1);
					createCookie('email11',response['email'],1);
					//END SET FB USERNAME, NAME AND EMAIL AS COOKIE 
					
					LoginwithFacebook(response);
					console.log('"/me" query success where username is ' + response['name'] + '.',response);	
					
					callback(null, response);
				}
			});

		};
		
		this._savesession = function(user,callback){
			console.log('_savesession called, user data:',user);
			/* if third_party_id exist its totally okay */
			if (user['third_party_id']){
				_session.set(
					{
						id: 			user['id'],
						third_party_id: user['third_party_id'],
						name: 			user['name'],
						email: 			user['email'],
						status: 		"1"
					},{
						silent:true
					}
				);									
				callback(null,"Everything is wonderful.");
				
			}
			else{
				callback(true,"third_party_id check failed!");
				return false;
			}
		}
		
		FB.login(function(response) {
			if (response.authResponse) {
				console.log('Fetching authResponse information.... ');

				async.waterfall([
					_session._getuserdata,
					_session._savesession,
				], function (err, result) {
					console.log('Queue finished. Error occured:',err,' result:',result);
					!!err&&_session._onERROR(result);
					!!!err&&_session._onSUCCESS(result);
					_session._onALWAYS(result);
				});
								
			} else {
				_session._onERROR('User cancelled login or did not fully authorize.');
			}
		}, {scope: 'email,user_likes'});
	}

});
window.activeSession = new SessionModel();
console.log('authorized after create (should be false):',window.activeSession.isAuthorized());
<!------------- insertion of fb details in parse.com --------------->
function LoginwithFacebook(name)
{
	var register_email = '';
	//Parse.initialize("zMn02yNOwgNBU2gjZSazDAucWeeIIB7eaxnj3VEs", "vjC3XtjlKKNLfNhrLTHiYOQW7s1nc9wbXEaemdp5");
	Parse.initialize("fWOxyeKJiLh7E5itaqrm0roBKFoJe47CDzhjpexq", "3aq8XaBCCms1uZgsVOVjz7CEjgZs6jDS1Er6NGbw");
	var FacebookRegister = Parse.Object.extend("FacebookRegister");
	var query = new Parse.Query(FacebookRegister);
	query.equalTo("email", name['email']);
	query.find({
	success: function(results) {
		for (var i = 0; i < results.length; i++) {
			// This does not require a network access.
			var register_email = results[i].get("email");
		//	alert("Successfully retrieved " + post_email + " scores.");
			
		}
		
		if(register_email == name['email'])
		{
			createCookie('fb_pic',"http://graph.facebook.com/"+name['id']+"/picture",1);
			window.location = "dashboard.html"
			//alert(post_email+"email already exist !");
		}else{
			var facebookRegister = new FacebookRegister();
			facebookRegister.save({fb_username: name['first_name'],email:name['email'],name:name['name'],fb_id:name['id'],fb_profile_pic:"http://graph.facebook.com/"+name['id']+"/picture"}, {
			success: function(object) {
			 // $.cookie('user_id', name['first_name'])
			 //alert("Welcome "+ name['first_name']);
			createCookie('fb_pic',fb_profile_pic,1);
			window.location = "dashboard.html"
			}
			});
			
					
		}
	}
});
	
	
	/*var FacebookRegister = Parse.Object.extend("FacebookRegister");
	var query = new Parse.Query(FacebookRegister);
	query.equalTo("email", name['email']);
	query.find({
	success: function(results) {
		for (var i = 0; i < results.length; i++) {
			// This does not require a network access.
			var register_email = results[i].get("email");
		//	alert("Successfully retrieved " + post_email + " scores.");
			
		}
		
		if(register_email == name['email'])
		{
			window.location = "dashboard.html"
			//alert(post_email+"email already exist !");
		}else{
			var facebookRegister = new FacebookRegister();
			facebookRegister.save({firstname: name['first_name'],email:name['email'],name:name['name'],fb_id:name['id']}, {
			success: function(object) {
			 // $.cookie('user_id', name['first_name'])
			 //alert("Welcome "+ name['first_name']);	
			window.location = "dashboard.html"
			}
			});
			
					
		}
	}
});*/
	//var post = new Post();
	//alert(name['first_name']);
	/*if(post.email == name['email'])
	{
		alert("already exist");
	}
	else
	{
	post.save({firstname: name['first_name'],email:name['email'],name:name['name']}, {
	  success: function(object) {
	  	 // $.cookie('user_id', name['first_name'])
		window.location = "main.html"
	  
	});}
	}*/
}
function createCookie(name,value,days) {
						if (days) {
							var date = new Date();
							date.setTime(date.getTime()+(days*24*60*60*1000));
							var expires = "; expires="+date.toGMTString();
						}
						else var expires = "";
						document.cookie = name+"="+value+expires+"; path=/";
					}
<!------------- insertion of fb details in parse.com --------------->