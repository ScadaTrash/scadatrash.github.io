var words = [
"img/martine.jpg",
"img/martine2.jpg",
"img/martine3.jpg",
"img/martine4.jpg",
"img/martine5.jpg",
"img/martine6.jpg",
"img/martine7.jpg",
]

var martine = words[Math.floor(Math.random() * words.length)];
document.write('<img src="'+martine+'" title="Pro tip: F5. Tu me remercieras plus tard."/>');