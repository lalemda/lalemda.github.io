

// ====================================== Javascript Events for all browsers =================

// #### To add event: Event flow = Bubbling
function addEvent( obj, type, fn ) {
    if (obj.attachEvent) {
        obj['e'+type+fn] = fn;
        obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
        obj.attachEvent( 'on'+type, obj[type+fn] );
    } else
    obj.addEventListener( type, fn, false );
}

// #### To remove event: Event flow = Bubbling
function removeEvent( obj, type, fn ) {
    if (obj.detachEvent) {
        obj.detachEvent( 'on'+type, obj[type+fn] );
        obj[type+fn] = null;
    } else
    obj.removeEventListener( type, fn, false );
}



// ============================ Binding multiple events to a listener ================
// #### To add multile event:
function addMultipleEvent(element, eventNames, listener) {
    var events = eventNames.split(' ');
    events.forEach((event) => {
        addEvent(element, event, listener);
    })
}

// #### To remove multile event:
function removeMultipleEvent(element, eventNames, listener) {
    var events = eventNames.split(' ');
    events.forEach((event) => {
        removeEvent(element, event, listener);
    })
}
  

// ============================ To get the target of an event ============================
function getTarget(e) {                          
    if (!e) {                               
      e = window.event;                            
    }
    return e.target || e.srcElement;               
}

// ============================ To set multiple attributes at once on an element  ============================
function setMultipleAttributes(element, attributes) {
    Object.keys(attributes).forEach(attr => {
        element.setAttribute(attr, attributes[attr]);
    });
}

// ============================ To Prevent the link from taking you elsewhere  ============================
function preventDefaultStatus(el) {
    if (el.preventDefault) {  
      el.preventDefault();                          
    } else {                                      
      el.returnValue = false;                      
    }
}

// ============================ To check the device is touch or not  ============================
function isTouchDevice() {
    const isTouchDevice = 'ontouchmove' in window || navigator.msMaxTouchPoints > 0;
    if(isTouchDevice) {
      return true;
    } else {
      return false;
    }
}

// ============================ To Add and Remove Class List  ============================

