import {
  ADD_FIRST_STEP,
  ADD_CLIENT,
  ADD_SECOND_STEP,
  ADD_THIRD_STEP,
  ADD_FOUR_STEP,
  GET_CLIENT_LIST_SUCCESS,
} from "../actionTypes";

const clientInitState = {
  loading: false,
  clientList: [],
  addClientInfo: {
    titre: "Mr.",
    nom: "",
    prenom: "",
    email: "",
    entreprise: "",
    telephone: "",
    siteinternet: "",
    type: "",
    nidentificationFiscale: "",
    devis: "",
    activite: "Agence ou Société comerciale",
    conditionPaiement: "Personalisé",
    adresse: "",
    codePostal: "",
    etat: "",
    pays: "",
    utilisateur: "6235e396cb3d6874fad966c0",
    stepOneValidated: false,
    stepTwoValidated: false,
    stepThreeValidated: false,
    stepFourValidated: false,
    adresses: [],
  },
};

const clientReducer = (state = clientInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case ADD_CLIENT:
      return { ...state, loading: true };
    case ADD_SECOND_STEP:
      let { type, nidentificationFiscale, devis, activite, conditionPaiement } =
        payload;
      return {
        ...state,
        addClientInfo: {
          ...state.addClientInfo,
          type: type,
          nidentificationFiscale: nidentificationFiscale,
          devis: devis,
          activite: activite,
          conditionPaiement: conditionPaiement,
          stepTwoValidated: true,
        },
      };

    case ADD_FIRST_STEP:
      let { email, entreprise, nom, prenom, telephone, titre, siteinternet } =
        payload;
      return {
        ...state,
        addClientInfo: {
          ...state.addClientInfo,
          email: email,
          entreprise: entreprise,
          nom: nom,
          prenom: prenom,
          telephone: telephone,
          titre: titre,
          siteinternet: siteinternet,
          stepOneValidated: true,
        },
      };

    case ADD_THIRD_STEP:
      let { adresse, codePostal, etat, pays } = payload;
      return {
        ...state,
        addClientInfo: {
          ...state.addClientInfo,
          adresses: [
            ...state.addClientInfo.adresses,
            {
              codePostal: codePostal,
              etat: etat,
              pays: pays,
              adresse: adresse,
            },
          ],
          codePostal: codePostal,
          etat: etat,
          pays: pays,
          adresse: adresse,

          stepThreeValidated: true,
        },
      };

    case ADD_FOUR_STEP:
      return {
        ...state,
        addClientInfo: {
          ...state.addClientInfo,
          codePostal: payload.codePostal,
          adresses: [
            ...state.addClientInfo.adresses,
            {
              codePostal: payload.codePostal,
              etat: payload.etat,
              pays: payload.pays,
              adresse: payload.adresse,
            },
          ],

          stepFourValidated: true,
        },
      };
    
    case GET_CLIENT_LIST_SUCCESS:
      return {...state,clientList:payload}
    default:
      return state;
  }
};

export default clientReducer;
