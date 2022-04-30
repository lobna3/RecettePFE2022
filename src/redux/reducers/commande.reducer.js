import { ADD_COMMANDE, GET_COMMANDE_LIST_SUCCESS,ADD_COMMANDE_SUCCESS } from "../actionTypes";

const commandeInitState = {
  loading: false,
  commandeList: [],
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
    recurrente: "oui",
    status: "Devis",
    etat: "NonPayé",
    client: "625d279312fbb95eed52430a",

    qte: "5",
    pu: "150",
    taxe: "8",
    prix: "250",
    service: "623efa58cef38dae7b89e586",

    typeS: "modifier",
    titreS: "CommandeF",
    descriptionS: "Commande vu par Monsieur Foulen Ben Foulen",

    soldeP: "10000",
    typePaiement: "chéque",
    regPaiement: "carte",
    etatP: "non payé",
    reste: "10",
    avance: "20",
    mis: "2",
    nCarte: "123456789",
    ccv: "2",
    dateP: Date,
    montantP: "20000",

    articles: [],
    suivies: [],
    paiements: [],
  },
};

const commandeReducer = (state = commandeInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case ADD_COMMANDE:
      return { ...state, loading: true };
    case ADD_COMMANDE_SUCCESS:
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
        client,
        qte,
        pu,
        taxe,
        prix,
        service,
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
        dateP,
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
          client: client,

          qte: qte,
          pu: pu,
          taxe: taxe,
          prix: prix,
          service: service,

          typeS: typeS,
          titreS: titreS,
          descriptionS: descriptionS,

          soldeP: soldeP,
          typePaiement: typePaiement,
          regPaiement: regPaiement,
          etatP: etatP,
          reste: reste,
          avance: avance,
          mis: mis,
          nCarte: nCarte,
          ccv: ccv,
          dateP: dateP,
          montantP: montantP,
        },
      };

    case GET_COMMANDE_LIST_SUCCESS:
      return { ...state, commandeList: payload };
    default:
      return state;
  }
};

export default commandeReducer;
