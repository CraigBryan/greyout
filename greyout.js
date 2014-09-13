//Script to have nice caption text fade in over an image
//TODO remove jquery dependency?

function Greyout(obj, captionHtml)
{
  var that = this;

  this.greyout = function() 
  {
    if(!that.entered)
    {
      that.entered = true;
      var width = that.element.width();
      var height = that.element.height();
      var left = that.element.offset().left;
      var top = that.element.offset().top;
      var zIndex = that.element.css('z-index');
      var text = that.element.attr('data-greyout');

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

      that.greybox = that.element.after(greybox_markup).next();
      that.greybox.html(captionHtml);
      that.greybox.mouseleave(that.greyin);
    }
  };

  this.greyin = function()
  {
    that.greybox.remove();
    that.entered = false;
  };

  this.element = null;
  this.id = null;
  this.entered = false;
  this.greybox = null;

  this.element = obj;
  this.element.mouseenter(this.greyout);
}

function check()
{
  console.log(greyouts);
}