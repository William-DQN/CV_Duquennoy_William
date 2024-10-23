
//-------------------------------------------------------------------------------------------------------------------------> Animation sur le curseur
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});
//--------------------------------------------------------------------------------------------------------------> Animation sur le curseur



//---------------------------------------------------------------------------------------------------------------> Animation sur le texte

var scrollingText = document.getElementById("scrol-text-container");
var text = scrollingText.innerHTML;
var i = 0;

setInterval(function() {
  scrollingText.innerHTML = text.substring(i) + text.substring(0, i);
  i++;
  if (i == text.length) {
    i = 0;
  }
}, 1000); // Changez le délai pour modifier la vitesse de défilement.
//-------------------------------------------------------------------------------------------------------------------------> Animation sur le texte




//-------------------------------------------------------------------------------------------------------------------------> Animation sur les images
const imageContainer = document.getElementById('image-container');
const images = imageContainer.querySelectorAll('img');

let currentImageIndex = 0;

function switchImage() {
  // Récupérer l'index de l'image suivante
  const nextImageIndex = (currentImageIndex + 1) % images.length;

  // Appliquer la transition en masquant l'image courante
  images[currentImageIndex].style.opacity = 0;
  images[nextImageIndex].style.opacity = 1;

  // Mettre à jour l'index de l'image courante
  currentImageIndex = nextImageIndex;
}

// Ajouter un gestionnaire d'événements de clic sur le conteneur d'image
imageContainer.addEventListener('click', switchImage);
//-------------------------------------------------------------------------------------------------------------------------> Animation sur les images



