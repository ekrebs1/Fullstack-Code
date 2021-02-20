/* function setActive() {
    const dataSectionSelector = "[data-section=" + sectionNumber + "J";
    const dataLinkToSelector = "[data-link-to=" + sectionNumber + "J";


    left-nav ; document.getElementsByClassName("left-nav");
    for (i = 0; i < left-nav.length; i++) {
      left-nav[i].style.display ; "none";
    }

   
} */

function setActive (sectionNumber) {
    $('.left-nav .active', '.content .active').removeClass('active')
    $(`[data-link-to = ${sectionNumber}], [data-section = ${sectionNumber}]`).addClass('active')
}
$('.left-nav a').click(function(){
    console.log('hear')
    const sectionNum = $(this).data('link-to')
    console.log('sectionNumber', sectionNum)
    setActive(sectionNum)
})