const request = require('request');
const cheerio = require('cheerio');

const URL = 'http://sethetter.com';

request(URL, (err, response, body) => {
  if (err) throw err;

  // Load document contents into $ variable so we can interact with it as if we
  // were using jQuery in the browser!
  var $ = cheerio.load(body);

  var articles = $('.posts .post');

  articles.each((idx, article) => {
    var title = $(article).find('.post-title a').text().trim();
    var date = $(article).find('.post-date').text();

    console.log(`Title: ${title}`);
    console.log(`Date: ${date}\n`);
  });
});
