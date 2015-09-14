var $ = require('jquery');
var NewsItem = require('./NewsItem');
var React = require('react');

$.ajax({
  url:'/json/items.json'
}).then(function(items) {
  // Logs data so we can inspect in console.
  console.log('items', items);
  //adds fake rank
  React.render(<NewsItem item={items[0]} rank={1}/>, $('#content')[0]);
});
