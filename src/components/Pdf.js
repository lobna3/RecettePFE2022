import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommandesListDetailsApi } from "../redux/actions/commande.details.actions";
import { useParams, useLocation } from "react-router-dom";

export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <div
        className="card"
        style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}
      >
        <table>
          <thead>
            <th>column 1</th>
            <th>column 2</th>
            <th>column 3</th>
          </thead>
          <tbody>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 3</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
const Pdf = () => {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { commandeDetails } = useSelector((state) => state.detailsCommande);
  useEffect(() => {
    dispatch(getCommandesListDetailsApi(id));
    console.log("URL", location.pathname);
  }, []);
  return <div>Pdf {commandeDetails._id}</div>;
};

export default Pdf;
