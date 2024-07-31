
// your parameter variables go here!
let guidePointX = 100;
let guidePointY = 150;
let treeLayerGap = -15;
let drawAStarAtTop = true;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  // Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

// Set wallpe color
function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  drawTree(guidePointX, guidePointY);
}

// Draw tree function
function drawTree(guidePointX, guidePointY) {

  // Draw Tree trunk
  fill(54, 35, 22);
  rect(guidePointX-10, guidePointY, 20, 50);

  // Set Tree top color
  fill(23, 156, 41);

  // Draw tree top layer 1
  triangle(guidePointX/2, guidePointY, guidePointX, guidePointY-100, guidePointX+50, guidePointY);

  // Draw tree top Layer 2 by duplicating the same trangle and shifting to top
  translate(0, treeLayerGap)
  triangle(guidePointX/2, guidePointY, guidePointX, guidePointY-100, guidePointX+50, guidePointY);

  // Draw tree top Layer 3 by duplicating the same trangle and shifting to top
  translate(0, treeLayerGap);
  triangle(guidePointX/2, guidePointY, guidePointX, guidePointY-100, guidePointX+50, guidePointY);

  // Draw a star on top of the tree
  if(drawAStarAtTop) {
    fill(247, 247, 62);
    drawStar(guidePointX, guidePointY-100, 2, 5);
  }
}

// Draw star function using custom shapes
function drawStar(x, y, outerRadius, innerRadius) {
  beginShape();
    // Manually defining the points for a star
    vertex(x, y - outerRadius);              // Top point
    vertex(x + innerRadius, y - innerRadius); // Upper right
    vertex(x + outerRadius, y);              // Right
    vertex(x + innerRadius, y + innerRadius); // Bottom right
    vertex(x, y + outerRadius);              // Bottom
    vertex(x - innerRadius, y + innerRadius); // Bottom left
    vertex(x - outerRadius, y);              // Left
    vertex(x - innerRadius, y - innerRadius); // Upper left
  endShape(CLOSE);
}

