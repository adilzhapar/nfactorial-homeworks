$('document').ready(function() {
    $('.list-group-item').on('click', function(){
        // console.log($(this).attr('id'));
        let id = $(this).attr('id');
        $('#page').attr('class', 'page ' + id);

        if(id === 'home'){
            // $('#page').empty();
            // $('#page').append('<h1>This is the home page</h1>');
            console.log($('#libs-page').css('display'));
            if($('#libs-page').css('display') != 'none'){
                $('#libs-page').toggle();
            }
            if($('#thumb-page').css('display') != 'none'){
                $('#thumb-page').toggle();
            }
            if($('#home-page').css('display') === 'none'){
                $('#home-page').toggle();
            }


        }else if(id === 'libs'){
            if($('#home-page').css('display') != 'none'){
                $('#home-page').toggle();
            }
            if($('#thumb-page').css('display') != 'none'){
                $('#thumb-page').toggle();
            }
            if($('#libs-page').css('display') === 'none'){
                $('#libs-page').toggle();
            }
            
        }else{
            if($('#home-page').css('display') != 'none'){
                $('#home-page').toggle();
            }
            if($('#libs-page').css('display') != 'none'){
                $('#libs-page').toggle();
            }
            if($('#thumb-page').css('display') === 'none'){
                $('#thumb-page').toggle();
            }
        }
        // console.log($('.page'));
    });

    $('#tellStory').on('click', function() {
        let name = $('#person-input').val();
        let char = $('#char-input').val();
        let adverb = $('#adverb-input').val();
        let adj = $('#adj-input').val();
        // console.log(name);
        let text = `Once Upon a time, ${name} has come to Dalida, to ${adverb} ask for joining nFactorial incubator. Dalida called ${char} to get rid of ${name}. ${adj} actions of ${name} was so impressive, so ${char} couldn 't control himself and ${adverb} cried.`
        $('#txt').text(text);
        $('.libs-response').toggle();
        $('#person-input').val('');
        $('#char-input').val('');
        $('#adverb-input').val('');
        $('#adj-input').val('');
    });

    $('#calculate').on('click', function() {
        $('.thumb-response').empty();
        let wth = $('#width').val();
        let hth = $('#height').val();
        let noc = $('#colors').val();

        let res = (parseInt(wth) * parseInt(hth) * parseInt(noc)) / 1024;

        if(res > 15){
            $('.thumb-response').append(`<p style="color:red;font-weight:bold">File is ${res} KB which is NOT OKAY</p>`);
        }else{
            $('.thumb-response').append(`<p style="color:green;font-weight:bold">File is ${res} KB which is OK</p>`);
        }
    });
})