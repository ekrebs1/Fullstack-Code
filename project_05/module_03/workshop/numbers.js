const VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function draw(valueList) {
  $(".card-list").empty();
  valueList.forEach(function (value) {
    $(".card-list").append(`
          <div class="card">${value}</div>
           `);
  });
}
draw(VALUES);

$(".controls button").click(function () {
  $(".controls .selected").removeClass("selected");
  $(this).addClass("selected");
});

$('.all').click(() => {
    draw(VALUES)
})


$(".even").click(function () {
  const evenVals = VALUES.filter(function (even) {
    if (even % 2 === 0) {
      return even;
    }
  });
  draw(evenVals);
});


$(".odd").click(function () {
  const oddVals = VALUES.filter(function (odd) {
    if (odd % 2 !== 0) {
      return odd;
    }
  });
  draw(oddVals);
});

$(".card-list").on("click", ".card", function () {
    let number = Number($(this).text())
    let numberIndex = VALUES.indexOf(number)
    console.log(numberIndex)
    VALUES.splice(numberIndex, 1)
    $(this).remove()
});

