// $(".menu-btn").click(function(){

//   if($(".chapter-nav").is(".show")){
//     $(".chapter-nav").removeClass("show");
//     $(".page").removeClass("withsidebar");
//     $(".navbar").removeClass("withsidebar")

//   } else{
//     $(".page").addClass("withsidebar")
//     $(".chapter-nav").addClass("show");
//     $(".navbar").addClass("withsidebar")
//   }

// });

// $(".chapter-nav .close").click(function(){
//   $(".menu-btn").click();
// })


$(function(){
  $(".bs-docs-section").find("h2").each(function(i,el){
    $el = $(el);
    var slug = $el.text().toLowerCase().replace(".", "").replace(/\s/g, "-").replace("'", "");
    $el.append("<a href='#"+slug+"' name='"+slug+"' ></a>")
    var $sectionLink = $("<li>"+$el.text()+"</li>");
    (function($el){
      $sectionLink.click(function(){
        $(document).scrollTo( $el, 500, {offset:{top:-70}, easing:"swing" });
      });
    })($el);
    $("div.bs-sidebar ul.bs-sidenav").append($sectionLink);
  });
});
