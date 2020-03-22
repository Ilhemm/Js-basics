
var Ilhem=prompt("Please enter your name", "Votre nom");
alert('Hey'+ Ilhem);

function AlerteTry ()
{
    var nom='Ilhem';
    var age='50';
    alert ('Bonjour '+ nom+' age '+age);
}

function CalculAir(Longeur, Largeur)
{
    var result= Largeur*Longeur;
     alert('La surface de cette piece est: '+ result +'UA');
    
}

function Metretrun(par,par2)
{
    var resultat= Metreturne(par, par2)
    alert('resultat '+ resultat);

}
function Metreturne(Longeur,Largeur)
{
    var result= Largeur*Longeur;
    return result;
}
function condition(Nom)
{
    if(Nom==Ilhem || Nom=='david')
    {
        alert('Condition verifiee');
    }
    else
    {
        alert('Entrez la bonne condition');
    }
}
function conditionEt(Nom,Age)
{
    if(Nom==Ilhem && Age==18)
    {
        alert('Condition verifiee');
    }
    else
    {
        alert('Entrez la bonne condition');
    }
}

function boucle (nb)
{
   
    for (var i=0; i<nb; i++)
    {
        alert( ' i est egale a ' +i);
    }
}

function modifierLien()
{
    var element= document.getElementById('Achanger');
    element.text=" Text Changed"
}
