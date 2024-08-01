// your parameter variables go here!
let drawAStarAtTop = true;  // if draw a star at the top of the tree
let drawSnowflakes = true;  // if draw snowflakes on the tree
let drawBulbs = true;  // if draw bulbs on the tree
let addGiftBox = true; // if draw gift boxes on the background
let addCherry = true;  // if draw cherries on the background
let snowflakeWidth = 5; // snowflake width
let snowflakeHeight = 5;  // snoflake height

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  // Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

// Set the wallpaper background color
function wallpaper_background() {
  let darkBlue = color(1, 25, 64);
  let honeydewGreen = color(240, 255, 240);
  let darkGreen = color(9, 46, 9);
  let white = color(245, 247, 247);
  let lightpink = color(245, 223, 220);
  let yellow = color(240, 203, 70);
  let coolblue = color(139, 193, 232);
  let purple = color(108, 32, 189);
  let magenta = color(115, 6, 82);
  background(darkBlue); // darkblue background
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let guidePointX = 100;  // guide point for all the objects x cordinate
  let guidePointY = 150;  // guide point for all the objects y cordinate
  // Draw the main xmas tree
  drawTree(guidePointX, guidePointY);

  // Add wrapped gift boxes to the background
  if(addGiftBox) {
    push();
    drawGiftBox(guidePointX, guidePointY);
    translate(120, 0);
    drawGiftBox(guidePointX, guidePointY);
    pop();
  }

  // Add cheeries to the background
  if (addCherry) {
    push();
    drawCherry(guidePointX + 130, guidePointY - 30);
    translate(140, 0);
    drawCherry(guidePointX + 130, guidePointY - 30);
    translate(-30, -80);
    drawCherry(guidePointX + 130, guidePointY- 30);
    translate(-100, -10);
    drawCherry(guidePointX + 130, guidePointY- 30);
    pop();
  }
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
  push();
  translate(0, -15)
  triangle(guidePointX/2, guidePointY, guidePointX, guidePointY-100, guidePointX+50, guidePointY);
  pop();

  // Draw tree top Layer 3 by duplicating the same trangle and shifting to top
  push();
  translate(0, -30);
  triangle(guidePointX/2, guidePointY, guidePointX, guidePointY-100, guidePointX+50, guidePointY);
  pop();

  // Draw a star on top of the tree
  if(drawAStarAtTop) {
    fill(247, 247, 62);
    drawStar(guidePointX, guidePointY - 130, 2, 5);
  }

  // Draw snowflakes on the tree on multiple positions if enabled
  if (drawSnowflakes) {
    drawSnowflake(guidePointX, guidePointY - 110);
    drawSnowflake(guidePointX - 7, guidePointY - 100);
    drawSnowflake(guidePointX + 8, guidePointY - 80);
    drawSnowflake(guidePointX - 10, guidePointY - 70);
    drawSnowflake(guidePointX + 10, guidePointY - 50);
    drawSnowflake(guidePointX - 30, guidePointY - 50);
    drawSnowflake(guidePointX - 40, guidePointY - 40);
    drawSnowflake(guidePointX + 40, guidePointY - 42);
    drawSnowflake(guidePointX - 30, guidePointY - 32);
    drawSnowflake(guidePointX + 30, guidePointY - 10);
    drawSnowflake(guidePointX - 20, guidePointY);
    drawSnowflake(guidePointX - 14, guidePointY + 5);
    drawSnowflake(guidePointX - 14, guidePointY - 10);
    drawSnowflake(guidePointX + 14, guidePointY - 10);
    drawSnowflake(guidePointX + 25, guidePointY - 75);
  }

  // Draw bulbs on the tree on multiple positions with different colors if enabled
  if (drawBulbs) {
    drawGlowingBulb(guidePointX + 10, guidePointY - 95, 4, color(79, 185, 247));
    drawGlowingBulb(guidePointX - 10, guidePointY - 80, 4, color(219, 247, 79));
    drawGlowingBulb(guidePointX + 10, guidePointY - 30, 4, color(255, 255, 255));
    drawGlowingBulb(guidePointX + 20, guidePointY - 40, 4, color(219, 247, 79));
    drawGlowingBulb(guidePointX - 20, guidePointY - 30, 4, color(247, 90, 79));
    drawGlowingBulb(guidePointX - 30, guidePointY - 40, 4, color(79, 185, 247));
    drawGlowingBulb(guidePointX + 35, guidePointY - 20, 4, color(255, 255, 255));
    drawGlowingBulb(guidePointX + 10, guidePointY - 15, 4, color(79, 185, 247));
    drawGlowingBulb(guidePointX - 35, guidePointY - 20, 4, color(219, 247, 79));
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

// Draw gift box function
function drawGiftBox(guidePointX, guidePointY) {
  // Draw the red gift box
  noStroke(); 
  fill(255, 0, 0);
  rect(guidePointX - 80, guidePointY + 20, 30, 20); 
  
  // Draw the horizontal ribbon
  fill(163, 150, 34); 
  rect(guidePointX - 80, guidePointY + 25, 30, 5); 
  
  // Draw the vertical ribbon
  rect(guidePointX - 68, guidePointY + 20, 5, 20); 

}

// Draw cherries function
function drawCherry(guidePointX, guidePointY) {
   // Draw cherry stem
   stroke(139, 69, 19);
   strokeWeight(2);
   line(guidePointX - 200, guidePointY - 20, guidePointX - 200, guidePointY - 10);
 
   fill(34, 139, 34);
   noStroke();
   ellipse(guidePointX - 200, guidePointY - 20, 4, 8);
 
   // Draw cherry body
   noStroke();
   fill(255, 0, 0);
   ellipse(guidePointX - 200, guidePointY - 5, 15, 15);
 
   // Draw cherry highlight
   fill(255, 150, 150);
   ellipse(guidePointX - 198, guidePointY - 8, 5, 5);
}