const User = require('../models/user');

const bodyParser = require('body-parser');
const usersController = require('../controllers/users_controller');
module.exports.profile=function(req, res){
    // return res.end('<h1>User Profile</h1>')
    return res.render('users',{
    title:"User"
    } );
}

//render the SignUp page
module.exports.signUp=function(req, res){
    return res.render('user_sign_up', {
        title:"Codeial | SignUp"
    })
}


//render the SignIn page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in', {
        title:"Codeial | SignIn"
    })
}


//get the signup data
module.exports.create = function(req, res){
if(req.body.password != req.body.confirm_password){
    return res.redirect('back');
}
User.findOne({email:req.body.email}, function(err, user){
    if(err){
        console.log('error in finding user in signing up');
        return
    }

    if(!user){
        User.create(req.body, function(err){
            if(err){
                console.log('error in creating user while signing up');
                return;
            }
            return res.redirect('/');
        })
    }
        else{
            return res.redirect('back');
          }
        
    
});
}

// //get the signin data
module.exports.createSession=function(req, res){
//steps to autenticate
//find the user
User.findOne({email:req.body.email}, function(err, user){
    if(err){
        console.log('Error in finding user while signing in ');
        return ;
    }
    if(user){
       if(user.password!=req.body.password){
        return res.redirect('back');
       }
       res.cookie('user_id', user.id);
       return res.redirect('/');
    }
    else{
        //handle user not found
        return res.redirect('back');
    }
});


}