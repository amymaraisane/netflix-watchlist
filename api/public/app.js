$(document).ready(function(){
    $.getJSON('/api/content')
    .then(function(allData){
        addContent(allData);
    })
    $('#contentInput').keypress(function(event){
        if(event.which == 13){
            createItem();
        }
    })
    $('.list').on('click', 'span', function(){
        removeContent($(this).parent());
    })
});

function removeContent(selected){
    var clickedId = selected.data('id');
    console.log(clickedId);
    var deleteURL = '/api/content/' + clickedId;
    $.ajax({
        method: 'DELETE',
        url: deleteURL
    })
    .then(function(data){
        selected.remove();
    })
    .catch(function(err){
        console.log(err);
    });
}

function addContent(allData){
    allData.forEach(content=>{
        addOne(content);
    });
}

function addOne(content){
    var newContent = $('<li class="item">' + content.title + content.completed + '<span class="delete">x</span></li>');
    newContent.data('id', content._id);
    if(content.completed){
        newContent.addClass("done");
    }
    $('.list').append(newContent);
}

function createItem(){
    var userInput = $('#contentInput').val();
    $.post('/api/content', {title: userInput})
    .then(function(newContent){
        $('#contentInput').val('');
        addOne(newContent);
    })
    .catch(function(err){
        console.log(err);
    })
}