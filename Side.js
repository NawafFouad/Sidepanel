


console.log("hey");

$(document).ready(function() {
  
  
  
    /* Toggle Modal
    ----------------------------------------*/
    function toggle_modal() {
        
        // when any button/link is clicked that has
        // the class 'js-trigger-modal'...
        $('.js-trigger-modal').on("click", function(e){
            
            // prevent the element's default behavior
            e.preventDefault();
            
            // get the value for the 'data-modal-source'
            // attribute for the element clicked
            var modal_content_source = $(this).data('modal-source');
            
            // match the value above with the corresponding
            // content modal wrapper, and then get the HTML
            var modal_inner_content = $('div[id=' + modal_content_source + ']').html(); 
            
            // insert the HTML above into the modal
            $('#modal-content').html('').append(modal_inner_content);
            
            // show the modal—add class to the body to reveal
            $('body').addClass('show-modal');
    
        });
        
        // close the modal when a 'dismiss' element 
        // or the overlay is clicked
        $('body').on('click', '.dismiss-modal, .modal .overlay', function(e) {
            // remove the class on the body that shows the modal
            e.preventDefault();
            $("body").removeClass("show-modal");
        });
    
    }
    toggle_modal();
      
      
      
      
      
      
      
      
    });
    
    
    