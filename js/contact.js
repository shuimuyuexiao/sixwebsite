    // Working Contact Form
    $('#contact-form').submit(function(e) {
        e.preventDefault(); // 防止預設提交

        var action = $(this).attr('action');
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var subject = $('#subject').val().trim();
        var comments = $('#comments').val().trim();
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // 驗證必填欄位
        if (name === "" || email === "" || comments === "" || subject === "") {
            $('#message').html('<div class="alert alert-danger">請填寫所有必填欄位！</div>').slideDown();
            return false;
        }

        // 驗證電子郵件格式
        if (!emailPattern.test(email)) {
            $('#message').html('<div class="alert alert-danger">請輸入有效的電子郵件地址！</div>').slideDown();
            return false;
        }

        // 隱藏訊息區，禁用提交按鈕
        $('#message').slideUp(500, function() {
            $('#message').hide();
            //$('#submit').attr('disabled', 'disabled');
        });

        $('#message').html('<div class="alert alert-success">訊息已成功送出，我們會盡快與您聯絡！</div>').slideDown();
        $('#contact-form')[0].reset();

        // $("#message").slideUp(750, function() {
        //     $('#message').hide();

        //     $('#submit')
        //         .before('')
        //         .attr('disabled', 'disabled');

        //     $.post(action, {
        //             name: $('#name').val(),
        //             email: $('#email').val(),
        //             comments: $('#comments').val(),
        //         },
        //         function(data) {
        //             document.getElementById('message').innerHTML = data;
        //             $('#message').slideDown('slow');
        //             $('#cform img.contact-loader').fadeOut('slow', function() {
        //                 $(this).remove()
        //             });
        //             $('#submit').removeAttr('disabled');
        //             if (data.match('success') != null) $('#cform').slideUp('slow');
        //         }
        //     );

        // });

        // return false;

    });

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation')
  
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    }, false)
  }())