$(document).ready(function(){
    $.getJSON('/api/content')
    .then(function(allData){
        console.log(allData);
        addContent(allData);
    })
    $('#contentInput').keypress(function(event){
        if(event.which == 13){
            createItem();
        }
    })
});

function addContent(allData){
    allData.forEach(content=>{
        var newContent = $('<li class="item">' + content.title + content.completed + '</li>');
        if(content.completed){
            newContent.addClass("done");
        }
        $('.list').append(newContent);
    })
}

function createItem(){
    var userInput = $('#contentInput').val();
    $.post('/api/content', {title: userInput})
    .then(function(newContent){
        $('#contentInput').val('');
        var newLi = $('<li class="item">' + newContent.title + '<span>X</span></li>');
        $('.list').append(newLi);
    })
    .catch(function(err){
        console.log(err);
    })
}

