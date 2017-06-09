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

var palettes = {
  palette1: function(){
    return '' +
      '<div class="tile c-w1x c-h2x c-red"></div>\n' +
      '<div class="tile c-w2x c-h1x c-blue"></div>\n' +
      '<div class="tile c-w1x c-h1x c-green"></div>\n' +
      '<div class="tile c-w1x c-h1x c-red"></div>\n' +
      '<div class="tile c-w2x c-h1x c-blue"></div>\n' +
      '<div class="tile c-w3x c-h3x c-red">\n' +
        '<div class="tile c-w2x">\n' +
          '<div class="tile c-w2x c-h1x c-blue"></div>\n' +
          '<div class="tile c-w1x c-h1x c-green"></div>\n' +
          '<div class="tile c-w1x c-h1x c-red"></div>\n' +
        '</div>\n' +
        '<div class="tile c-w1x c-h2x c-blue"></div>\n' +
        '<div class="tile c-w1x c-h1x c-green"></div>\n' +
        '<div class="tile c-w2x c-h1x c-red"></div>\n' +
      '</div>\n' +
      '<div class="tile c-w1x c-h1x c-green"></div>\n' +
      '<div class="tile c-w1x c-h2x c-blue"></div>\n';
  },

  palette2: function(){
    return '' +
      '<div class="tile c-w2x c-h3x">\n' +
        '<div class="tile c-w2x c-h1x c-green"></div>\n' +
        '<div class="tile c-w1x c-h2x c-blue"></div>\n' +
        '<div class="tile c-w1x c-h2x c-red"></div>\n' +
      '</div>\n' +
      '<div class="tile c-w2x c-h3x">\n' +
        '<div class="tile c-w1x c-h2x c-blue"></div>\n' +
        '<div class="tile c-w1x c-h1x c-green"></div>\n' +
        '<div class="tile c-w1x c-h1x c-red"></div>\n' +
        '<div class="tile c-w2x c-h1x c-green"></div>\n' +
      '</div>\n';
  },

  palette3: function(article1, article2){
    return '' +
      '<div class="tile c-w3x c-h2x">\n' +
        '<div class="tile c-w2x c-h1x c-green">\n' +
          layouts.article(article1) +
        '</div>\n' +
        '<div class="tile c-w1x c-h1x c-blue">\n' +
          layouts.article(article2) +
        '</div>\n' +
        '<div class="tile c-w1x c-h1x c-green"></div>\n' +
        '<div class="tile c-w2x c-h1x c-red"></div>\n' +
      '</div>\n' +
      '<div class="tile c-w1x c-h2x c-blue"></div>\n';
  }
};

var layouts = {
  article: function(article){
    return elements.title(article.title) + elements.content(article.content);
  }
};

var elements = {
  title: function(title){
    return '<h2 class="c-title">' + title + '</h2>\n';
  },
  content: function(content){
    return '<p class="c-content">' + content + '</p>\n';
  }
};




var mockTiles = {
  containerElement: document.getElementById('container'),
  mockTiles: function(){
    mockTiles.containerElement.innerHTML = palettes.palette1() + palettes.palette3(mockdata[0], mockdata[1]) + palettes.palette2();
  }
}

// mockTiles.mockContainer();
mockTiles.mockTiles();


})(document, window, _);
