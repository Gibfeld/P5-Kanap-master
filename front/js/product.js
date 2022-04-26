//fonction URLSearchParams pour récupérer l'id produits depuis l'url
const params = new URLSearchParams(document.location.search);
const id = params.get("id");
console.log(id);

//fonction pour récupérer les informations du produit et l'afficher
async function chargement(){
    const reqHttp = await fetch("http://localhost:3000/api/products/"+id);
    console.log(reqHttp);
    const reponse = await reqHttp.json();
    console.log(reponse);
    const img = document.getElementById("imagesproduit");
    img.src= reponse.imageUrl;

    document.getElementById("title").textContent = reponse.name;
    document.getElementById("price").textContent = reponse.price;
    document.getElementById("description").textContent = reponse.description;

    //fonction pour créer le sélecteur de couleur, Les couleur sont récuperer avec la boucle for, reponse.colors nous retourne un tableau de couleur  
    for (colors of reponse.colors){            
        let option = document.createElement("option");    
        document.getElementById("colors").appendChild(option);
        option.value = colors;
        option.textContent = colors;
    }

}

//appel de la fonction au chargement du script
chargement();

//Sélection du bouton panier dans product.html

let panier = JSON.parse(localStorage.getItem("panier")) || [];

document.getElementById("addToCart").addEventListener("click", function(){  
    panier.push({
        id: id,
        quantity: document.getElementById("quantity").value,
        color: document.getElementById("colors").value,
    });
    console.log(panier);
    localStorage.setItem("panier", JSON.stringify(panier));
    alert("commande effectué");
});














