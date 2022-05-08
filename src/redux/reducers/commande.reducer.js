import {
  ADD_COMMANDE,
  ADD_COMMANDE_SUCCESS,
  GET_COMMANDE_LIST,
  GET_COMMANDE_LIST_SUCCESS,
  UPDATE_COMMANDE,
  DELETE_COMMANDE,
} from "../actionTypes";

const commandeInitState = {
  loading: false,
  commandeList: [],
  selectedCommande: {},
  addCommandeInfo: {
    dateEmission: Date,
    dateEcheance: Date,
    condition: "Personalisé",
    nFacture: "",
    nReference: "",
    total: "",
    taxes: "",
    remise: "",
    totalTtc: "",
    paye: "",
    solde: "",
    note: "",
    remarque: "",
    recurrente: "",
    status: "",
    etat: "",
    client: "625d279312fbb95eed52430a",

    qte: "",
    pu: "",
    taxe: "",
    prix: "",
    service: "623efa58cef38dae7b89e586",

    typeS: "",
    titreS: "",
    descriptionS: "",

    soldeP: "",
    typePaiement: "",
    regPaiement: "",
    etatP: "",
    reste: "",
    avance: "",
    mis: "",
    nCarte: "",
    ccv: "",
    dateP: Date,
    montantP: "",

    articles: [],
    suivies: [],
    paiements: [],
  },
};

const commandeReducer = (state = commandeInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case ADD_COMMANDE:
      let {
        dateEmission,
        dateEcheance,
        condition,
        nFacture,
        nReference,
        total,
        taxes,
        remise,
        totalTtc,
        paye,
        solde,
        note,
        remarque,
        recurrente,
        status,
        etat,
        qte,
        pu,
        taxe,
        prix,
        service,
        adresseFacturation,
        adresseLivraison,
        typeS,
        titreS,
        descriptionS,
        soldeP: soldeP,
        typePaiement,
        regPaiement,
        etatP,
        reste,
        avance,
        mis,
        nCarte,
        ccv,
        dataP,
        montantP,
      } = payload;
      return {
        ...state,
        addCommandeInfo: {
          ...state.addCommandeInfo,
          dateEmission: dateEmission,
          dateEcheance: dateEcheance,
          condition: condition,
          nFacture: nFacture,
          nReference: nReference,
          total: total,
          taxes: taxes,
          remise: remise,
          totalTtc: totalTtc,
          paye: paye,
          solde: solde,
          note: note,
          remarque: remarque,
          recurrente: recurrente,
          status: status,
          etat: etat,
          adresseFacturation,
          adresseLivraison,

          articles: [
            ...state.addCommandeInfo.articles,
            {
              qte: qte,
              pu: pu,
              taxe: taxe,
              prix: prix,
              service: service,
            },
          ],
          qte: qte,
          pu: pu,
          taxe: taxe,
          prix: prix,
          service: service,
         

          suivies: [
            ...state.addCommandeInfo.suivies,
            {
              typeS: typeS,
              titreS: titreS,
              descriptionS: descriptionS,
            },
          ],
          typeS: typeS,
          titreS: titreS,
          descriptionS: descriptionS,
        
          paiements: [
            ...state.addCommandeInfo.paiements,
            {
              soldeP: soldeP,
              typePaiement: typePaiement,
              regPaiement: regPaiement,
              etatP: etatP,
              reste: reste,
              avance: avance,
              mis: mis,
              nCarte: nCarte,
              ccv: ccv,
              dateP: dataP,
              montantP: montantP,
            },
          ],
          soldeP: soldeP,
          typePaiement: typePaiement,
          regPaiement: regPaiement,
          etatP: etatP,
          reste: reste,
          avance: avance,
          mis: mis,
          nCarte: nCarte,
          ccv: ccv,
          dateP: dataP,
          montantP: montantP,
        },
      };
    case ADD_COMMANDE_SUCCESS:
      return { ...state, loading: true };
    case GET_COMMANDE_LIST:
      return { ...state, loading: true };
    case GET_COMMANDE_LIST_SUCCESS:
      return { ...state, loading: false, commandeList: payload };
    case UPDATE_COMMANDE:
      return { ...state, selectedCommande: payload };
    case DELETE_COMMANDE:
      return { ...state, loading: true };

    default:
      return state;
  }
};

export default commandeReducer;


     