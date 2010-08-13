/*

jquery.transliterate.js -- jQuery based transliteration module

MIT license 

use me like this:

    $('input[lang=chr]').transliterate({table: 'chr.js'})
    $('#someinput').transliterate({table: 'eo.js'})


*/

(function($){

  $.fn.transliterate = function(options){

    return this.each(function(){

      var opts = $.extend({}, $.fn.transliterate.defaults, options);

      $target = $(this);
      $target.val('');

      $source = $('<input/>', 
      {
          class: opts.sourceInputClass,
      });

      $source
        .insertBefore( $target )
        .focus()
        .keyup(function(e){
          var converted = $.fn.transliterate.convert($source.val(), opts.table);
          $target.val(converted);
        })

    })
  }

  $.fn.transliterate.defaults = { 
    // table, caseSensitive
  };

  $.fn.transliterate.convert = function(plaintext, table){ 
    var converted = '';
    $.each(table, function(before,after){
      console.log((before, after));
      //converted += plaintext.replace(before, after);
    })
    return converted;
  };

})(jQuery)
