export function home(req, res){
    console.log(req.cookies);
    res.cookie('user_id', 56);
    // Sending sth directly to the browser
    // return res.end('<h1>Express is up for Codeial</h1>')
    return res.render('home', {
      title:"Home"
    });
}