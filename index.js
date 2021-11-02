
const pesquisarimovel = () => {
    let localizaçaoimovel = document.getElementById('localizaçaoimovel').value;
    localizaçaoimovel = localizaçaoimovel.toLowerCase()

   



    if (localizaçaoimovel === 'sao paulo' || localizaçaoimovel === 'sp' || localizaçaoimovel === 'são paulo') {
        async function getImovel() {

            const url = ['state=sp&city=sao-paulo']
            const response = await fetch(`https://private-9e061d-piweb.apiary-mock.com/venda?${url}`)

            return response.json()
        }

        getImovel().then(data => {
            const imoveis = data.search.result.listings


            const lisImoveis = imoveis.reduce((accumulator, state) => {
                const endereço = state.link.data
                const amenitiesinfo = state.listing.amenities


                accumulator += `
            
     
             
            <li>
           
        
        <img id="imagem" src="${state.medias[0].url}" alt="" >
         <p> ${endereço.street}, ${endereço.streetNumber} - ${endereço.neighborhood}, ${endereço.city} - ${state.listing.address.stateAcronym} </p>
         <p> ${state.link.name}</p>
         <p>  <b>${state.listing.totalAreas[0]}</b> m² &nbsp <b>${state.listing.bedrooms[0]}</b> Quartos   &nbsp <b>${state.listing.bathrooms[0]}</b> Banheiros  &nbsp <b>${state.listing.parkingSpaces[0]}</b> Vagas</p>
         <p> ${amenitiesinfo}</p>
         <h4>R$${parseFloat(state.listing.pricingInfos[0].price)}</h4>
         <p> Condomínio: <b>R$</b> <b>${state.listing.pricingInfos[0].monthlyCondoFee}</b> </p>
          </li>`
                return accumulator



            }, '')



            const ul = document.querySelector('[data-js="clonevivareal"]')
            ul.innerHTML = lisImoveis


        })
    } else if (localizaçaoimovel === 'rio de janeiro' || localizaçaoimovel === 'rj') {
        async function getImovel() {

            const url = ['state=rj&city=rio-de-janeiro']
            const response = await fetch(`https://private-9e061d-piweb.apiary-mock.com/venda?${url}`)

            return response.json()
        }

        getImovel().then(data => {
            const imoveis = data.search.result.listings


            const lisImoveis = imoveis.reduce((accumulator, state) => {
                const endereço = state.link.data
                const amenitiesinfo = state.listing.amenities


                accumulator += `
            
     
             
            <li>
           
        
        <img id="imagem" src="${state.medias[0].url}" alt="" >
         <p> ${endereço.street}, ${endereço.streetNumber} - ${endereço.neighborhood}, ${endereço.city} - ${state.listing.address.stateAcronym} </p>
         <p> ${state.link.name}</p>
         <p>  <b>${state.listing.totalAreas[0]}</b> m² &nbsp <b>${state.listing.bedrooms[0]}</b> Quartos   &nbsp <b>${state.listing.bathrooms[0]}</b> Banheiros  &nbsp <b>${state.listing.parkingSpaces[0]}</b> Vagas</p>
         <p> ${amenitiesinfo}</p>
         <h4>R$${parseFloat(state.listing.pricingInfos[0].price)}</h4>
         <p> Condomínio: <b>R$</b> <b>${state.listing.pricingInfos[0].monthlyCondoFee}</b> </p>
          </li>`
                return accumulator



            }, '')



            const ul = document.querySelector('[data-js="clonevivareal"]')
            ul.innerHTML = lisImoveis


        })
    } else {
        const ul = document.querySelector('[data-js="clonevivareal"]')
        ul.innerHTML = `<h2>OOOOPS! ALGO DEU ERRADO NA SUA BUSCA status 500 POR FAVOR, TENTE NOVAMENTE.</h2>`

    }

}






document.getElementById('localizaçaoimovel')
    .addEventListener('focusout', pesquisarimovel);