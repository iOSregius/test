 $(document).ready(function() {
  
  
  
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
	function fetching(movielist)
	{
		Parse.initialize("fWOxyeKJiLh7E5itaqrm0roBKFoJe47CDzhjpexq", "3aq8XaBCCms1uZgsVOVjz7CEjgZs6jDS1Er6NGbw");
		
		//START FETCH MOVIE CONQUESTS
			var AllMovie = Parse.Object.extend("AllMovie");
			var query = new Parse.Query(AllMovie);
			query.find({
			success: function(results) {
			
			for (var i = 0; i < results.length; i++) {
			
			var movie_title = results[i].get("movie_title");
			var movie_year = results[i].get("movie_year");
			var movie_show = "<tr><td><input type='checkbox' name='movie_select' name='movie_select'></td><td>'"+movie_title+'"</td><td>('+movie_year+')</td></tr>';
			$("#film").append(movie_show);
			}
			},	
			error: function(object, error) {
			alert("failed");
			// The object was not retrieved successfully.
			// error is a Parse.Error with an error code and description.
			}
			});
		//END FETCH MOVIE CONQUESTS
		//START FETCH BOOK CONQUESTS
			var AllBook = Parse.Object.extend("AllBook");
			var query = new Parse.Query(AllBook);
			query.find({
			success: function(results) {
			
			for (var i = 0; i < results.length; i++) {
			
			var book_title = results[i].get("book_title");
			var book_author = results[i].get("book_author");
			var book_show = "<tr><td><input type='checkbox' name='book_select' name='book_select'></td><td>"+book_title+'&nbsp;by</td><td>&nbsp;'+book_author+'</td></tr>';
			$("#book").append(book_show);
			}
			},	
			error: function(object, error) {
			alert("failed");
			// The object was not retrieved successfully.
			// error is a Parse.Error with an error code and description.
			}
			});
		//END FETCH BOOK CONQUESTS
		//START FETCH LOCATION CONQUESTS
			var AllLocation = Parse.Object.extend("AllLocation");
			var query = new Parse.Query(AllLocation);
			query.find({
			success: function(results) {
			
			for (var i = 0; i < results.length; i++) {
			
			var travel_title = results[i].get("travel_title");
			var travel_loc = results[i].get("travel_loc");
			var travel_show = "<tr><td><input type='checkbox' name='travel_select' name='travel_select'></td><td>'"+travel_title+'"</td></tr>';
			$("#travel").append(travel_show);
			}
			},	
			error: function(object, error) {
			alert("failed");
			// The object was not retrieved successfully.
			// error is a Parse.Error with an error code and description.
			}
			});
		//END FETCH LOCATION CONQUESTS
		//START FETCH MUSIC CONQUESTS
			var AllMusic = Parse.Object.extend("AllMusic");
			var query = new Parse.Query(AllMusic);
			query.find({
			success: function(results) {
			
			for (var i = 0; i < results.length; i++) {
			
			var music_title = results[i].get("music_title");
			var music_artist = results[i].get("music_artist");
			var music_show = "<tr><td><input type='checkbox' name='music_select' name='music_select'></td><td>"+music_title+'&nbsp;by</td><td>&nbsp;'+music_artist+'</td></tr>';
			$("#music").append(music_show);
			}
			},	
			error: function(object, error) {
			alert("failed");
			// The object was not retrieved successfully.
			// error is a Parse.Error with an error code and description.
			}
			});
		//END FETCH MUSIC CONQUESTS
		//START FETCH SPORT CONQUESTS
			var AllSport = Parse.Object.extend("AllSport");
			var query = new Parse.Query(AllSport);
			query.find({
			success: function(results) {
			
			for (var i = 0; i < results.length; i++) {
			
			var sport_activity = results[i].get("sport_activity");
			
			var sport_show = "<tr><td><input type='checkbox' name='sport_select' name='sport_select'></td><td>"+sport_activity+'</td></tr>';
			$("#sport").append(sport_show);
			}
			},	
			error: function(object, error) {
			alert("failed");
			// The object was not retrieved successfully.
			// error is a Parse.Error with an error code and description.
			}
			});
		//END FETCH SPORT CONQUESTS
		//START FETCH TV SHOW CONQUESTS
			var TvShow = Parse.Object.extend("TvShow");
			var query = new Parse.Query(TvShow);
			query.find({
			success: function(results) {
			
			for (var i = 0; i < results.length; i++) {
			
			var show_title = results[i].get("show_title");
			var show_season = results[i].get("show_season");
			var tv_show = "<tr><td><input type='checkbox' name='tv_select' name='tv_select'></td><td>"+show_title+'&nbsp;</td><td>: &nbsp;'+show_season+'</td></tr>';
			$("#tv").append(tv_show);
			}
			},	
			error: function(object, error) {
			alert("failed");
			// The object was not retrieved successfully.
			// error is a Parse.Error with an error code and description.
			}
			});
		//END FETCH TV SHOW CONQUESTS
		
	}
	<!------------------parse---------------------->

	

    var homeView = Backbone.View.extend({
      el: 'body',
		  template: _.template('<div style="width:auto;background-color:#99CCFF;margin:0 auto;height:50px;vertical-align:middle;line-height: 50px;"> <h3>Do, Share, Compare&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
 +'<a href="#apples/<%=name%>" >'
+'<%=name%>'
+'</a>&nbsp;<a class="details" style="text-decoration:none" href="#">Welcome, <label id="namee"></label></a>|<a href="#" style="text-decoration:none" onclick="logout()" >Logout</a></div>&nbsp;'+fetching()+'</div><br /><div id="left">'
			+'Add Conquest Title :: <input type="text" name="conquest" /><br />'
			+'Add Conquest Description :: <textarea name="con_desc" id="con_desc"></textarea>'
			+'<div id="film"></div>'
			+'<div id="book"></div>'
			+'<div id="travel"></div>'
			+'<div id="music"></div>'
			+'<div id="sport"></div>'
			+'<div id="tv"></div>'
			+'<button>submit</button>'
			+'</div>'
			),
	  
      render: function(){
        this.$el.html(this.template({}));
      }
    });
	

    $(document).ready(function(){
      app = new router;
      Backbone.history.start();      
    });});
	