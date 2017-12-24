var words = [
"Planchot t'es qu'un con !",
"Je veux tremper mon biscuit dans ton café au lait.",
"Ça manque de cageot.",
"C'était mieux avant Yéti News.",
"On les voit depuis Morlaix !",
"Aujourd'hui c'est projet !",
"Je m'emmerde.",
"C'est pas la peine de changer d'onglet, on a vu que t'étais sur Facebook !",
"Qui a push sans tester ?",
"Je quitte le groupe.",
"Je vais m'essayer au télétravail.",
"Excellent ce vin.",
"Une vraie merde cette BDD.",
"Il est solide Antoine.",
"T'es un putain de génie !",
"*emoji caca*",
"Vous avez laissé ma conclusion dans le rapport ?",
"Il est vraiment dégeulasse ce poster.",
"J'ai push le XML. Deux fois.",
"C'est vraiment de la merde GitHub.",
"Une rocade, un péage et un KFC. C'est tout.",
"La vie est un concours de bites.",
"11 h 40, allons manger."
]

var phrase = words[Math.floor(Math.random() * words.length)];
document.write('<h2>'+phrase+'</h2>');