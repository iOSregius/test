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
				title : this.$('#book_title').val(),
				author : this.$('#book_author').val()
				
			});
			this.helloListView.collection.add(hello);
		}
	});

	var Hello = Backbone.Model.extend({
		initialize : function() {
			//this.name = 'name'
			this.title = 'title',
			this.author = 'author'
		}
	});

	var HelloView = Backbone.View.extend({
		tagName : 'li',
		render : function() {
			//$(this.el).html('Hello ' + this.model.get('name'));
			$(this.el).html('Hello ' + this.model.get('title'));
			$(this.el).html('Hello ' + this.model.get('author'));
			
			 Parse.initialize("fWOxyeKJiLh7E5itaqrm0roBKFoJe47CDzhjpexq", "3aq8XaBCCms1uZgsVOVjz7CEjgZs6jDS1Er6NGbw");
			 var AllBook = Parse.Object.extend("AllBook");
			var allBook = new AllBook();
			
			allBook.save({book_title: this.model.get('title'),book_author: this.model.get('author')}, {
			  success: function(allBook) {
			  
				// The object was saved successfully.
				book();
			  },
			  error: function(allBook, error) {
				// The save failed.
				// error is a Parse.Error with an error code and description.
			  }
			});
			
			
			
			
			
			return this;
		}
	});
	
	function book(){
		function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
		}
		createCookie('list','book',1);
		window.location = "list.html?book";
		}

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