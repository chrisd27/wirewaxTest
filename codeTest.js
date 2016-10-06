//      INITIAL CODE - DON'T EDIT THIS    //
var myTag = $('#myTag');
var myOverlay = $('#myOverlay');
var tagStartTime = 2000;
var tagDuration = 5000;
var tagAnimateOutTime = 1000;

function showTag() {
  myTag.addClass('show');
  myTag.show();
  showTagContent();
}

function animateOutTag() {
  myTag.addClass('animate-out');
  animateOutTagContent();
}

function hideTag() {
  myTag.removeClass('show');
  myTag.removeClass('animate-out');
  myTag.hide();
  hideTagContent();
}

function showOverlay() {
  myOverlay.addClass('show');
  myOverlay.show();
  showOverlayContent();
}

function closeOverlay() {
  myOverlay.addClass('animate-out');
  animateOutOverlayContent();
  setTimeout(function() {
    myTag.removeClass('show');
    myTag.removeClass('animate-out');
    myOverlay.hide();
    hideOverlayContent();
  }, 1000);
}

myTag.click(showOverlay);
setTimeout(showTag, tagStartTime);
setTimeout(hideTag, tagStartTime + tagDuration);
setTimeout(animateOutTag, tagStartTime + tagDuration - tagAnimateOutTime);
//     END OF INITIAL CODE      //

/*

DESCRIPTION:

This is a challenge exercise for WIREWAX where we test your HTML, CSS, Javascript and creative skills. Please read the rules and challenges goals. If you have any question, don't hesitate to email us. 
Fork this jsfiddle or create a github project and email us the url in the end of the exercise. 
Good luck :)

RULES:
 - You can only use Jquery and Raphael
 - You can't change the initial Javascript code
 - You can't change the default HTML. All your html must be created and manipulated with Javascript
 - You can't change the default CSS. You can only add/edit CSS to your new elements
 - We recomend using something like http://readysetraphael.com/ to convert the svg to raphael
 - You can get the svg from this url: http://edge-assets.wirewax.com/creativeData/locationMarker.svg 
 - Write your code in the end where you can use the 3 function already there

CHALLENGE GOALS:
 - create and style all the tag content provided in the pdf 
 - the tag content should be horizontaly and verticaly centered inside the myTag element
 - the tag content should animate in from size 0 and expand to the default size and animate out in the reverse way
 - hover effect described in the pdf
 - create an overlay with dummy information about London. You can take ideas from current Wirewax overlays
 - overlay should have a simple image slider
 
 
EXTRA CHALLENGES:
 - inner circle should animate considering the time till the tag animates out
 - tag content should be responsive 
 - tag pulsing effect described in the pdf 
 - add/edit/remove animations and styles at your taste. If so, leave a comment explainning why.  

*/

//    Write/edit your code here     //

function showTagContent() {
  console.log("showTagContent");
  tagSet = createTag('myTag', 'Click to learn about', 'THE LONDON EYE', tagDuration);
  
}

function animateOutTagContent() {
  console.log("animateOutTagContent");
  tagSet.animate({
      opacity: 0
    }, tagAnimateOutTime, "ease");
  
}

function hideTagContent() {
  console.log("hideTagContent");
  tagSet.hide();
}

function showOverlayContent() {

  createOverlaySlider();

  console.log("showOverlayContent");
  $('#myOverlay').css('opacity', '0').addClass('whiteBackground');;
      $('#myOverlay').animate({
          opacity: 1
      }, 2000, function(){
          $('#myOverlay').css('margin', 'auto');
          $('#myOverlay').animate({
            width: "410px",
            height: "260px",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            borderRadius: "5px",
          },  2000);


      });
   }

function animateOutOverlayContent() {
  console.log("animateOutOverlayContent");
  $('#myOverlay').toggle("explode");
}

function hideOverlayContent() {
  // Remove overlay contents
  $('#myOverlay').empty();
  console.log("hideOverlayContent");
}

