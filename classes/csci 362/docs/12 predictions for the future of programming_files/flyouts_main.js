/**
 * @author jparshley
 */
//Code below is used to show/hide flyout menus

  $(function() {
//Blogs
    $('#navigationContent').each(function(){
      var hideDelay = 350;
      var hideDelayTimer = null;
      var showDelay = 350;
      var showDelayTimer = null;
      
      var trigger = $('#blogs', this);
      var popup = $('#blogs_dropDown', this);
      
      $([trigger.get(0),popup.get(0)]).mouseover(function() {
        if (hideDelayTimer) clearTimeout(hideDelayTimer);
        if (showDelayTimer) clearTimeout(showDelayTimer);

        showDelayTimer = setTimeout(function (){
          showDelayTimer = null;
          $('#domainNavigationLinks ul li a img').css('opacity','0');
          $('div.dropdown').hide();
          var bl = $("#blogs");
          var position = bl.position();
          $('div.dd_bl').css('left', (position.left-60));
          $('div.dd_bl').css('display', 'block');
        }, showDelay);
      }).mouseout(function(){
        if (hideDelayTimer) clearTimeout(hideDelayTimer);
        if (showDelayTimer) clearTimeout(showDelayTimer);
        
        hideDelayTimer = setTimeout(function (){
          hideDelayTimer = null;
          $('#domainNavigationLinks ul li a img').css('opacity','1');
          $('div.dd_bl').css('display', 'none');
        }, hideDelay);     
      });
    });    
//testCenter
    $('#navigationContent').each(function(){
      var hideDelay = 350;
      var hideDelayTimer = null;
      var showDelay = 350;
      var showDelayTimer = null;
      
      var trigger = $('#testCenter', this);
      var popup = $('#testCenter_dropDown', this);
      
      $([trigger.get(0),popup.get(0)]).mouseover(function() {
        if (hideDelayTimer) clearTimeout(hideDelayTimer);
        if (showDelayTimer) clearTimeout(showDelayTimer);

        showDelayTimer = setTimeout(function (){
          showDelayTimer = null;
          $('#domainNavigationLinks ul li a img').css('opacity','0');
          $('div.dropdown').hide();
          var tc = $("#testCenter");
          var position = tc.position();
          $('div.dd_tc').css('left', (position.left-60));
          $('div.dd_tc').css('display', 'block');
          $('div.imuCover').css('display', 'block'); 
          $('div.imu').css('z-index', '50');
        }, showDelay);
      }).mouseout(function(){
        if (hideDelayTimer) clearTimeout(hideDelayTimer);
        if (showDelayTimer) clearTimeout(showDelayTimer);
       
        hideDelayTimer = setTimeout(function (){
          hideDelayTimer = null;
          $('#domainNavigationLinks ul li a img').css('opacity','1');
          $('div.dd_tc').css('display', 'none'); 
          $('div.imuCover').css('display', 'none');
          $('div.imu').css('z-index', '50');
        }, hideDelay);      
      });
    });    
//whitepapers    
    $('#navigationContent').each(function(){
      var hideDelay = 350;
      var hideDelayTimer = null;
      var showDelay = 350;
      var showDelayTimer = null;
      
      var trigger = $('#whitepapers', this);
      var popup = $('#whitepapers_dropDown', this);
      
      $([trigger.get(0),popup.get(0)]).mouseover(function() {
        if (hideDelayTimer) clearTimeout(hideDelayTimer);
        if (showDelayTimer) clearTimeout(showDelayTimer);

        showDelayTimer = setTimeout(function (){
          showDelayTimer = null;
          $('#domainNavigationLinks ul li a img').css('opacity','0');
          $('div.dropdown').hide();
          var wp = $("#whitepapers");
          var position = wp.position();
          $('div.dd_wp').css('left', (position.left-410));
          $('div.dd_wp').css('display', 'block');
        }, showDelay);
      }).mouseout(function(){
        if (hideDelayTimer) clearTimeout(hideDelayTimer);
        if (showDelayTimer) clearTimeout(showDelayTimer);
        
        hideDelayTimer = setTimeout(function (){
          hideDelayTimer = null;
          $('#domainNavigationLinks ul li a img').css('opacity','1');
          $('div.dd_wp').css('display', 'none');
        }, hideDelay);      
      });      
    });
//webcasts    
    $('#navigationContent').each(function(){
      var hideDelay = 350;
      var hideDelayTimer = null;
      var showDelay = 350;
      var showDelayTimer = null;
      
      var trigger = $('#webcasts', this);
      var popup = $('#webcasts_dropDown', this);
      
      $([trigger.get(0),popup.get(0)]).mouseover(function() {
        if (hideDelayTimer) clearTimeout(hideDelayTimer);
        if (showDelayTimer) clearTimeout(showDelayTimer);

        showDelayTimer = setTimeout(function (){
          showDelayTimer = null;
          $('#domainNavigationLinks ul li a img').css('opacity','0');
          $('div.dropdown').hide();
          var wc = $("#webcasts");
          var position = wc.position();
          $('div.dd_wc').css('left', (position.left-410));
          $('div.dd_wc').css('display', 'block');  
          $('div.imuCover').css('display', 'block');
          $('div.imu').css('z-index', '50');
        }, showDelay);
      }).mouseout(function(){
        if (hideDelayTimer) clearTimeout(hideDelayTimer);
        if (showDelayTimer) clearTimeout(showDelayTimer);
        
        hideDelayTimer = setTimeout(function (){
          hideDelayTimer = null;
          $('#domainNavigationLinks ul li a img').css('opacity','1');
          $('div.dd_wc').css('display', 'none');      
          $('div.imuCover').css('display', 'none');
          $('div.imu').css('z-index', '50');
        }, hideDelay);      
      });      
    });


//events    
/*
    $('#navigationContent').each(function(){
      var hideDelay = 350;
      var hideDelayTimer = null;
      var showDelay = 350;
      var showDelayTimer = null;
      
      var trigger = $('#events', this);
      var popup = $('#events_dropDown', this);
      
      $([trigger.get(0),popup.get(0)]).mouseover(function() {
        if (hideDelayTimer) clearTimeout(hideDelayTimer);
        if (showDelayTimer) clearTimeout(showDelayTimer);

        showDelayTimer = setTimeout(function (){
          showDelayTimer = null;
          $('#domainNavigationLinks ul li a img').css('opacity','0');
          $('div.dropdown').hide();
          var ev = $("#events");
          var position = ev.position();
          $('div.dd_ev').css('left', (position.left-410));
          $('div.dd_ev').css('display', 'block');    
          $('div.imuCover').css('display', 'block');
          $('div.imu').css('z-index', '-20');
        }, showDelay);
      }).mouseout(function(){
        if (hideDelayTimer) clearTimeout(hideDelayTimer);
        if (showDelayTimer) clearTimeout(showDelayTimer);
        
        hideDelayTimer = setTimeout(function (){
          hideDelayTimer = null;
          $('#domainNavigationLinks ul li a img').css('opacity','1');
          $('div.dd_ev').css('display', 'none');      
          $('div.imuCover').css('display', 'none');
          $('div.imu').css('z-index', '5');
        }, hideDelay);      
      });      
    });
*/

//video    
    $('#navigationContent').each(function(){
      var hideDelay = 350;
      var hideDelayTimer = null;
      var showDelay = 350;
      var showDelayTimer = null;
      
      var trigger = $('#video', this);
      var popup = $('#video_dropDown', this);
      
      $([trigger.get(0),popup.get(0)]).mouseover(function() {
        if (hideDelayTimer) clearTimeout(hideDelayTimer);
        if (showDelayTimer) clearTimeout(showDelayTimer);

        showDelayTimer = setTimeout(function (){
          showDelayTimer = null;
          $('#domainNavigationLinks ul li a img').css('opacity','0');
          $('div.dropdown').hide();
          var vd = $("#video");
          var position = vd.position();
          $('div.dd_vd').css('left', (position.left-410));
          $('div.dd_vd').css('display', 'block');  
          $('div.imuCover').css('display', 'block');
          $('div.imu').css('z-index', '5');
        }, showDelay);
      }).mouseout(function(){
        if (hideDelayTimer) clearTimeout(hideDelayTimer);
        if (showDelayTimer) clearTimeout(showDelayTimer);
        
        hideDelayTimer = setTimeout(function (){
          hideDelayTimer = null;
          $('#domainNavigationLinks ul li a img').css('opacity','1');
          $('div.dd_vd').css('display', 'none');     
          $('div.imuCover').css('display', 'none');
          $('div.imu').css('z-index', '5');
        }, hideDelay);      
      });      
    });
//topics    
    $('#navigationContent').each(function(){
      var hideDelay = 350;
      var hideDelayTimer = null;
      var showDelay = 350;
      var showDelayTimer = null;
      
      var trigger = $('#topics', this);
      var popup = $('#topics_dropDown', this);
      
      $([trigger.get(0),popup.get(0)]).mouseover(function() {
        if (hideDelayTimer) clearTimeout(hideDelayTimer);
        if (showDelayTimer) clearTimeout(showDelayTimer);

        showDelayTimer = setTimeout(function (){
          showDelayTimer = null;
          $('#domainNavigationLinks ul li a img').css('opacity','0');
          $('div.dropdown').hide();
          var tp = $("#topics");
          var position = tp.position();
          $('div.dd_tp').css('left', (position.left-50));
          $('div.dd_tp').css('display', 'block');
          $('div.imuCover').css('display', 'block');
          $('div.imu').css('z-index', '5');
        }, showDelay);
      }).mouseout(function(){
        if (hideDelayTimer) clearTimeout(hideDelayTimer);
        if (showDelayTimer) clearTimeout(showDelayTimer);
        
        hideDelayTimer = setTimeout(function (){
          hideDelayTimer = null;
          $('#domainNavigationLinks ul li a img').css('opacity','1');
          $('div.dd_tp').css('display', 'none');
          $('div.imuCover').css('display', 'none');
          $('div.imu').css('z-index', '5');
        }, hideDelay);      
      });      
    });

//more    
    $('#navigationContent').each(function(){
      var hideDelay = 350;
      var hideDelayTimer = null;
      var showDelay = 350;
      var showDelayTimer = null;
      
      var trigger = $('#more', this);
      var popup = $('#more_dropDown', this);
      
      $([trigger.get(0),popup.get(0)]).mouseover(function() {
        if (hideDelayTimer) clearTimeout(hideDelayTimer);
        if (showDelayTimer) clearTimeout(showDelayTimer);

        showDelayTimer = setTimeout(function (){
          showDelayTimer = null;
          $('#domainNavigationLinks ul li a img').css('opacity','0');
          $('div.dropdown').hide();
          var mr = $("#more");
          var position = mr.position();
          $('div.dd_mr').css('left', (position.left-410));
          $('div.dd_mr').css('display', 'block');  
          $('div.imuCover').css('display', 'block');
          $('div.imu').css('z-index', '5');
        }, showDelay);
      }).mouseout(function(){
        if (hideDelayTimer) clearTimeout(hideDelayTimer);
        if (showDelayTimer) clearTimeout(showDelayTimer);
        
        hideDelayTimer = setTimeout(function (){
          hideDelayTimer = null;
          $('#domainNavigationLinks ul li a img').css('opacity','1');
          $('div.dd_mr').css('display', 'none');    
          $('div.imuCover').css('display', 'none');
          $('div.imu').css('z-index', '5');
        }, hideDelay);      
      });      
    });
  });