let output = prompt("Veux tu faire le jeu: A (marque A) ou B (marque B)")
switch (output) {
    case 'A':





      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      var nombre = getRandomInt(2, 101);
      // alert( nombre )
      let regle1 = "Voici les règles du premier jeux: vous devez trouver le nombre choisi par l'ordinateur entre 0 et 100."
      alert( regle1 )
      let nombre1_1 = prompt("Quel est votre premier nombre?");
      var nombre2_1 = Math.trunc(nombre1_1);
      var nb_coup_1 = (1)
      //Solution 1 :
      
      if (nombre2_1 === nombre){
      alert("Vous avez gagné en 1 coup!")
      }
      else{
      do {
        if (nombre2_1 < nombre){
          alert("Plus")
        }
        else {
          alert("Moins")
        }
        nombre1_1 = prompt("Quel est votre nombre suivant?");
        nombre2_1 = Math.trunc(nombre1_1);
        nb_coup_1 = (nb_coup_1 + 1)
      } while (nombre2_1 != nombre);
      alert("Vous avez gagné en " + nb_coup_1 + " coups!           ps: si tu veux rejouer rafraichi la page")
      }






      break;
    case 'B':






      var min, max
      var nb_coup_2_ = (0);
      var calcul1
      var nombre1_2
      alert ("Un saut de ligne s'insère dans mon alert comme ceci \n et cela \n et encore cela \n\n Hop là !"); 
      let regle2 = "Voici les règles du deuxième jeux:vous devez choisir un nombre choisi et l'ordinateur doit le trouver."
      alert( regle2 )
      let choix = prompt("Veux tu faire entre A=0 et 50 , B=0 et 100 ou C=100 et 200!")
      switch (choix) {
        case 'A':
          min = (0);
          max = (50);
          break;
        case 'B':
          min = (0);
          max = (100);
          break;
        case 'C':
          min = (100);
          max = (200);
          break;
        default:
          alert("Sorry!")
          break;
      }
      do {
        calcul1 = ((min + max)/2)
        calcul1 = Math.trunc(calcul1);
        nombre1_2 = prompt(calcul1 + "(+, - ou =)");
        var nb_coup_2 = (nb_coup_2 + 1)
        switch (nombre1_2) {
        case "=":
            break;
        case "+":
            min = calcul1;
          break;
        case "-":
          max = calcul1;
          break;

        default:
          break;
        }
      } while (nombre1_2 != "=");

      alert("J'ai gagné en " + nb_coup_2 + " coup!           ps: si tu veux rejouer rafraichi la page")






      break;
    default:
      alert("Sorry!")
      break;
  }




//   function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   }
//   var nombre = getRandomInt(2, 101);
//   // alert( nombre )
//   let hello = "Bonjour. Voici un petit jeu. Bonne chance!!!"
//   alert( hello )
//   let regle = "Voici les règles: vous devez trouver le nombre choisi par l'ordinateur entre 0 et 100."
//   alert( regle )
//   let nombre1 = prompt("Quel est votre premier nombre?");
//   var nombre2 = Math.trunc(nombre1);
//   var nb_coup = (1)
//   //Solution 1 :
  
//   if (nombre2 === nombre){
//   alert("Vous avez gagné en 1 coup!")
//   }
//   else{
//   do {
//     if (nombre2 < nombre){
//       alert("Plus")
//     }
//     else {
//       alert("Moins")
//     }
//     nombre1 = prompt("Quel est votre nombre suivant?");
//     nombre2 = Math.trunc(nombre1);
//     nb_coup = (nb_coup + 1)
//   } while (nombre2 != nombre);
//   alert("Vous avez gagné en " + nb_coup + " coups!")
//   }






// var min, max
// var nb_coup = (0);
// var calcul1
// var nombre1
// let hello = "Bonjour. Voici un petit jeu. Bonne chance!!!"
// alert( hello )
// let regle = "Voici les règles: vous devez choisir un nombre choisi et l'ordinateur doit le trouver."
// alert( regle )
// let choix = prompt("Veux tu faire entre A=0 et 50 , B=0 et 100 ou C=100 et 200!")
// switch (choix) {
//   case 'A':
//     min = (0);
//     max = (50);
//     break;
//   case 'B':
//     min = (0);
//     max = (100);
//     break;
//   case 'C':
//     min = (100);
//     max = (200);
//     break;
//   default:
//     alert("Sorry!")
//     break;
// }
// do {
//   calcul1 = ((min + max)/2)
//   calcul1 = Math.trunc(calcul1);
//   nombre1 = prompt(calcul1 + "(+, - ou =)");
//   nb_coup = (nb_coup + 1)
//   switch (nombre1) {
//    case "=":
//       break;
//    case "+":
//       min = calcul1;
//      break;
//    case "-":
//      max = calcul1;
//      break;

//    default:
//      break;
//   }
// } while (nombre1 != "=");

// alert("J'ai gagné en " + nb_coup + " coup!")






// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// var nombre = getRandomInt(2, 101);
// // alert( nombre )
// let hello = "Bonjour. Voici un petit jeu. Bonne chance!!!"
// alert( hello )
// let regle = "Voici les règles: vous devez trouver le nombre choisi par l'ordinateur entre 0 et 100."
// alert( regle )
// let nombre1 = prompt("Quel est votre premier nombre?");
// var nombre2 = Math.trunc(nombre1);
// var nb_coup = (1)
// //Solution 1 :

// if (nombre2 === nombre){
//   alert("Vous avez gagné en 1 coup!")
// }
// else{
//   do {
//     if (nombre2 < nombre){
//       alert("Plus")
//     }
//     else {
//       alert("Moins")
//     }
//     nombre1 = prompt("Quel est votre nombre suivant?");
//     nombre2 = Math.trunc(nombre1);
//     nb_coup = (nb_coup + 1)
//   } while (nombre2 != nombre);
//   alert("Vous avez gagné en " + nb_coup + " coups!")
// }


// //Solution 2 :

// do {
//   if (nombre2 != nombre) {
//     if (nombre2 < nombre){
//       alert("Plus")
//     }
//     else {
//       alert("Moins")
//     }
//     nombre1 = prompt("Quel est votre nombre suivant?");
//     nombre2 = Math.trunc(nombre1);
//   }
// } while (nombre2 != nombre);
// alert("Vous avez gagné!")

// //Solution 3 :

// while (nombre2 != nombre) {
//   if (nombre2 < nombre){
//     alert("Plus")
//   }
//   else {
//     alert("Moins")
//   }
//   nombre1 = prompt("Quel est votre nombre suivant?");
//   nombre2 = Math.trunc(nombre1);
// } ;

// alert("Vous avez gagné!")