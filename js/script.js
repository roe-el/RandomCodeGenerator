$(document).ready(function() {
    //Store quotes
    var quoteBank = [];
    $.getJSON("https://cors-anywhere.herokuapp.com/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30&callback=", function(data) {

        data.forEach(function(val) {
            quoteBank.push(val);
        })
        changeQuote();
    });

    function changeQuote() {

        randomQuote = Math.floor((Math.random() * 29))
            //Setting text from json object
        $("#text").html(quoteBank[randomQuote].content);
        $("#author").text(quoteBank[randomQuote].title);

    }
    //Call function on click
    $("#getQuote").on('click', function() {
        changeQuote();

    });
    //Twitter Quote Button-had to use .text() to remove tags
    $(".tweetQuote").click(function() {

        $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + $(quoteBank[randomQuote].content).text() + "  -" + quoteBank[randomQuote].title);
    });
});
