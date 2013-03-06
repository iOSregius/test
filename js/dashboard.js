 $(document).ready(function() {
  
  if(document.cookie.length == 0){
  	window.location = "index.html"
		//alert("No cookies");
	} 
	});
  
    var app;
    var router = Backbone.Router.extend({
      routes: {
        "": "home"
      },
      initialize: function(){
        
      },
      home: function(){
        this.homeView = new homeView;
        this.homeView.render();
      }
    });


	<!------------------parse---------------------->
	function fetching(conquests)
	{
		Parse.initialize("fWOxyeKJiLh7E5itaqrm0roBKFoJe47CDzhjpexq", "3aq8XaBCCms1uZgsVOVjz7CEjgZs6jDS1Er6NGbw");
		
		//START FETCH MOVIE CONQUESTS
			var MovieConquest = Parse.Object.extend("MovieConquest");
			var query = new Parse.Query(MovieConquest);
			query.find({
			success: function(results) {
			
			for (var i = 0; i < results.length; i++) {
			
			var movie_conquest = results[i].get("movie_conquest");
			var movie_desc = results[i].get("movie_desc");
			var movie_con = "<div id='film'><h4><div id='conquest'>"+movie_conquest+'</div></h4><p id="desc" class=ellipsis">'+movie_desc+'&nbsp;&nbsp;<a href="#" id="read_more2">more</a></p><br /><button onclick="movie()">To The List!</button><br /></div>';
			$(".conquest_listing").append(movie_con);
			}
			},	
			error: function(object, error) {
			alert("failed");
			// The object was not retrieved successfully.
			// error is a Parse.Error with an error code and description.
			}
			});
		//END FETCH MOVIE CONQUESTS
		//START FETCH TRAVEL CONQUESTS
			var TravelConquest = Parse.Object.extend("TravelConquest");
			var query = new Parse.Query(TravelConquest);
			query.find({
			success: function(results) {
			
			for (var i = 0; i < results.length; i++) {
			
			var travel_conquest = results[i].get("travel_conquest");
			var travel_desc = results[i].get("travel_desc");
			var travel_con = "<div id='film'><h4><div id='conquest'>"+travel_conquest+'</div></h4><p id="desc" class=ellipsis">'+travel_desc+'&nbsp;&nbsp;<a href="#" id="read_more2">more</a></p><br /><button onclick="travel()">To The List!</button><br /></div>';
			$(".conquest_listing").append(travel_con);
			}
			},	
			error: function(object, error) {
			alert("failed");
			// The object was not retrieved successfully.
			// error is a Parse.Error with an error code and description.
			}
			});
		//END FETCH TRAVEL CONQUESTS
		//START FETCH TV CONQUESTS
			var TvConquest = Parse.Object.extend("TvConquest");
			var query = new Parse.Query(TvConquest);
			query.find({
			success: function(results) {
			
			for (var i = 0; i < results.length; i++) {
			
			var tv_conquest = results[i].get("tv_conquest");
			var show_desc = results[i].get("show_desc");
			var tv_con = "<div id='film'><h4><div id='conquest'>"+tv_conquest+'</div></h4><p id="desc" class=ellipsis">'+show_desc+'&nbsp;&nbsp;<a href="#" id="read_more2">more</a></p><br /><button onclick="tv()">To The List!</button><br /></div>';
			$(".conquest_listing").append(tv_con);
			}
			},	
			error: function(object, error) {
			alert("failed");
			// The object was not retrieved successfully.
			// error is a Parse.Error with an error code and description.
			}
			});
		//END FETCH TV CONQUESTS
		//START FETCH MUSIC CONQUESTS
			var MusicConquest = Parse.Object.extend("MusicConquest");
			var query = new Parse.Query(MusicConquest);
			query.find({
			success: function(results) {
			
			for (var i = 0; i < results.length; i++) {
			
			var music_conquest = results[i].get("music_conquest");
			var music_desc = results[i].get("music_desc");
			var music_con = "<div id='film'><h4><div id='conquest'>"+music_conquest+'</div></h4><p id="desc" class=ellipsis">'+music_desc+'&nbsp;&nbsp;<a href="#" id="read_more2">more</a></p><br /><button onclick="tv()">To The List!</button><br /></div>';
			$(".conquest_listing").append(music_con);
			}
			},	
			error: function(object, error) {
			alert("failed");
			// The object was not retrieved successfully.
			// error is a Parse.Error with an error code and description.
			}
			});
		//END FETCH MUSIC CONQUESTS
		//START FETCH BOOKS CONQUESTS
			var BookConquest = Parse.Object.extend("BookConquest");
			var query = new Parse.Query(BookConquest);
			query.find({
			success: function(results) {
			
			for (var i = 0; i < results.length; i++) {
			
			var book_conquest = results[i].get("book_conquest");
			var book_desc = results[i].get("book_desc");
			var book_con = "<div id='film'><h4><div id='conquest'>"+book_conquest+'</div></h4><p id="desc" class=ellipsis">'+book_desc+'&nbsp;&nbsp;<a href="#" id="read_more2">more</a></p><br /><button onclick="tv()">To The List!</button><br /></div>';
			$(".conquest_listing").append(book_con);
			}
			},	
			error: function(object, error) {
			alert("failed");
			// The object was not retrieved successfully.
			// error is a Parse.Error with an error code and description.
			}
			});
		//END FETCH BOOKS CONQUESTS
		//START FETCH SPORT CONQUESTS
			var SportConquest = Parse.Object.extend("SportConquest");
			var query = new Parse.Query(SportConquest);
			query.find({
			success: function(results) {
			
			for (var i = 0; i < results.length; i++) {
			
			var sport_conquest = results[i].get("sport_conquest");
			var sport_desc = results[i].get("sport_desc");
			var sport_con = "<div id='film'><h4><div id='conquest'>"+sport_conquest+'</div></h4><p id="desc" class=ellipsis">'+sport_desc+'&nbsp;&nbsp;<a href="#" id="read_more2">more</a></p><br /><button onclick="tv()">To The List!</button><br /></div>';
			$(".conquest_listing").append(sport_con);
			}
			},	
			error: function(object, error) {
			alert("failed");
			// The object was not retrieved successfully.
			// error is a Parse.Error with an error code and description.
			}
			});
		//END FETCH SPORT CONQUESTS
		
	}
	<!------------------parse---------------------->


    var homeView = Backbone.View.extend({
      el: 'body',
		  template: _.template('<div style="width:auto;background-color:#99CCFF;height:100px;"> <h3>Do, Share, Compare&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
+'</a>&nbsp;<a class="details" style="text-decoration:none" href="#">Welcome, <label id="namee"></label></a>|<a href="#" style="text-decoration:none" onclick="logout()" >Logout</a><p id="fb_pic"></p></div>&nbsp;'+fetching()+'</div><br /><div id="left">'
			+'<div class="conquest_listing"></div>'
			+'</div>'
			+'<div id="right">Friends<br /><div id="friend"><table id="name"></table></div>'
			+'</div>'
			),
	  
      render: function(){
        this.$el.html(this.template({}));
      }
    });


    $(document).ready(function(){
      app = new router;
      Backbone.history.start();      
    })
	
	<!------------------------------ functtion to set cookie to go tolist.html -------------------------->
	
		function travel(){
		function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
		}
		createCookie('list','travel',1);
		window.location = "tolist.html?travel";
		}
		
		function movie(){
		function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
		}
		createCookie('list','movie',1);
		window.location = "tolist.html?movie";
		}
		
		function tv(){
		function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
		}
		createCookie('list','tv',1);
		window.location = "tolist.html?tv";
		}
	
	<!------------------------------ functtion to set cookie to go tolist.html -------------------------->
	
	function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
		//return null;
		document.getElementById('namee').innerHTML = readCookie('f_name');
		var fb_pic1 = "<img src="+readCookie('fb_pic')+"/>";
		$('#fb_pic').append(fb_pic1);
	}

	//START FACEBOOK LOGOUT FUNCTION
	function logout(){
	function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}
	
		createCookie("f_name","",-1);
	 createCookie("u_name","",-1);
	 createCookie("email11","",-1);
	 FB.logout(function(response) {
	  // user is now logged out
	  window.location = "index.html"
	});
	}
	//END FACEBOOK LOGOUT FUNCTION