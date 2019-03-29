


var  arr1 = ["https://i.pinimg.com/originals/15/1c/3c/151c3c9781904ecf619671f9b0ca6c65.jpg" , "https://orig01.deviantart.net/08fc/f/2011/138/e/6/victor_van_dort_by_kifir-d3gmzwo.jpg" , "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/90d73fa2-fb63-4e94-ac5f-3c1c689134e4/dep4xr-928dc070-cd39-4e0f-b445-f303ecbb0a01.jpg" , "https://img2.joke.co.uk/images/products/jmw-v3/xlarge/75801.png"];
    console.log(arr1);
 


$("#b").click(function() {
    
    $(".img2").attr("src", arr1[ Math.round(arr1.length * Math.random()) ]);
});

var  arr2 = ["https://mbtskoudsalg.com/images/nerds-candy-png-2.png" , "https://media.giphy.com/media/YkdKWk0jrmiBIcbNAd/source.gif" , "https://cdn.shopify.com/s/files/1/0972/7116/products/skittles-original-2.png?v=1498404431" , "https://media.giphy.com/media/266LJhuLTLk2s/giphy.gif" , "https://theamericancandystore.co.uk/626-thickbox_default/mr-goodbar.jpg"];
    console.log(arr2);

$("#c").click(function() {
    
    $(".img3").attr("src", arr2[ Math.round(arr2.length * Math.random()) ]);
    
});



$("select.bestCandy").change(function(){
    var candy = $(this).children("option:selected").val();
    console.log(candy);
    
    if(candy === "Buy Only Candy"){
        alert("You only want candy?"); 
        }
    else if(candy === "Buy Only A Costume"){
        alert("You only want a costume?");
        }
    else {
        alert("That's gonna cost a lot!");
        }
    
});

