//Script to have nice caption text fade in over an image
//TODO remove jQuery dependency
//TODO is custom attribute for img best way to go?

var Greyout = new Object();

jQuery(document).ready(function() {
  console.log("READY!");
  console.log("SET!");
  console.log("GO!");
  Greyout.init(".test-image");
});

Greyout.init = function(selector, html)
{
  Greyout.element = jQuery(selector);
  Greyout.element.mouseenter(Greyout.greyout);
  Greyout.html = html;
};

Greyout.greyout = function() 
{
  if(!Greyout.entered)
  {
    Greyout.entered = true;
    var width = Greyout.element.width();
    var height = Greyout.element.height();
    var left = Greyout.element.offset().left;
    var top = Greyout.element.offset().top;
    var zIndex = Greyout.element.css('z-index');
    var text = Greyout.element.attr('data-greyout');

    if(zIndex !== "auto")
    {
      zIndex = parseInt(zIndex) + 1;
    }

    var greybox = "<div style='width:" + width 
      + "; height:" + height 
      + "; left:" + left 
      + "; top:" + top 
      + "; z-index:" + zIndex 
      + ";' class='greyout'></div>";

    Greyout.greybox = Greyout.element.after(greybox).next();
    Greyout.greybox.html("<p>" + text +"</p>");
    Greyout.greybox.mouseleave(Greyout.greyin);
  }
};

Greyout.greyin = function()
{
  Greyout.greybox.remove();
  Greyout.entered = false;
};