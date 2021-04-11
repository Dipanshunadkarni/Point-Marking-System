var bcrypt = require('bcrypt');
// var alert = require('alert')
//---------------------------------------------signup page call------------------------------------------------------
exports.signup = async function(req, res){
    message = '';
    if(req.method == "POST"){

        var name =  req.body.firstname
        var email = req.body.email
        var uname = req.body.username
        var pass = req.body.password
        var role = req.body.role
    
       console.log('--------------',name,role)
 
       var hashedPass = await bcrypt.hash(pass,8)
       console.log('Hashed Pass : ',pass,hashedPass)
         var sql = "INSERT INTO `users`(`fullname`,`email`,`username`, `password`,`role`) VALUES('"+name+"','"+email+"','"+uname+"','"+hashedPass+"','"+role+"')";
   
         var query = db.query(sql, function(err, result) {
   
            message = "Succesfully! Your account has been created.";
            res.render('signup.ejs',{message:message});
         });
 
    } else {
      res.render('signup.ejs');
    }
 };
  
 //-----------------------------------------------login page call------------------------------------------------------
 exports.login = async function(req, res){
    var message = '';
    var sess = req.session; 
 
    if(req.method == "POST"){
       var post  = req.body;
       var name= post.username;
       var pass= post.password;
       var role = post.role;

      //  var hashedPass = await bcrypt.hash(pass,8)
      //  var comparePass = await bcrypt.compare(pass,hashedPass)
      //  console.log('Compare Pass : ',pass,comparePass)
      //  var hash = bcrypt.hashSync(pass, 8);
      //  const dcryptPassword = bcrypt.compare(pass, results[0].pass);
         var sql="SELECT * FROM `users` WHERE `username`='"+name+"' and `role` = '"+role+"'";                           
         db.query(sql, function(err, results){   
            
            if(results.length){
               req.session.userId = results[0].id;
               req.session.user = results[0];
               console.log(results[0].id);
               console.log('xaanasna',req.session.user.role);

               var dcrypt = bcrypt.compare(pass, results[0].pass)
               console.log('Decr',dcrypt)

               if(req.session.user.role == 'Manager'){
                  res.redirect('/home/manager');
               }else if(req.session.user.role == 'HR'){
                  res.redirect('/home/hr');
               }else if(req.session.user.role == 'Employer'){
                  res.redirect('/home/employer');
               }   
            }
            else{
               message = 'Wrong Credentials.';
               res.render('index.ejs',{message: message});
            }
         });
          
    } else {
       res.render('index.ejs',{message: message});
    }
            
 };
 //-----------------------------------------------Manager dashboard page functionality----------------------------------------------
            
 exports.dashboard_m = function(req, res, next){
            
    var user =  req.session.user.fullname;
    var role =  req.session.user.role;
    userId = req.session.userId;
    console.log('ddd='+userId);
    if(userId == null){
       res.redirect("/login");
       return;
    }
 
   var userData={}
   var sql="SELECT * FROM `users` WHERE  `role`='Employer'";
   // console.log(sql.q)
   db.query(sql, function(err, results){
      userData={data:results}
      res.render('dashboard_m.ejs', {user:user,role:role,userData:userData});    
      console.log("Emp----",userData)
   });      
 };

 //-----------------------------------------------HR dashboard page functionality----------------------------------------------
            
 exports.dashboard_h = function(req, res, next){
            
   var user =  req.session.user.fullname;
   var role =  req.session.user.role;
   userId = req.session.userId;
   console.log('ddd='+userId);
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var userData={}
   var sql="SELECT * FROM `users` WHERE  `role`='Employer'";
   // console.log(sql.q)
   db.query(sql, function(err, results){
      userData={data:results}
      res.render('dashboard_h.ejs', {user:user,role:role,userData:userData});    
      console.log("Emp----",userData)
   });

   // // var obj={};
   // var sql1="SELECT * FROM `allot_point`";

   // db.query(sql1, function(err, results){
   //       userData = {data:results}
   //       res.render('dashboard_h',{userData:userData});  
   //       console.log('Allot-------',userData) 
   // });
   
};

//-----------------------------------------------Employer dashboard page functionality----------------------------------------------
            
exports.dashboard_e = function(req, res, next){
            
   var user =  req.session.user.fullname;
   var role =  req.session.user.role;
   userId = req.session.userId;
   console.log('ddd='+userId);
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var userData={}
   var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";

   db.query(sql, function(err, results){
      userData={data:results}
      res.render('dashboard_e.ejs', {user:user,role:role,userData:userData}); 
      console.log("Emp----",userData)   
   });       
};

 //------------------------------------logout functionality----------------------------------------------
 exports.logout=function(req,res){
    req.session.destroy(function(err) {
       res.redirect("/login");
    })
 };


 //-----------------------------------------------Point Allot functionality----------------------------------------------
            
exports.allot = function(req, res, next){
            
   const userId = req.params.userId

   let sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";

   data = {}
   let qry = db.query(sql, function(err, results){
      if (err) throw err;
      data = {results:results[0]}
      res.render('point_allot.ejs', {title:'Allot Points to Employer',data:data});    
   });

};

exports.update = function(req, res, next){
   let message='';
   if(req.method == "POST"){
      let id = req.params.userId;
      let emp_name = req.body.emp_name;
      let attendance = req.body.attendance;
      let late_coming = -1 * (req.body.late_coming);
      let reason = req.body.reason;
      let behaviour = req.body.behaviour
      let work = req.body.work;
      let culture = req.body.culture;

      console.log('sasjka---------------->',id,emp_name,attendance,late_coming,reason,behaviour,work,culture)
      
      var sql = "UPDATE `users` SET `fullname`='"+emp_name+"',`attendance`='"
      +attendance+"',`late_coming`='"+late_coming+"',`reason`='"+reason+"',`behaviour`='"
      +behaviour+"',`work`='"+work+"',`culture`='"+culture+"' WHERE `id`='"+id+"'";
 
       var query = db.query(sql, function(err, result) {
          console.log(query.q);
          if(err) throw err;
 
          message = "Succesfully! Points Allocated to the Employer.";
          res.render('point_allot.ejs',{message:message});
       });
      
   }
}
 