
$("#login").on("click", function(event) {

   event.preventDefault();
    var emailData = $("#exampleInputEmail1").val().trim();
    var passwordData = $("#exampleInputPassword1").val().trim();

    var formData = {
        Email: emailData,
        Password: passwordData
    };

    $.ajax("/logon", {
      type: "POST",
      data: formData
    }).then(
      function(result) {
        if (result !== "") {
          window.location = "/content/" + result.id;
          // renderContent(result);
        }
      }
    );
});

var renderContent = function(content) {
  console.log("Content from renderContent Function");
  console.log(content);
  $.render("/content", content);
};



$("#createUser").on("click", function(event) {
    
    event.preventDefault();
    var first_name = $("#firstNameInput").val().trim();
    var last_name = $("#lastNameInput").val().trim();
    // var sex = $("#firstNameInput").val();
    var age = $("#age").val().trim();
    var tag_line = $("#tagline").val().trim();
    var email = $("#InputEmail").val().trim();
    var password = $("#InputPassword").val().trim();
    var sms_phone = $("#phoneNumber").val().trim();
    var profile_pic = $("#exampleInputFile").val().trim();
    if (age === "") {
      age = 18;
    }

    console.log(email);
    console.log(password);

    var newUser = {
      first_name: first_name,
      last_name: last_name,
      // Gender: sex,
      age: age,
      tag_line: tag_line,
      user_name: email,
      password: password,
      sms_phone: sms_phone,
      profile_pic: profile_pic
    };

    console.log(newUser);

    // Send the POST request.
    $.ajax("/user", {
      type: "POST",
      data: newUser
    }).then(
      function(result) {
        // console.log("result:")
        // console.log(result.id);
      //   $.ajax("/content", {
      //   type: "POST",
      //   data: result
      // });
      window.location = "/content/" + result.id;
       
        // console.log("added new user");
        // // renderContent(result);
        // console.log(result);
        // app.get("/content", result);
        // Reload the page to get the updated list
        // location.reload();

      }
    );
  });