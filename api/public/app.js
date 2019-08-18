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
    $('.list').on('click', 'li', function(){
        updateContent($(this));
    })
    $('.list').on('click', 'span', function(e){
        e.stopPropagation();
        removeContent($(this).parent());
    })
});

function updateContent(selected){
    var updateURL = '/api/content/' + selected.data('id');
    var status = !selected.data('completed');
    var updateData = {completed: status};
    $.ajax({
        method: 'PUT',
        url: updateURL,
        data: updateData
    })
    .then(function(updatedContent){
        selected.toggleClass("done");
        selected.data('completed', status);
    })
}

function removeContent(selected){
    var clickedId = selected.data('id');
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
    var newContent = $('<li class="item">' + content.title + '<span class="delete">x</span></li>');
    newContent.data('id', content._id);
    newContent.data('completed', content.completed);
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