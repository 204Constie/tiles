(function(document, window, _){
'use strict';

var mockdata = [
  {
    title: 'title1',
    content: 'contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents'

  },
  {
    title: 'title2',
    content: 'contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents ccontents contents contents contents contents contents contents contenttents contents contents contents contents contents contentsontents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents'

  },
  {
    title: 'title3',
    content: 'contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents'

  },
  {
    title: 'title4',
    content: 'contents contents contents contents contents contents contentcontents contents contents contents contecontents contents contents contents contents contents contents contenttents contents contents contents contents contents contentsnts contents contents contenttents contents contents contents contents contents contentss contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents'

  },
  {
    title: 'title5',
    content: 'contents contents contents contents contents content contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents'

  },
  {
    title: 'title6',
    content: 'contents contents contents contents contents contents contents contenttents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents'

  },
  {
    title: 'title7',
    content: 'contents contents contents contents contents contents contents contents contents contents contenttents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents'

  },
  {
    title: 'title8',
    content: 'contents contents contents contents  contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents'

  }
]


var mockTiles = {
  containerElement: document.getElementById('container'),
  mockContainer: function(){
    _.forEach(mockdata, function(element){
      console.log('element.content.length: ', element.content.length);
      var classw = '';
      var classh = '';
      var classcolor = '';
      if(element.content.length > 350){
        classw = 'c-w2x';
      } else {
        classw = 'c-w1x';
      }
      if(element.content.length > 300 && element.content.length < 400){
        classh = 'c-h2x';
      } else {
        classh = 'c-h1x';
      }
      if(element.content.length > 200 && element.content.length < 300){
        classcolor = 'c-red';
      } else if(element.content.length > 300 && element.content.length < 400) {
        classcolor = 'c-blue';
      } else {
        classcolor = 'c-green';
      }
      mockTiles.containerElement.innerHTML += '<div class="content ' + classw + ' ' + classcolor + ' ' + classh + '">\n' +
                                                '<div>' + element.title + '</div>\n' +
                                                '<div>' + element.content + '</div>\n' +
                                              '</div>';
    });
  }
}

mockTiles.mockContainer();



})(document, window, _);
