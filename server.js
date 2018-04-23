var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
     'article-one' : {
          title : 'article one | Arjun Gangwar',
          heading : 'Article One',
          date : '5 Feb, 2018',
          content : `
          <p>
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
          </p>
          <p>
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
          </p>
          <p>
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
               This is article one. This is article one. This is article one.
          </p>
           `
     },
     'article-two' : {
          title : 'article two | Arjun Gangwar',
          heading : 'Article Two',
          date : '10 Feb, 2018',
          content : `
          <p>
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
          </p>
          <p>
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
          </p>
          <p>
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
              This is article two. This is article two. This is article two.
          </p>
           `
     },
     'article-three' : {
          title : 'article three | Arjun Gangwar',
          heading : 'Article Three',
          date : '15 Feb, 2018',
          content : `
          <p>
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
          </p>
          <p>
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
          </p>
          <p>
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
              This is article three. This is article three. This is article three.
          </p>
           `
     }
};


var createTemplate = function(data) {
     var htmlTemplate = `
     <!doctype HTMl>
     <html>
          <head>
               <title>
                    ${data.title}
               </title>
               <link href="ui/style.css"  type="text/css" rel="stylesheet">
               <meta name="viewport" content="width=device-width" inital-scale = "1">
          </head>
          <body>
               <div class = "container">
                    <a href = "/" >Home</a>
                    <hr/>
                    <h3>
                         ${data.heading}
                    </h3>
                    <div>
                         ${data.date}
                    </div>
                    <div>
                         ${data.content}
                    </div>
               </div>
          </body>
     </html>
     `
     return htmlTemplate;
}

app.get('/', function (req, res) {
     res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
     res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
     res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get("/:articleName", function(req, res) {
     var articleName = req.params.articleName;
     res.send(createTemplate(articles[articleName]));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
     console.log(`IMAD course app listening on port ${port}!`);
});
