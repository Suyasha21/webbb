import User from '../models/user';

import bodyParser from 'body-parser';
import usersController from '../controllers/users_controller';
export function profile(req, res){
    // return res.end('<h1>User Profile</h1>')
    return res.render('users',{
    title:"User"
    } );
}

//render the SignUp page
export function signUp(req, res){
    return res.render('user_sign_up', {
        title:"Codeial | SignUp"
    })
}


//render the SignIn page
export function signIn(req, res){
    return res.render('user_sign_in', {
        title:"Codeial | SignIn"
    })
}


//get the signup data
export function create(req, res){
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
            return res.redirect('/users/sign-in');
        })
    }
        else{
            return res.redirect('back');
          }
        
    
});
}

// //get the signin data
// module.exports.createSession=function(req, res){
// //steps to autenticate
// //find the user
// User.findOne({email:req.body.email}, function(err, user){
//     if(err){
//         console.log('Error in finding user while signing in ');
//         return ;
//     }
//     if(user){
//        if(user.password!=req.body.password){
//         return res.redirect('back');
//        }
//        res.cookie('user_id', user.id);
//        return res.redirect('/profile');
//     }
//     else{
//         //handle user not found
//         return res.redirect('back');
//     }
// });
export function createSession(req, res){
    return res.redirect('/');
}

