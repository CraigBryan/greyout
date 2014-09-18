//Script to have nice caption html fade in over an image

(function($)
{
  jQuery.fn.greyout = function(options)
  {
    var entered = false;
    var greybox = null;
    var $this = this;

    var settings = $.extend({
      caption: "default greyout caption"
    }, options);

    var greyout = function()
    {
      if(!entered)
      {
        entered = true;
        var width = $this.width();
        var height = $this.height();
        var left = $this.offset().left;
        var top = $this.offset().top;
        var zIndex = $this.css('z-index');

        if(zIndex !== "auto")
        {
          zIndex = parseInt(zIndex) + 1;
        }

        var greybox_markup = "<div style='width:" + width 
          + "; height:" + height 
          + "; left:" + left 
          + "; top:" + top 
          + "; z-index:" + zIndex 
          + ";' class='greyout-box'></div>";

        greybox = $this.after(greybox_markup).next();
        greybox.html(options['caption']);
        greybox.mouseleave(greyin);
      }
    };

    var greyin = function()
    {
      greybox.remove();
      entered = false;
    };

    this.mouseenter(greyout);

    return this;
  };

}(jQuery));