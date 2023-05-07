$(function () {
  let checked = [];
  let checkedStr = '';

  $('input[type="checkbox"]').on('change', function () {
    const id = $(this).data('id');
    const name = $(this).data('name');

    if ($(this).is(':checked')) {
      checked.push({ id: id, name: name });
    } else {
      checked = $.grep(checked, (item) => {
        return item.id != id;
      });
    }

    checkedStr = checked.map(function (item) {
      return item.name;
    }).join(', ');
    $('div.amenities h4').text(checkedStr);
  });
});
