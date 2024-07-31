
// your parameter variables go here!
let guidePointX = 100;
let guidePointY = 150;
let treeLayerGap = -15;
let drawAStarAtTop = true;
let drawSnowflakes = true;
let drawBulbs = true;
// let treeTopColor = color(23, 156, 41); // Defined inside the drawTree
let snowflakeWidth = 5;
let snowflakeHeight = 5;

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
  let treeTopColor = color(23, 156, 41);
  // Draw Tree trunk
  fill(54, 35, 22);
  rect(guidePointX-10, guidePointY, 20, 50);

  // Set Tree top color
  fill(treeTopColor);

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

  // Draw snowflakes on the tree on multiple positions if enabled
  if (drawSnowflakes) {
    drawSnowflake(guidePointX, guidePointY - 80);
    drawSnowflake(guidePointX - 7, guidePointY - 70);
    drawSnowflake(guidePointX + 8, guidePointY - 50);
    drawSnowflake(guidePointX - 10, guidePointY - 40);
    drawSnowflake(guidePointX + 10, guidePointY - 20);
    drawSnowflake(guidePointX - 30, guidePointY - 20);
    drawSnowflake(guidePointX - 40, guidePointY - 10);
    drawSnowflake(guidePointX + 40, guidePointY - 12);
    drawSnowflake(guidePointX - 30, guidePointY - 2);
    drawSnowflake(guidePointX + 30, guidePointY + 10);
    drawSnowflake(guidePointX - 20, guidePointY + 20);
    drawSnowflake(guidePointX - 14, guidePointY + 35);
    drawSnowflake(guidePointX - 14, guidePointY + 10);
    drawSnowflake(guidePointX + 14, guidePointY + 20);
    drawSnowflake(guidePointX + 25, guidePointY + 25);
  }

  // Draw bulbs on the tree on multiple positions with different colors if enabled
  if (drawBulbs) {
    drawGlowingBulb(guidePointX + 10, guidePointY - 30, 4, color(255, 255, 255));
    drawGlowingBulb(guidePointX + 20, guidePointY - 40, 4, color(219, 247, 79));
    drawGlowingBulb(guidePointX - 20, guidePointY - 30, 4, color(247, 90, 79));
    drawGlowingBulb(guidePointX - 30, guidePointY + 10, 4, color(79, 185, 247));
    drawGlowingBulb(guidePointX + 35, guidePointY + 20, 4, color(255, 255, 255));
    drawGlowingBulb(guidePointX + 10, guidePointY + 15, 4, color(79, 185, 247));
    drawGlowingBulb(guidePointX - 35, guidePointY + 20, 4, color(219, 247, 79));
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

// Draw snowfakes function
function drawSnowflake(x, y) {
  fill(255, 255, 255);
  stroke(255, 255, 255);
  ellipse(x, y, snowflakeWidth, snowflakeHeight);  
  line(x - 4, y, x + 4, y);
  line(x, y - 4, x, y + 4);
  line(x - 2.5, y - 2.5, x + 2.5, y + 2.5);
  line(x - 2.5, y + 2.5, x + 2.5, y - 2.5);
}

// Draw glowing bulbs function
function drawGlowingBulb(positionX, positionY, bulbRadius, bulbColor) {
  noStroke();
  // Extract red, gree, blue values from the original bulb color
  let redValue = red(bulbColor);
  let greenValue = green(bulbColor);
  let blueValue = blue(bulbColor);
  // Drawing the glow around the bulb using ellipse with different alpha values
  // This loop draw multiple ellipse around the bulb with different alpha values and same color
  for (let glowRadius = 1; glowRadius < bulbRadius * 3; glowRadius++) {
    fill(redValue, greenValue, blueValue, glowRadius * 3);
    ellipse(positionX, positionY, glowRadius);
  }
  // Drawing the bulb
  fill(bulbColor);
  ellipse(positionX, positionY, bulbRadius);
}

