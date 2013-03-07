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
			
			var movie_con = "<h3>"+movie_conquest+'</h3><p>'+movie_desc+'</p>&nbsp;&nbsp;<a href="#" class="btn btn-primary" id="read_more2"><span class="btn-label">Find Out More</span></a><br /><p onclick="movie()" style="float:right"><a href="#">To The List!</a></p>';
			$(".listwell").append(movie_con);
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
			var travel_con = "<h3>"+travel_conquest+'</h3><p>'+travel_desc+'</p>&nbsp;&nbsp;<a href="#" class="btn btn-primary" id="read_more2"><span class="btn-label">Find Out More</span></a><br /><p onclick="travel()" style="float:right"><a href="#">To The List!</a></p>';
			$(".listwell").append(travel_con);
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
			var tv_con = "<h3>"+tv_conquest+'</h3><p>'+show_desc+'</p>&nbsp;&nbsp;<a href="#" class="btn btn-primary" id="read_more2"><span class="btn-label">Find Out More</span></a><br /><p onclick="tv()" style="float:right"><a href="#">To The List!</p></a>';
			$(".listwell").append(tv_con);
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
			var music_con = "<h3>"+music_conquest+'</h3><p>'+music_desc+'</p>&nbsp;&nbsp;<a href="#" class="btn btn-primary" id="read_more2"><span class="btn-label">Find Out More</span></a><br /><p onclick="tv()" style="float:right"><a href="#">To The List!</p></a>';
			$(".listwell").append(music_con);
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
			var book_con = "<h3>"+book_conquest+'</h3><p>'+book_desc+'</p>&nbsp;&nbsp;<a href="#" class="btn btn-primary" id="read_more2"><span class="btn-label">Find Out More</span></a><br /><p onclick="tv()" style="float:right"><a href="#">To The List!</p></a>';
			$(".listwell").append(book_con);
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
			var sport_con = "<h3>"+sport_conquest+'</h3><p>'+sport_desc+'</p>&nbsp;&nbsp;<a href="#" class="btn btn-primary" id="read_more2"><span class="btn-label">Find Out More</span></a><br /><p onclick="tv()" style="float:right"><a href="#">To The List!</p></a>';
			$(".listwell").append(sport_con);
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
		  template: _.template('<div class="navbar navbar-fixed-top">   <div class="navbar-inner">'
        +'<div class="container">'
        +'  <a class="brand" href="dashboard.html">Do Share Compare</a>'
        +'  <div class="navbar-content">'
        +'    <ul class="nav ">'
         +'     <li class="active">'
         +'       <a href="#">Home</a> '
         +'     </li>'
         +'     <li>'
         +'       <a href="#">About</a> '
          +'    </li>'
		  +'<li></li>'
          +'  </ul>'
         +' </div>'
		 
         +' <div class="btn-group pull-right">'
		  
          +'  <a class="btn dropdown-toggle" data-toggle="dropdown" href="#">'
  +'  Action'
   +' <span class="caret"></span>'
+'  </a>'
  +'          <ul class="dropdown-menu">'
  +'            <li>'
   +'            <label id="fb_pic"></label><label id="namee"></label><a href="#" style="text-decoration:none" onclick="logout()" >Logout</a> '
   +'           </li>'
  +'            <li>'
   +'             <a href="#">Popular</a> '
   +'           </li>'
  +'            <li>'
  +'              <a href="#">Film</a> '
  +'            </li>'
   +'           <li>'
   +'             <a href="#">TV</a> '
   +'           </li>'
   +'           <li>'
   +'             <a href="#">Books</a>' 
    +'          </li>'
    +'          <li>'
    +'            <a href="#">Music</a> '
    +'          </li>'
    +'          <li>'
     +'           <a href="#">Travel & Adventure</a> '
     +'         </li>'
     +'         <li>'
     +'           <a href="#">Sport & Leisure</a> '
     +'         </li>'
     +'       </ul>'
     +'     </div>'
     +'   </div>'
    +'  </div>'
  +'  </div>'
  +'<!---------------------- header finished----------------------->'
  +'<div class="container">'
     +'<div class="categores_div">'
      +'<div class="btn-group categories clearfix" >'
        +'<a href="#" class="btn">Popular</a> '
        +'<a href="#" class="btn">Film</a>' 
        +'<a href="#" class="btn">TV</a>' 
        +'<a href="#" class="btn">Books</a>' 
        +'<a href="#" class="btn">Music</a>' 
        +'<a href="#" class="btn">Travel & Adventure</a>' 
        +'<a href="#" class="btn">Sport & Leisure</a> '
      +'</div>'
     +'</div>'
      +'<div class="row main-features">'
        +'<div class="span8">'
          +'<div class="well listwell" id="listwell">'
            /*+'<h3>Awesome Feature #1</h3>'
            +'<p>Enter a brief description of why its so awesome here. Then move on to'
             +' the next feature.</p>'
            +'<a class="btn btn-primary" href="#"><span class="btn-label">Find Out More</span></a> '*/
          +'</div>'
        +'</div>'
        +'<div class="span4">'
          +'<div class="well pull-right">'
	        +'<div class="media" id="fbmedia">'
	         /* +'<a class="pull-left" href="#">'
		          +'<img class="media-object" src="http://placehold.it/64x64">'
	    	  +'</a>'
	          +'<div class="media-body">'
	           +' <h4 class="media-heading">Media heading</h4>'
	            +'<p>This is the content for your media.</p>'
	          +'</div>'*/
	       +' </div>'
          +'</div>'
       +' </div>'
      +'</div>'
   +' </div>'
  
  
  
  
  +'&nbsp;'+fetching()+''
			+'<div class="conquest_listing"></div>'
			
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
		var fb_pic1 = "<img src="+readCookie('fb_pic')+" width='30px' heigth='10px'/>";
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