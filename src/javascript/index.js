console.log('Hi');
imgUrl=['https://bilder.t-online.de/b/84/93/82/46/id_84938246/920/tid_da/eichhoernchen-geert-weggen-zeigt-die-welt-der-kleinen-nager-.jpg',
    'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_1280.jpg'
    ]

setInterval(function (){
    const random = Math.floor(Math.random() * imgUrl.length);
    let bild=imgUrl[random]
    document.getElementById('img').style.backgroundImage="url("+bild+")";


},3000)

