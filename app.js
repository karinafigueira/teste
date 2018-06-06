var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '35FyKk0D9ki8mOUNJa5QhvFHo',
  consumer_secret: 'lLFh6xNbsKWr8CuFr1A72Xx0RadOrhKfQeTU8i3IUniGWMvxJS',
  access_token_key: '840043980-2mm0tZ4xjCqtK2dKhpRQ63W7BhQFikrpTehWhYJ9',
  access_token_secret: 'wrbhahKWgMuy5AwEmyeY4rpdM5Kji5WsG4Pwasdz4l1IX'
});
 
// client.post('statuses/update', {status: 'I Love Twitter'})
//   .then(function (tweet) {
//     console.log(tweet);
//   })
//   .catch(function (error) {
//     throw error;
//   })

client.get('statuses/user_timeline', {q: '@karinaofigueira since:2018-01-01', count: 100}, 
  function(error, data, response) {
    console.log(data)
  })