//-------------------------------------------------------------------------------------------------------------------------> Proposer une transition de français à anglais ou néerlandais

    // Stocker toutes les traductions dans un objet unique, je voulais faire un fichier JSON externe mais cela provoque des erreurs.
    //Je n'ai pas d'autres choix que d'incorporer toutes mes valeurs dans une variable.
    const traductions = {
        "fr":{  
          "state":"Étudiant en informatique",
          "city":"7850 Enghien",
          "street":"Chaussée de Bruxelles, 411",
      
          "parcours_pro" : "   Parcours professionnel",
          "job1":"* 2022 - 2023 : Chef d’équipe du musée de l’informatique - HEH à Mons : recherches, réunions et présentation du matériel.",
          "job2":"* Été 2022 : Job étudiant chez SDIL à Saintes : préparation de commande, picking.",
          "job3": "* Septembre 2019 - Mai 2021 : Agent de gardiennage - DESM SECURITY sur Bruxelles : missions de surveillances, réceptions de livraison et missions de magasinier.",
      
          "parcours_scolaire": "   Formations",
          "deuxieme_annee_bachelier": "* 2022 - 2023 : 2e année bachelier Informatique - systèmes et réseaux - HEH à Mons.",
          "premiere_annee_bachelier": "* 2019 : Certificat de réussite de 7e année - Académie Provinciale des Métiers à Mons.",
          "CESS": "* 2018 : CESS - Athénée Royal Jules Bordet à Braine-le-Comte.",
      
          "progra":"   Programmation",
          "langues": " Langues",
          "l1": "* Français - Langue maternelle.",
          "l2": "* Anglais - B1.",
      
          "hs1": "* PC Building.",
          "hs2": "* Programmation",
          "hs3": "* Word, Powerpoint et Excel.",
          "hs4": "* IT infrastructure (Linux, Widows Server, Network).",
          "hs5": "* Méthode SCRUM.",
      
          "ecoute":"* À l’écoute.",
          "integre":"* Intègre.",
          "flexible":"* Flexible.",
          "ponctuel":"* Ponctuel.",
          "equipe":"* Esprit d’équipe.",
      
      
          "hobbies":"   Hobbies",
          "h1":"* Course à pied.",
          "h2":"* Musculation.",
          "h3":"* Escrime.",
          "h4":"* Programmation.",
          "h5":"* Lecture.",
          "print":"   Imprimer"
        },
        "nl":
          {
            "state":"Student Computerwetenschappen",
            "city":"7850 Edingen",
            "street":"Brusselsesteenweg , 411",
      
            "parcours_pro" :"   Professionele achtergrond",
            "job1":"* 2022 - 2023: teamleider van het computermuseum - HEH in Bergen: onderzoek, vergaderingen en presentatie van materiaal.",
            "job2":"* Zomer 2022: Studentenbaan bij SDIL in Saintes: ordervoorbereiding, picking.",
            "job3": "* September 2019 - mei 2021: Beveiligingsfunctionaris - DESM SECURITY op Brussel: bewakingsmissies, afleverrecepties en opslagmissies.",
      
            "parcours_scolaire": "   Opleidingen",
            "deuxieme_annee_bachelier": "* 2022 - 2023: 2e jaars bachelordiploma in informatica - systemen en netwerken - HEH in Bergen.",
            "premiere_annee_bachelier": "* 2019 : Certificate of Achievement for Grade 7 - Académie Provinciale des Métiers in Bergen.",
            "CESS": "* 2018: CESS - Athénée Royal Jules Bordet in s-Gravenbrakel.",
      
            "progra":"   Programmeren",
      
            "langues":"   Talen",
            "l1": "* Frans - Moedertaal.",
            "l2": "* Engels - B1.",
      
            "hs1": "* PC Building.",
            "hs2": "* Programmeren.",
            "hs3": "* Word, Powerpoint en Excel.",
            "hs4": "* IT-infrastructuur ( Linux, Windows Server, netwerk ).",
            "hs5": "* SCRUM.",
      
            "ecoute":"* Goede luisteraar.",
            "integre":"* Eerlijk.",
            "flexible":"* Flexibel.",
            "ponctuel":"* Stipt.",
            "equipe":"* Teamspeler.",
      
            "hobbies":"   Hobby's",
            "h1":"* Hardlopen.",
            "h2":"* Gewichtheffen.",
            "h3":"* Schermen.",
            "h4":"* Programmeren.",
            "h5":"* Lezen.",
            "print":"   Printen"
          },
        
      
        "en":{
          "state":"   Computer Science Student",
          "city":"7850 Enghien",
          "street":"Chaussée de Bruxelles, 411",
      
          "parcours_pro" : "   Career path",
          "job1":"* 2022 - 2023: Team Leader of the Computer Museum - HEH in Mons: research, meetings and presentation of material.",
          "job2":"* Summer 2022: Student job at SDIL in Saintes: order preparation, picking.",
          "job3": "* September 2019 - May 2021: Security Officer - DESM SECURITY on Brussels: surveillance missions, delivery receptions and warehousing missions.",
      
          "parcours_scolaire": "   Education",
          "deuxieme_annee_bachelier": "* 2022 - 2023 : 2nd year bachelor's degree in Computer Science - Systems and Networks.",
          "premiere_annee_bachelier": "* 2019 : Certificate of Achievement for Grade 7 - Académie Provinciale des Métiers in Mons.",
          "CESS": "* 2018 : CESS - Athénée Royal Jules Bordet in Braine-le-Comte.",
      
          "progra":"   Programming",
      
          "langues": "   Languages",
          "l1": "* French - Native language.",
          "l2": "* English - B1.",
      
          "hs1": "* PC Building.",
          "hs2": "* Programming.",
          "hs3": "* Word, Powerpoint and Excel.",
          "hs4": "* IT infrastructure (Linux, Widows Server, Network).",
          "hs5": "* SCRUM.",
      
          "ecoute":"* Good listener.",
          "integre":"* Honest.",
          "flexible":"* Flexible.",
          "ponctuel":"* Punctual.",
          "equipe":"* Team player.",
      
          "hobbies":"   Hobbies",
          "h1":"* Running.",
          "h2":"* Weightlifting.",
          "h3":"* Fencing.",
          "h4":"* Programming.",
          "h5":"* Reading.",
      
          "print":"   Printing"
        }
    }

    // Fonction pour changer la langue de tous les éléments
    function changerLangue(lang) {
      const elements = document.querySelectorAll('span[data-traduction]');

      for (const element of elements) {
        const texte = traductions[lang][element.getAttribute('data-traduction')];
        if (texte) {
          element.textContent = texte;
        }
      }
    }
    // Gestionnaires d'événements de clic pour chaque bouton
    document.getElementById('btn-fr').addEventListener('click', () => changerLangue('fr'));
    document.getElementById('btn-en').addEventListener('click', () => changerLangue('en'));
    document.getElementById('btn-nl').addEventListener('click', () => changerLangue('nl'));
//-------------------------------------------------------------------------------------------------------------------------> Proposer une transition de français à anglais ou néerlandais



//-------------------------------------------------------------------------------------------------------------------------> Proposer un mode sombre
var button = document.getElementById("mode-button");
button.style.backgroundImage = "url('icons/sun-svgrepo-com.svg')";
function darkFunction() {
  var element = document.body;
  var button = document.getElementById("mode-button");
  element.classList.toggle("darkmode");
  if (button.classList.contains("sun")) {
    button.classList.remove("sun");
    button.classList.add("moon");
    button.style.backgroundImage = "url('icons/moon-svgrepo-com.svg')";
  } else {
    button.classList.remove("moon");
    button.classList.add("sun");
    button.style.backgroundImage = "url('icons/sun-svgrepo-com.svg')";
  }
}

//-------------------------------------------------------------------------------------------------------------------------> Proposer un mode sombre


//-------------------------------------------------------------------------------------------------------------------------> Proposer un bouton d'impression
const printButton = document.querySelector('#printing');
printButton.addEventListener('click', () => {
  window.print();
});
printButton.addEventListener('click', () => {
  printButton.classList.add('bouton-ptr');
  setTimeout(() => {
    printButton.classList.remove('bouton-ptr');
  }, 1000);
});
//-------------------------------------------------------------------------------------------------------------------------> Proposer un bouton d'impression