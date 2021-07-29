<script>
 document.getElementsByClassName('ldnBtn')[0].addEventListener("click", function() {
  jQuery('.buttons').slideUp("slow", function() {
    jQuery('.london').slideDown("slow");
  });
});
 document.getElementsByClassName('ldnBack')[0].addEventListener("click", function() {
  jQuery('.london').slideUp("slow", function() {
    jQuery('.buttons').slideDown("slow");
  });
});
 document.getElementsByClassName('bexleyBtn')[0].addEventListener("click", function() {
  jQuery('.buttons').slideUp("slow", function() {
    jQuery('.bexley').slideDown("slow");
  });
});
 document.getElementsByClassName('bexleyBack')[0].addEventListener("click", function() {
  jQuery('.bexley').slideUp("slow", function() {
    jQuery('.buttons').slideDown("slow");
  });
});
</script>