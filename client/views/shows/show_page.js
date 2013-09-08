Template.showPage.helpers({
  show: function() {
    var show = Shows.findOne(Session.get('selectedShowId'));
    return show;
  }
});

Template.showPage.support = function() { return (window.FileReader) ? true : false; }

Template.showPage.episodesInSeasons = function() {
  return Shows.findOne(Session.get('selectedShowId')).episodesInSeasons;
};

Template.showPage.rendered = function() {
  // if FileReader is not supported then disabled all the inputs
  if(!window.FileReader) $('input:not(:disabled), button[type="submit"]').attr('disabled', '');

  var episodesInSeasons = Shows.findOne(Session.get('selectedShowId'));

  if(episodesInSeasons)
    episodesInSeasons = episodesInSeasons.episodesInSeasons;

  // handle picture upload
  var $upload = $('#pic-upload'),
      $picField = $('#picture'),
      $picFormGroup = $picField.parent(),
      reader = new FileReader(),
      filter = /^image\/(?:bmp|cis\-cod|gif|ief|jpeg|pipeg|png|svg\+xml|tiff|x\-cmu\-raster|x\-cmx|x\-icon|x\-portable\-anymap|x\-portable\-bitmap|x\-portable\-graymap|x\-portable\-pixmap|x\-rgb|x\-xbitmap|x\-xpixmap|x\-xwindowdump)$/i;

  reader.onload = function(e) {
    $picField.val(e.target.result);
    $('img.media-object')[0].src = e.target.result;
  };

  // error helpers
  var picThrowError = function(message) {
    $picFormGroup.removeClass('has-success').addClass('has-error');

    if($picFormGroup.find('.help-block').length === 0)
      $picFormGroup.children('.col-md-9').append('<span class="help-block">' + message + '</span>');
    else
      $picFormGroup.find('.help-block').text(message);
  };

  var picClearErrors = function() {
    if($picFormGroup.hasClass('has-error')) {

      $picFormGroup.removeClass('has-error').addClass('has-success');

      setTimeout(function() { $picFormGroup.removeClass('has-success'); }, 3000);

      if($picFormGroup.find('.help-block'))
        $picFormGroup.find('.help-block').remove();
    }
  }

  $upload.on('change', function() {
    if($picField.length !== 0) {

      var file = $upload[0].files[0];

      if(filter.test(file.type)) {

        if(file.size < 300000) {

          reader.readAsDataURL(file);
          picClearErrors();

        } else { picThrowError('Die Datei darf nicht größer als 300kb sein'); }

      } else { picThrowError('Bitte wähle eine gültige Bilddatei'); }
    }
  });

  $('#seasons').bindWithDelay('keyup change', function(e) {
    var el = e.target,
        val = el.value;

    if($.isNumeric(val) && val < 200) {

      var $list = $('#episodes-in-seasons-list'),
          currentSeasons = $list.children().length;

      if(val < currentSeasons) {
        for (var i = currentSeasons - 1; i >= val; i--) {
          $('li:last-child', $list).remove();
        };
      } else {
        for(var i = currentSeasons + 1; i <= val; i++) {
          var eps = episodesInSeasons[i - 1],
              placeholder = (eps) ? 'value="' + eps : 'placeholder="' + parseInt(Math.random() * (28 - 14) + 14),
              element = $('<li><div class="input-group"><span class="input-group-addon">Staffel ' + i + '</span><input type="number" data-index="' + (i - 1) + '" class="form-control episodes-in-season" ' + placeholder + '" required min="1"></div></li>')

          $list.append(element);
        }
      }

    } else if(val > 200) {
      alert('Mehr als 200? Nicht wirklich...');
      val = '';
    }
  }, 200);

  $('form').on('submit', function() {
    var seasons = parseInt(document.getElementById('seasons').value),
        field = document.getElementById('episodesInSeasonsField'),
        fieldVal = field.value.split(','),
        newFieldVal = [];

    while(fieldVal.length > seasons)
      fieldVal.pop();

    _.each(fieldVal, function(val, index) { newFieldVal[index] = parseInt(val); });

    $('.episodes-in-season').each(function() { newFieldVal[this.getAttribute('data-index')] = this.value; });

    field.value = newFieldVal.toString();
  });
};