async function chargement(){
    const reqHttp = await fetch("http://localhost:3000/api/products");
    console.log(reqHttp);
    const reponse = await reqHttp.json();
    console.log(reponse);
    const listedeProduits = document.getElementById("items");
    for (produit of reponse) {
        listedeProduits.innerHTML += `
            <a href="./product.html?id=${produit._id}">
                <article>
                <img src="${produit.imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1">
                <h3 class="productName">${produit.name}</h3>
                <p class="productDescription">${produit.description}</p>
                </article>
            </a>
        `;
    }
}


chargement();