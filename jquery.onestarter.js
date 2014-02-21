//this is the plugin / base code
    (function($){
       $.fn.oneStarter = function(location){
                function _s1(el,location) {
                  this.element = el;
                  this.loaded = false;
                  this.location = location;
                }
                _s1.prototype.overrideStyle = function() {
                        //update the basic CSS
                        
                        //update body
                        $('body').addClass('sg-phone--content clear ng-scope');
                        if(this.location == 'record-action' || this.location == 'global-action' ) {
                          if(document.URL.indexOf('apex') < 0) { //this is Chatter
                           
                            this.element.css('background-color','white');
                            this.element.css('height','250px');
                            this.element.css('overflow-y','auto');
                            this.element.css('overflow-','auto');
                            this.element.css('overflow','auto');

                          } else { //this is one.app



                          }

                          $('body').css('margin-right','10px');

                        }
                        if(this.location == 'app') {
                          $('body').css('margin','10px');
                          $('body').css('margin-right','20px');
                          }
                        this.element.addClass('one-app-dynamic');

                        //font styles
                        $('.one-app-dynamic .simple-bold').addClass('man f3 text-color-1 fw-semibold');

                        //record icons
                        $('.one-app-dynamic .icon').addClass('bgs-100 a-mid mhm sq-30');

                        //buttons
                        $('.one-app-dynamic button').addClass('btn bg-secondary-btn btn--secondary pvs size-full brm border border--2 text-color-4 f3 fw-semibold');
                        $('.one-app-dynamic button').css('height','32px');
                        
                        $('.one-app-dynamic .btn').addClass('btn bg-secondary-btn btn--secondary pvs size-full brm border border--2 text-color-4 f3 fw-semibold');
                        $('.one-app-dynamic .btn').css('height','32px');
                        
                        //lookup icons dont really work
                        $('.one-app-dynamic .lookupIcon').css('display','none');
                                                

                        //fields and text fields
                        $('.one-app-dynamic section').addClass('one-field-section');
                        $('.one-app-dynamic :text').addClass('mbm size-full phm pvm input input--default input--ph-1 input--focus-1');
                        $('.one-app-dynamic :radio').addClass('radio radio--default radio--states-1 brc mrs bg-secondary-btn sq-22 a-mid dib');
                        $('.one-app-dynamic textarea').addClass('mbm size-full phm pvm input input--default input--ph-1 input--focus-1');
                        $('.one-app-dynamic select').addClass('mbm size-full phm pvm input input--default input--ph-1 input--focus-1');
                        
                        $('.one-app-dynamic .lookup').before('<label class="size-full icon-utility-search pos-abs label--lookup"><span class="dn">Lookup</span></label>');
                        $('.one-app-dynamic .lookupInput :text').before('<label class="size-full icon-utility-search pos-abs label--lookup"><span class="dn">Lookup</span></label>');

                        //divs and sections
                        $('.one-app-dynamic article').addClass('mam bg-1 border border--3 brm');
                        $('.one-app-dynamic .padded').addClass('pam mtn');
                        $('.one-app-dynamic article header').addClass('clear pam border-bottom border--8');
                        $('.one-app-dynamic article header h1').addClass('fl man fw-normal f5 text-color-1');



                        //lists
                        $('.one-app-dynamic ul.list-simple').addClass('list-plain fw-normal bg-2 man pa');
                        $('.one-app-dynamic ul').css('padding-left','0px');
                        $('.one-app-dynamic ul.list-simple li').addClass('active--list-1 pam text-color-1 f4 border-bottom border--3');
                        $('.one-app-dynamic yl.list-plain li').addClass('f5 text-color-2');

                        //a
                        $('.one-app-dynamic a.link-right').addClass('fr');
                        $('.one-app-dynamic span.link-label').addClass('fl f5');
                        $('.one-app-dynamic span.link-icon-right').addClass('lh-16 fl mls f6 text-color-2');

                        //create carousel divs
                        //this.setCarousel($('div#one-carousel'));
                    }
               _s1.prototype.close = function() {
                        Sfdc.canvas.publisher.publish({name: "publisher.close",payload:{ refresh:"true" }});
                    }  
               _s1.prototype.enableSubmit = function(callback) {
                        if(document.URL.indexOf('apex') < 0) {

                             this.element.append('<button id="dyn_one_submit">Submit</button>');
                             $('#dyn_one_submit').css('position','fixed');
                             $('#dyn_one_submit').css('right','5px');
                             $('#dyn_one_submit').css('top','5px');
                             $('#dyn_one_submit').addClass('btn bg-secondary-btn btn--secondary pvs size-full brm border border--2 text-color-4 f3 fw-semibold');
                             $('#dyn_one_submit').css('height','32px');
                             $('#dyn_one_submit').css('width','75px');
                             
                             $('#dyn_one_submit').click(callback);

                        } else { //one.app

                             Sfdc.canvas.publisher.publish({name: "publisher.setValidForSubmit", payload:"true"});
                             Sfdc.canvas.publisher.subscribe({name: "publisher.post", onData:function(e) {
                                callback();
                             }});

                        }
                       
                    
                    }
                _s1.prototype.disableSubmit = function() {
                        if(document.URL.indexOf('apex') < 0) {

                             $('#dyn_one_submit').remove();

                        } else { //one.app
                            
                            Sfdc.canvas.publisher.publish({name: "publisher.setValidForSubmit", payload:"false"});
                            Sfdc.canvas.publisher.unsubscribe({name: "publisher.post"});

                        }
                    }

                _s1.prototype.addError = function(ele) {
                    if(ele == null) {
                      ele = this.element;
                    }
                    ele.addClass('input--error');
                }
                _s1.prototype.removeError = function(ele) {
                    if(ele == null) {
                      ele = this.element;
                    }
                    ele.removeClass('input--error');
                }
                _s1.prototype.carousel = function(ele) {
                    if(ele == null) {
                      ele = this.element;
                    }
                    ele.addClass('one-dark-body');

                    //create parent div
                    var dark_header = ele.wrap("<div id='one-body-carousel' class='one-body-divs'></div>");
                    
                    //stye carousel divs
                    ele.children('div').addClass('one-body-content');
                    
                    //create pagination list
                    var pag_ul = ele.parent().before('<ul class="list-horizontal" style="text-align: center"></ul>');
                    var count = ele.children('div').length;

                    for(var x = 0; x < count; x++) {
                      ele.parent().prev().append('<li class="sq-14 lh-14 a-mid js-indicator-body"><a href="javascript:selectCDiv('+x+')" class="sq-7 bg-9 brc is_4 js-indicator-body-a" ><span class="tha">-+-</span></a></li>');
                      }

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
    
                    
                    $('#one-body-carousel').swipe( {
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
                        $.event.trigger({
                          type: 'carousel_change',
                          message: currentDiv_body.attr('id'),
                          time: new Date()
                          });
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
                            $.event.trigger({
                          type: 'carousel_change',
                          message: currentDiv_body.attr('id'),
                          time: new Date()
                          });
                          }
                          //    event.preventDefault();
                        },
                        threshold:100,
                        fingers:'all'
                    });
               } 
              var js1 = new _s1(this,location);
              js1.overrideStyle();
              return js1;
           
       }
     
    })(jQuery);



    function selectCDiv(index) {
        $(".one-body-content").siblings().hide();
        currentDiv_body = $(".one-body-content").siblings().eq(index);
        currentDiv_body.show();
        
        $(".js-indicator-body-a").removeClass('bg-10');
        $(".js-indicator-body-a").removeClass('ig_2');
        $(".js-indicator-body-a").addClass('bg-9');
        $(".js-indicator-body-a").addClass('is_4');
                            
        currentIndicator_body = $(".js-indicator-body").siblings().eq(index);
        currentIndicator_body.children(0).addClass('bg-10');
        currentIndicator_body.children(0).addClass('ig-2');
        currentIndicator_body.children(0).removeClass('bg-9');
        currentIndicator_body.children(0).removeClass('is_4');
    
    }