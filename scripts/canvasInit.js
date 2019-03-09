function init()
{
  canvas = document.getElementById("gridContainer");
  canvas.width = $(window).width();
  canvas.height = $(window).height();
  canvasW = canvas.width;
  canvasH = canvas.height;

  /*
  if( canvas.getContext )
  {
    console.log("Success");
  }
  */
  updateHealth(0);
}