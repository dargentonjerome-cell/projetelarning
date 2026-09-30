// Lecteur YouTube : chargé au clic sur ▶, avec repli vers YouTube si l'intégration échoue
(function () {
  var box = document.getElementById('vid');
  var btn = document.getElementById('playbtn');
  var url = 'https://www.youtube.com/shorts/tM3eq6Jn9Ok?si=oK8E0yYFJc-Cw5nU';
  var frame = null;

  function fallback() {
    if (frame) { frame.remove(); frame = null; }
    window.open(url, '_blank', 'noopener');
  }

  document.addEventListener('securitypolicyviolation', function (e) {
    if (frame && /frame|child/.test(e.violatedDirective)) fallback();
  });

  btn.addEventListener('click', function () {
    frame = document.createElement('iframe');
    frame.src = 'https://www.youtube.com/embed/tM3eq6Jn9Ok?autoplay=1&playsinline=1&rel=0';
    frame.title = 'Vidéo YouTube Shorts';
    frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    frame.setAttribute('allowfullscreen', '');
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    box.appendChild(frame);
  });
})();
