jQuery(document).ready(function($) {
	
	$(".myBtn").click(function(){

		$(".feedback, .fade").fadeTo('slow', 0.8);
	});

	$(".closeBtn").click(function() {
			
		$(".feedback, .fade").fadeOut('slow');
	});

    /*Form validate*/

    $('input#name, input#phone, input#email, textarea#message').unbind().blur( function(){

         var id = $(this).attr('id');
         var val = $(this).val();

       switch(id)
       {
             // Проверка name
             case 'name':
                var rv_name = /^[a-zA-Zа-яА-Я]+$/;

                if(val.length > 2 && rv_name.test(val) ){
                   $(this).removeClass('error').addClass('success');
              	}

                else
                {
                   $(this).removeClass('success').addClass('error');
                   $(this).attr('placeholder', 'Name is mandatory field');
                }
            break;

			// Проверка phone
            case 'phone':
                var rv_phone = /^([+]?[0-9\s-\(\)]{3,25})*$/i;

                if(val.length > 11 && rv_phone.test(val) ){
                   $(this).removeClass('error').addClass('success');
              	}

                else
                {
                   $(this).removeClass('success').addClass('error');
                   $(this).attr('placeholder', 'Phone is mandatory field');
                }
            break;

           // Проверка email
           case 'email':
               var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
               if(val != '' && rv_email.test(val))
               {
                  $(this).removeClass('error').addClass('success');
               }
               else
               {
                  $(this).removeClass('success').addClass('error');
                  $(this).attr('placeholder', 'Email is mandatory field');
              	}
           break;

          // Проверка message
          case 'message':
              if(val != '' && val.length < 100)
              {
                 $(this).removeClass('error').addClass('success');
              }
              else
              {
                 $(this).removeClass('success').addClass('error');
                 $(this).attr('placeholder', 'Message is mandatory field');
              }
          break;
       } 

     }); 

     $('form#myForm').submit(function(e){

         e.preventDefault();

         console.log($('.success').length);
       
        if($('.success').length == 4)
        {
         	return alert("Ok");
        }
       else
       {
        	return alert("False");
       }
   }); 

});