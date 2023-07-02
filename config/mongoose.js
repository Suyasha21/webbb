const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://21btc062:suyasha21092003@cluster0.sjprm92.mongodb.net/project')


  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


// var mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://21btc062:suyasha21092003@cluster0.sjprm92.mongodb.net/project');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback () {
//   console.log("h");
// });

// exports.test = function(req,res) {
//   res.render('test');
// };
