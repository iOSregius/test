$(function() {
Parse.initialize("fWOxyeKJiLh7E5itaqrm0roBKFoJe47CDzhjpexq",
       "3aq8XaBCCms1uZgsVOVjz7CEjgZs6jDS1Er6NGbw");
       
window.fbAsyncInit = function() {
  Parse.FacebookUtils.init({
    appId      : '486543088073538', // Facebook App ID
    channelUrl : '//WWW.YOUR_DOMAIN.COM/channel.html', // Channel File
    status     : true, // check login status
    cookie     : true, // enable cookies to allow Parse to access the session
    xfbml      : true  // parse XFBML
  });
 
  // Additional initialization code here
};

var App = Ember.Application.create({
    ready: function(){
        //find data
    }
});

App.ApplicationController = Ember.Controller.extend();
App.ApplicationView = Ember.View.extend({
  templateName: 'application'
});

App.Router = Ember.Router.extend({
  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/'
    })
  })
})

App.initialize();

/**************************
* Models
**************************/

App.User = Em.Object.extend({
    profile_pic: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/368869_29616035_1140254541_q.jpg",
    user_name: "briansoule",
    fb_id: null,
	self: 1
});

App.List = Em.Object.extend({
    name: null,
    description: null,
    items: null,
    favorite: null,
	self: null
});

/**************************
* Views
**************************/


/**************************
* Controllers
**************************/

});