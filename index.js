var response = require('response');

var server = require('flatsheet')({
  site: {
    title: 'flatsheet',
    email: 'you@example.com',
    url: 'http://127.0.0.1', // include port here if not at port 80
    contact: 'flatsheet admin'
  },
  db: __dirname + '/data'
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

server.listen((process.env.PORT || 3333), function () {
  console.log('server started at 127.0.0.1:' + (process.env.PORT || 3333));
});
