      var currentDiv;
   		var currentIndicator;
   		var indicators;

			var currentDiv_body;
   		var currentIndicator_body;
   		var indicators_body;

      function setTrayOpen(state) {
          if( state ) {
                $('#one-app').css('marginTop','40px');
              } else {
                $('#one-app').css('marginTop','0px');
              }
        }
          

      function setLoading(state) {
            if(state) {
              $('#one-app').fadeTo(0,0.33);
              $('.one-top-drawer').hide();
              $('#loadingIcon').show();
            } else {
              $('#one-app').fadeTo(0,1);
              $('#loadingIcon').hide();
              $('.one-top-drawer').show();
            } 
          }


      function loadOneStarter() {
        console.log('Loaded');

        $("#one-record-content").hide();
        $("#one-message").hide();
        $("#one-record-list").hide();

        $(".one-header-content").siblings().hide();
          currentDiv = $(".one-header-content").siblings().first();
          currentDiv.show();
          
          $(".js-indicator-head-a").removeClass('bg-10');
          $(".js-indicator-head-a").removeClass('ig_2');
          currentIndicator = $(".js-indicator-head").siblings().first();
          currentIndicator.children(0).addClass('bg-10');
          currentIndicator.children(0).addClass('ig-2');
          currentIndicator.children(0).removeClass('bg-9');
          currentIndicator.children(0).removeClass('is_4');
        

          $(".one-body-content").siblings().hide();
          currentDiv_body = $(".one-body-content").siblings().first();
          currentDiv_body.show();
          
          $(".js-indicator-body-a").removeClass('bg-10');
          $(".js-indicator-body-a").removeClass('ig_2');
          currentIndicator_body = $(".js-indicator-body").siblings().first();
          currentIndicator_body.children(0).addClass('bg-10');
          currentIndicator_body.children(0).addClass('ig-2');
          currentIndicator_body.children(0).removeClass('bg-9');
          currentIndicator_body.children(0).removeClass('is_4');

          $('#one-dark-header').swipe( {
            allowPageScroll:"vertical",
            excludedElements: "",
            swipe:function(event, direction, distance, duration, fingerCount) {
               if(direction == 'left') {
                  $(".one-header-content").siblings().hide();
                  $(".js-indicator-head-a").removeClass('bg-10');
                  $(".js-indicator-head-a").removeClass('ig_2');
                  $(".js-indicator-head-a").addClass('bg-9');
                  $(".js-indicator-head-a").addClass('is_4');
                  
                  currentDiv = currentDiv.next();
                  currentIndicator = currentIndicator.next();
                  if(!currentDiv.hasClass('one-header-content')) { 
                      currentDiv = $(".one-header-content").siblings().first(); 
                      currentIndicator = $(".js-indicator-head").siblings().first();
                  }
                  currentDiv.show();
                  currentIndicator.children(0).addClass('bg-10');
                  currentIndicator.children(0).addClass('ig-2');
                  currentIndicator.children(0).removeClass('bg-9');
                  currentIndicator.children(0).removeClass('is_4');
        
              }
              if(direction == 'right') {
                  $(".one-header-content").siblings().hide();
                  $(".js-indicator-head-a").removeClass('bg-10');
                  $(".js-indicator-head-a").removeClass('ig_2');
                  $(".js-indicator-head-a").addClass('bg-9');
                  $(".js-indicator-head-a").addClass('is_4');
                  
                  currentDiv = currentDiv.prev();
                  currentIndicator = currentIndicator.prev();
                  if(!currentDiv.hasClass('one-header-content')) { 
                    currentDiv = $(".one-header-content").last(); 
                    currentIndicator = $(".js-indicator-head").siblings().last();
                    }
                  currentDiv.show();
                  currentIndicator.children(0).addClass('bg-10');
                  currentIndicator.children(0).addClass('ig-2');
                  currentIndicator.children(0).removeClass('bg-9');
                  currentIndicator.children(0).removeClass('is_4');
              }
              event.preventDefault();
              },
              threshold:0,
              fingers:'all'
         }); 


        $('#one-body-carousel, button, input').swipe( {
            allowPageScroll:"vertical",
            excludedElements: "",
            swipe:function(event, direction, distance, duration, fingerCount) {
               if(direction == 'left') {
                  $(".one-body-content").siblings().hide();
                  $(".js-indicator-body-a").removeClass('bg-10');
                  $(".js-indicator-body-a").removeClass('ig_2');
                  $(".js-indicator-body-a").addClass('bg-9');
                  $(".js-indicator-body-a").addClass('is_4');
                  
                  currentDiv_body = currentDiv_body.next();
                  currentIndicator_body = currentIndicator_body.next();
                  if(!currentDiv_body.hasClass('one-body-content')) { 
                      currentDiv_body = $(".one-body-content").siblings().first(); 
                      currentIndicator_body = $(".js-indicator-body").siblings().first();
                      }
                  currentDiv_body.show();
                  currentIndicator_body.children(0).addClass('bg-10');
                  currentIndicator_body.children(0).addClass('ig-2');
                  currentIndicator_body.children(0).removeClass('bg-9');
                  currentIndicator_body.children(0).removeClass('is_4');
        
               }
               if(direction == 'right') {
                  $(".one-body-content").siblings().hide();
                  $(".js-indicator-body-a").removeClass('bg-10');
                  $(".js-indicator-body-a").removeClass('ig_2');
                  $(".js-indicator-body-a").addClass('bg-9');
                  $(".js-indicator-body-a").addClass('is_4');
                  
                  currentDiv_body = currentDiv_body.prev();
                  currentIndicator_body = currentIndicator_body.prev();
                  if(!currentDiv_body.hasClass('one-body-content')) { 
                    currentDiv_body = $(".one-body-content").last(); 
                    currentIndicator_body = $(".js-indicator-body").siblings().last();
                    }
                  currentDiv_body.show();
                  currentIndicator_body.children(0).addClass('bg-10');
                  currentIndicator_body.children(0).addClass('ig-2');
                  currentIndicator_body.children(0).removeClass('bg-9');
                  currentIndicator_body.children(0).removeClass('is_4');
                }
                //    event.preventDefault();
              },
              threshold:0,
              fingers:'all'
          }); 


      }