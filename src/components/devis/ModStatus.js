import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCommandeSatausApi } from "../../redux/actions/commande.actions";
import { useToasts } from "react-toast-notifications";
import { Modal } from "antd";
import { FileDoneOutlined } from "@ant-design/icons";
import "../../components/clients/modal.css";

const ModStatus = ({ isOpen, handleClose }) => {
  const { addToast } = useToasts();
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  const { selectedCommande } = useSelector((state) => state.commande);
  useEffect(() => {
    setStatus(selectedCommande.status);
    console.log("Selected Commande", selectedCommande);
  }, [selectedCommande]);
  const confirmAdd = () => {
    let data = {
      status,
    };
    dispatch(updateCommandeSatausApi(data, selectedCommande, addToast));
    handleClose();
  };
  return (
    <Modal
      className="modalStyle"
      visible={isOpen}
      width={600}
      onCancel={handleClose}
      title={
        <div>
          <h6 className="text-white">
            <FileDoneOutlined style={{ fontSize: "24px", color: "" }} />
            Modifier le status de la commande
          </h6>
        </div>
      }
      onOK={() => {
        handleClose();
      }}
      footer={null}
    >
      <form>
        Id Commande: {selectedCommande}
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label>Status:</label>
              <input
                type="text"
                className="form-control"
                name="status"
                value={status}
                onChange={(event) => {
                  setStatus(event.target.value);
                }}
              ></input>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div
            className="form-group"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "15px",
            }}
          >
            <button
              style={{ marginTop: 10 }}
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Annuler
            </button>
            <button
              style={{ marginTop: 10 }}
              type="button"
              className="btn btn-primary"
              onClick={confirmAdd}
            >
              <FileDoneOutlined />
              Générer
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default ModStatus;
