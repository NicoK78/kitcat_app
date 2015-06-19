Hammer($('.box').get(0)).on('dragstart', function(event) {
  console.log('dragstart', event);
});
 
Hammer($('.box').get(0)).on('drag', function(event){
  // console.log('drag', event.gesture.deltaX, event.gesture.deltaY)
  var target = event.target;
  $(target).css({
    'transform': 'translate(' + event.gesture.deltaX + 'px,' + event.gesture.deltaY + 'px)'
  });
});
 
Hammer(document.body).on('release', function(event){
  console.log('release', event);
  event.gesture.preventDefault()
});
 
Hammer(document.body).on('dragend', function(event) {
  console.log('dragend', event);
  
  $(event.target).css({'transform': 'translate(0,0)'});
  debugger;
  var dropEl = document.elementFromPoint(event.gesture.center.pageX, event.gesture.center.pageY);
  console.log('dropped on', dropEl);
  if ($(dropEl).hasClass('drop-target')) {
    console.log('dropped on drop target');
  }
})
$(document.body).on('mousedown', '[draggable]', function(event){
 
  console.log('mousedown', event);
})
$(document.body).on('mouseup', '[draggable]', function(event){
  
  console.log('mouseup', event);
  event.preventDefault()
})