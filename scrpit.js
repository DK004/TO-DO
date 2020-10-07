let btn = document.getElementById('add');           //variables declaretion from the document
let text =  document.getElementById('written');
let list = document.getElementById('list');


btn.addEventListener('click', function(){           //event listner added i.e. function occcuring on click

    var item = document.createElement('div');        //will create a variable that will create a list item in document
    item.classList.add('item-styling');              // this is apply styling to the item
    item.innerText = text.value;                        //this will fetch the text from input
    list.appendChild(item);                            //this will add the item to the list 
    text.value="";                                          //this will make the value in the text box null
    item.addEventListener('click',function(){           //another eventlistner which will make changes accordingly

        item.style.textDecoration = 'line-through';         //changes
    
    })
    item.addEventListener('dblclick',function(){            //same as above.
        list.removeChild(item);
    })
})
