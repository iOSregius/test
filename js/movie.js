(function($) {
	
	var UserInputView = Backbone.View.extend({
		
		el : '#UserInput',
		
		initialize : function() {
			this.helloListView = new HelloListView();
		},
		
		events : {
			'click button' : 'addToHelloCollection'
		},

		addToHelloCollection : function(e) {
			var hello = new Hello({
				//name : this.$('input').val()
				title : this.$('#movie_title').val(),
				desc : this.$('#movie_desc').val()
				
			});
			this.helloListView.collection.add(hello);
		}
	});

	var Hello = Backbone.Model.extend({
		initialize : function() {
			//this.name = 'name'
			this.title = 'title',
			this.desc = 'desc'
		}
	});

	var HelloView = Backbone.View.extend({
		tagName : 'li',
		render : function() {
			//$(this.el).html('Hello ' + this.model.get('name'));
			$(this.el).html('Hello ' + this.model.get('title'));
			$(this.el).html('Hello ' + this.model.get('desc'));
			
			 Parse.initialize("fWOxyeKJiLh7E5itaqrm0roBKFoJe47CDzhjpexq", "3aq8XaBCCms1uZgsVOVjz7CEjgZs6jDS1Er6NGbw");
			 var AddMovie = Parse.Object.extend("AddMovie");
			var addMovie = new AddMovie();
			
			addMovie.save({movie_title: this.model.get('title'),movie_desc: this.model.get('desc')}, {
			  success: function(addMovie) {
			  
				// The object was saved successfully.
				alert("done");
			  },
			  error: function(addMovie, error) {
				// The save failed.
				// error is a Parse.Error with an error code and description.
			  }
			});
			
			
			
			
			
			return this;
		}
	});

	var HelloList = Backbone.Collection.extend({
		model : Hello
	});

	var HelloListView = Backbone.View.extend({
		
		el : '#HelloList',
		
		initialize : function() {
			_.bindAll(this, 'render', 'appendToHelloUL');
			this.collection = new HelloList();
			this.collection.bind('add', this.appendToHelloUL);
		},
		
		render:function(){

			$.each(this.collection.models, function(i, helloModel){
				self.appendToHelloUL(helloModel);
			});
		},
		
		appendToHelloUL : function(helloModel) {
			var helloView = new HelloView({
				model : helloModel
			});
			$(this.el).append(helloView.render().el);
		}
	});

	new UserInputView();

})(jQuery);