// Create a tag centered in the given element
function createTag(element, textLineOne, textLineTwo, tagDuration){

  // Set paper and dimensions of container
  var tagContainer = $('#'+element),
  height = $(tagContainer).height(),
  width = $(tagContainer).width(),
  tagPaper = Raphael(element),
  centerX = width / 2,
  centerY= height / 2;

  // Set viewBox for Responsive tag
  tagPaper.setViewBox(0, 0, width, height, true); 

  // Create 3 pointer tags (three to allow for the pulse effect)
  var first_path = tagPaper.path("M50,99.5l-1.3-1.8C47.4,95.9,16,53.1,16,34.7C16,15.8,31.2,0.5,50,0.5c18.8,0,34,15.4,34,34.2 c0,18.3-31.4,61.2-32.7,63L50,99.5z M50,3.7c-17,0-30.8,13.9-30.8,31C19.2,50,44,85.6,50,94c6-8.4,30.8-44,30.8-59.3 C80.8,17.6,67,3.7,50,3.7z"); 
  var second_path = tagPaper.path("M50,99.5l-1.3-1.8C47.4,95.9,16,53.1,16,34.7C16,15.8,31.2,0.5,50,0.5c18.8,0,34,15.4,34,34.2 c0,18.3-31.4,61.2-32.7,63L50,99.5z M50,3.7c-17,0-30.8,13.9-30.8,31C19.2,50,44,85.6,50,94c6-8.4,30.8-44,30.8-59.3 C80.8,17.6,67,3.7,50,3.7z"); 
  var third_path = tagPaper.path("M50,99.5l-1.3-1.8C47.4,95.9,16,53.1,16,34.7C16,15.8,31.2,0.5,50,0.5c18.8,0,34,15.4,34,34.2 c0,18.3-31.4,61.2-32.7,63L50,99.5z M50,3.7c-17,0-30.8,13.9-30.8,31C19.2,50,44,85.6,50,94c6-8.4,30.8-44,30.8-59.3 C80.8,17.6,67,3.7,50,3.7z"); 
  
  second_path.attr('class', 'second_path');
  third_path.attr('class', 'third_path');

  // Set pointer tag attributes
  first_path.attr({
    fill: '#FFFFFF',
    'stroke-width': 0,
    opacity: 0,
    transform: 's0.4, 0.4, 0, 0'
  }).data('id', 'first_path').translate(centerX*2,centerY); 

  second_path.attr({
    fill: '#FFFFFF',
    'stroke-width': 0,
    opacity: 0,
    transform: 's0.4, 0.4, 0, 0'
  }).data('id', 'second_path').translate(centerX*2,centerY); 

  third_path.attr({
    fill: '#FFFFFF',
    'stroke-width': 0,
    opacity: 0,
    transform: 's0.4, 0.4, 0, 0'
  }).data('id', 'third_path').translate(centerX*2,centerY); 


  // get dimensions of first_path and #myTag
  var pathBox = first_path.getBBox();

  

  // Set the text elements
  var textL1 = tagPaper.text(centerX, centerY+10, textLineOne);
  textL1.attr({
    opacity: 0,
    "fill": "white",
    "font-size": 18,
    "font-family": "Crimson Text"
  }).attr({'text-anchor': 'middle'});

  // get dimensions of textL1
  var textL1Box = textL1.getBBox();

  var textL2 = tagPaper.text(centerX, centerY+textL1Box.height+10, textLineTwo);
  textL2.attr({
    opacity: 0,
    "fill": "white",
    "font-size": 22,
    "font-family": "Crimson Text"
  }).attr({'text-anchor': 'middle'});

  // get dimensions of textL2
  var textL2Box = textL2.getBBox();

  // Create set for all tags
  var tagSet = tagPaper.set(first_path, second_path, third_path, textL1, textL2, circleTimer);

  // Create a pointer tag set (for hover)
  var pointerTagSet = tagPaper.set(first_path, second_path, third_path);

  // Set the inner circle timer
  var circleTimer = setCircleTimer(tagPaper, pathBox, tagSet);

  // Animate the path on a loop to create the PULSE effect
  // The circle timer loop is 5 seconds (set in css), totalTime variable also 5 seconds so the pulse and circle sync
  var loopCount = 0,
      duration = 0,
      loopTime = 1000,
      amountOfLoops = 0,
      tranformDefault = "";
  (function loopAnimation(duration){
    if(duration){
      duration = duration;
      amountOfLoops = Math.ceil(duration/loopTime);
    }

    if(loopCount < amountOfLoops){
      // Pulse animation
      second_path.animate({
        transform: 'm0.6, 0, 0, 0.6,'+ (first_path.matrix.e - 10) +', '+ (first_path.matrix.f - 5),
        opacity: 0
      }, loopTime, "ease", function(){
          // Reset
         second_path.transform('m0.4, 0, 0, 0.4,'+ first_path.matrix.e +', '+ first_path.matrix.f);
         second_path.attr('opacity', 1); 

         // Increment Count
         loopCount++;

         // Run animation again
         loopAnimation()

      });

    }else{
      animateOutTagContent(tagSet);
      return;
    }
  })(tagDuration);


  // Set on hover function for tagSet
  tagSet.mouseover(function(){
    this.attr({
      cursor: "pointer"
    });

    pointerTagSet.attr({
      fill: "#46E4C1",
      cursor: "pointer"
    })
  });

  // Set on hover function for tagSet
  tagSet.mouseout(function(){
    pointerTagSet.attr({
      fill: "white"
    })
  });

  tagSet.animate({
    opacity: 1
  }, tagStartTime, "ease")

  $('svg').addClass("my-svg");


  return tagSet;
}

