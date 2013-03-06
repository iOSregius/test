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
		//START FETCH TV SHOW CONQUESTS
			var TvShow = Parse.Object.extend("TvShow");
			var query = new Parse.Query(TvShow);
			query.find({
			success: function(results) {
			
			for (var i = 0; i < results.length; i++) {
			
			var show_title = results[i].get("show_title");
			var show_season = results[i].get("show_season");
			var tv_show = "<tr><td><input type='checkbox' name='tv_select' id='tv_select' value='"+show_title+"'></td><td>"+show_title+'&nbsp;</td><td>: &nbsp;'+show_season+'</td></tr>';
			$("#tv").append(tv_show);
			}
				$("input[type=checkbox]").change(function () {
				var newArr = $("input:checked").map(function () { return this.value; });
				$("#textbox1").val(newArr.get().join(","));
			});
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
+'</a>&nbsp;<a class="details" style="text-decoration:none" href="#">Welcome, <label id="namee"></label></a>|<a href="#" style="text-decoration:none" onclick="logout()" >Logout</a></div>&nbsp;'+fetching()+'</div><br /><form id="form" name="form"><div id="left">'
			+'Add Conquest Title :: <input type="text" name="conquest" /><br />'
			+'Add Conquest Description :: <textarea name="con_desc" id="con_desc"></textarea>'
			+'<div id="tv"></div>'
			+'<div><input type="hidden" class="cat_textbox" id="textbox1" name="textbox1" maxlength="1024"  /></div>'
			+'<input type="submit" onclick="tasks()" value="submit">'
			+'</div></form>'
			),
	  
      render: function(){
        this.$el.html(this.template({}));
      }
    });
	
	function tasks()
	{
		alert("hii");
		Parse.initialize("fWOxyeKJiLh7E5itaqrm0roBKFoJe47CDzhjpexq", "3aq8XaBCCms1uZgsVOVjz7CEjgZs6jDS1Er6NGbw");		
		var ConquestTasks = Parse.Object.extend("ConquestTasks");
		var conquestTasks = new ConquestTasks();
		
		//alert(Conquest);
			conquestTasks.save({con_desc: con_desc ,conquest: conquest,show_title: show_title,show_season: show_season}, {
			  success: function(conquestTasks) {
			  
				// The object was saved successfully.
				
				alert("Movie added Successfully");
			  },
			  error: function(conquestTasks, error) {
				// The save failed.
				// error is a Parse.Error with an error code and description.
			  }
			});
	}
	
    $(document).ready(function(){
      app = new router;
      Backbone.history.start();      
    });
	});
 
	