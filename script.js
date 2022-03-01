var quotes =[
{"quote":"Making the decision to have a child is momentous. It is to decide forever to have your heart go walking around outside your body.", "name":"Elizabeth Stone"},
{"quote":"There are two lasting bequests we can give our children. One is roots. The other is wings.", "name":"Hodding Carter Jr"},
{"quote":"Like stars are to the sky, so are the children to our world. They deserve to shine!", "name":"Chinonye J. Chidolue"},
{"quote":"Having a baby is like falling in love again, both with your husband and your child.", "name":"Tina Brown"},
{"quote":"There are no words that can describe the euphoria you feel when your baby recognizes you for the first time and smiles.", "name":"Jared Padalecki"},
{"quote":"What good mothers and fathers instinctively feel like doing for their babies is usually best after all.", "name":"Benjamin Spock"},
{"quote":"It’s a good thing babies don’t give you a lot of time to think. You fall in love with them and when you realize how much they love you back, life is very simple.", "name":"Anita Diamant"},
{"quote":"Children have neither past nor future. They enjoy the present, which very few of us do.", "name":"Jean De La Bruyere"},
{"quote":"I think that I see something deeper, more infinite, more eternal than the ocean in the expression of the eyes of a little baby when it wakes in the morning and coos or laughs because it sees the sun shining on its cradle.", "name":"Vincent Van Gogh"},
{"quote":"You know what the great thing about babies is? They are like little bundles of hope. Like the future in a basket.", "name":"Lish McBride"}
];

//color list
var colors = ["#31bbe5","#71b8f6","#57aefc","#70dae7","#fbff66", "#faff48", "#f9ff20", "#fff22c"];

//html full load
$(document).ready(function(){
  
  // function to random quote
  var randomQuote = function(id, colorRand){
  // when fadeOut -> then fadeIn and animate
  $("#quote, #name").fadeOut(1000, function(){
    //quote actions
    $("#quote").css("color", colorRand).fadeIn(1000).html('<i class="fa fa-quote-left" aria-hidden="true"></i> '+quotes[id].quote+' <i class="fa fa-quote-right" aria-hidden="true"></i>');
    
    //name actions
    $("#name").css("color", colorRand).fadeIn(1000).html("- <em>"+quotes[id].name+"</em>");
    
    //twitter share
    $("#twitter").css("color", colorRand).fadeIn(1000).html('<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text='+quotes[id].quote+" - "+quotes[id].name+'%20%23Ukraine%20%23ALMAGUA%20%23293457"data-size="large" target="_blank"><i class="fa fa-twitter-square pull-left" aria-hidden="true"></i></a>');
    
    //change link color in every color random
    $("a").animate({
      color: colorRand
    });
    
    // animate from jQuery UI
    $("body, button").animate({
      backgroundColor: colorRand
    });
    
   });
 };
  
  //init
  var colorRand =  colors[Math.floor(Math.random() * colors.length)];
  var id = Math.floor(Math.random() * quotes.length);
  randomQuote(id, colorRand);
  
  // when click
$("#new-quote").click(function(){
  colorRand =  colors[Math.floor(Math.random() * colors.length)];
  console.log("out:"+ colorRand);
  id = Math.floor(Math.random() * quotes.length);
  randomQuote(id, colorRand);
  });
  
});