function setCircleTimer(tagPaper, pathBox, tagSet){

  // Offset to get in the middle of the icon
   var x = pathBox.x+5.5,
   y= pathBox.y+15

  var circlePath = "M"+x+" "+y+" C"+x+" "+(y-15)+" "+(x+17)+" "+(y-15)+" "+(x+17)+" "+y+" "+(x+17)+" "+(y+15)+" "+x+" "+(y+15)+" "+x+" "+y,
  //var circlePath = "M120 120 C120 100 140 100 140 120 140 140 120 140 120 120",
  staticCircle = tagPaper.path(circlePath),
  circleTimer = tagPaper.path(circlePath),
  length = circleTimer.getTotalLength();
  staticCircle.attr({
    "stroke": "white",
    "stroke-width": 2,
    opacity: 0
  });

  circleTimer.attr('class', 'path');
  circleTimer.attr({
    "stroke": "#46E4C1",
    "stroke-width": 2,
    opacity: 0
  });

  circleTimer.node.style.strokeDasharray = length + ' ' + length;
  circleTimer.node.style.strokeDashoffset = length;

  tagSet.push(circleTimer, staticCircle);

  return circleTimer;
}


function createOverlaySlider(){
  // build the html slide
  $('#myOverlay').html(""+
    "<div id='slideshow'>"+
       "<a href='#' class='slideshow-prev'>&laquo;</a>"+ 
       "<ul>"+
            "<li><img src='images/thames.jpg' alt='River Thames' /><p class='imageDesc'>RIVER THAMES</p></li>"+
            "<li><img src='images/pret.jpg' alt='Pret Cafe' /><p class='imageDesc'>PRET</p></li>"+
            "<li><img src='images/shard.jpg' alt='The Shard' /><p class='imageDesc'>THE SHARD</p></li>"+
            "<li><img src='images/londonEye.jpg' alt='The London Eye' /><p class='imageDesc'>LONDON EYE</p></li>"+
       "</ul>"+
       "<a href='#' class='slideshow-next'>&raquo;</a>"+
    "</div>");

  var imageWidth = 400;
    
      
  var currentImage = 0;

  //set image count 
  var allImages = $('#slideshow li img').length;
  
  //setup slideshow frame width
  $('#slideshow ul').width(allImages*imageWidth);

  //attach click event to slideshow buttons
  $('.slideshow-next').click(function(){
      
      //increase image counter
      currentImage++;
      //if we are at the end let set it to 0
      if(currentImage>=allImages) currentImage = 0;
      //calcualte and set position
      setFramePosition(currentImage);

  });

  $('.slideshow-prev').click(function(){
      
      //decrease image counter
      currentImage--;
      //if we are at the end let set it to 0
      if(currentImage<0) currentImage = allImages-1;
      //calcualte and set position
      setFramePosition(currentImage);

  });

  // Close overlay by clicking on img desc
  $('.imageDesc').on('click',function(){
    closeOverlay();
  });
           

  //calculate the slideshow frame position and animate it to the new position
  function setFramePosition(pos){
      
      //calculate position
      var px = imageWidth*pos*-1;
      //set ul left position
      $('#slideshow ul').animate({
          left: px
      }, 300);
  }

}