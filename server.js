var response = require('response');
var server = require('flatsheet')({
  site: {
    title: 'flatsheet demo',
    email: 'sethvincent@gmail.com',
    url: 'http://demo.flatsheet.io',
    contact: 'Seth Vincent'
  },
  db: __dirname + '/data/db'
});

server.route('/', function (req, res) {
  if (!res.account) {
    return response()
      .html(server.render('index', {
        account: { username: 'friend' }
      }))
      .pipe(res);
  }
  else {
    res.writeHead(302, { 'Location': '/sheets' });
    res.end();
  }
});

server.listen(80, function () {
  console.log('server started at 127.0.0.1:' + (process.env.PORT || 3333));
});
