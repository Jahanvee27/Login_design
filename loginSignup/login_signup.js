
    function show(param_div_id) {
      var id=document.getElementById(param_div_id).id
      if(id=="login_form"){
        document.getElementById('replace_login').innerHTML = document.getElementById(param_div_id).innerHTML;
      }
      else if(id=="replace_login"){
        document.getElementById('login_form').innerHTML = document.getElementById(param_div_id).innerHTML;
      }
      else if(id=="signup_form"){
        document.getElementById('replace_signup').innerHTML = document.getElementById(param_div_id).innerHTML;
      }
      else if(id=="replace_signup"){
        document.getElementById('signup_form').innerHTML = document.getElementById(param_div_id).innerHTML;
      }
    }
  