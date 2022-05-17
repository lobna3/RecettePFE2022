import React, { useState, useEffect } from "react";
import { getCommandeListApi } from "../../redux/actions/commande.actions";
import { useDispatch, useSelector } from "react-redux";
import { Bar } from "@ant-design/plots";

const Chart = () => {
  const dispatch = useDispatch();
  const { commandeList } = useSelector((state) => state.commande);
  const paye = commandeList.filter((u) => u.note === "Payé");
  const nonpaye = commandeList.filter((u) => u.note === "Non Payé");
  // const accepte = commandeList.filter((u) => u.etat === "Accepté");
  // const enattente = commandeList.filter((u) => u.etat === "En attente");
  // const annuler = commandeList.filter((u) => u.etat === "Annuler");
  // const echenace = commandeList.filter((u) => u.etat === "Arrivé à l'échéance");
  useEffect(() => {
    dispatch(getCommandeListApi());
  }, []);
  const data = [
    {
      type: "Payé",
      year: "2022",
      value: paye.length,
    },
    {
      type: "Non Payé",
      year: "2022",
      value: nonpaye.length,
    },
    {
      type: "Payé",
      year: "2021",
      value: 75,
    },
    {
      type: "Non Payé",
      year: "2021",
      value: 25,
    },
    {
      type: "Payé",
      year: "2020",
      value: 65,
    },
    {
      type: "Non Payé",
      year: "2020",
      value: 35,
    },
    {
      type: "Payé",
      year: "2019",
      value: 80,
    },
    {
      type: "Non Payé",
      year: "2019",
      value: 20,
    },
  ];
  const config = {
    data,
    xField: "value",
    yField: "year",
    seriesField: "type",
    isPercent: true,
    isStack: true,

    /** 自定义颜色 */
    // color: ['#2582a1', '#f88c24', '#c52125', '#87f4d0'],
    label: {
      position: "middle",
      content: (item) => {
        return item.value.toFixed(2);
      },
      style: {
        fill: "#fff",
      },
    },
  };
  return <Bar {...config} />;
};

export default Chart;

/*{
     type: "Accepté",
     year: "2022",
      value: accepte.length,
    },
    {
      type: "En attente",
      year: "2022",
      value: enattente.length,
    },
    {
      type: "Annuler",
      year: "2022",
      value: annuler.length,
    },
    {
      type: "Arrivé à l'échéance",
      year: "2022",
      value: echenace.length,
    },
    {
      type: "Accepté",
      year: "2021",
      value:  628,
    },
    {
      type: "En attente",
      year: "2021",
      value: 780,
    },
    {
      type: "Annuler",
      year: "2021",
      value: 200,
    },
    {
      type: "Arrivé à l'échéance",
      year: "2021",
      value: 1000,
    }, */
