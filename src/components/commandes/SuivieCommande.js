import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCommandeApi } from "../../redux/actions/commande.actions";
import { useToasts } from "react-toast-notifications";
import { Modal, DatePicker, Form, Select } from "antd";
import { useForm, Controller, get } from "react-hook-form";
import { getCommandeListApi } from "../../redux/actions/commande.actions";
import { addSuivieApi } from "../../redux/actions/suivie.actions";
import moment from "moment";
import "../../components/clients/modal.css";

const SuivieCommande = ({ isOpen, handleClose }) => {
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const { commandeList } = useSelector((state) => state.commande);
  const {
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      typeS: "",
      titreS: "",
      descriptionS: "",
      commande: "6287b5d6afa37ef9b6818c18",
    },
  });
  useEffect(() => {
    dispatch(getCommandeListApi());
  }, []);

  const onSubmit = (data) => {
    console.log("Suivies Data", data);
    let body = {
      ...data,
    };

    dispatch(addSuivieApi(body));
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
            {/* <FileDoneOutlined style={{ fontSize: "24px", color: "" }} />*/}
            Ajouter un suivie
          </h6>
        </div>
      }
      onOK={() => {
        handleClose();
      }}
      footer={null}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label>TypeSuivie:</label>
              <Controller
                name="typeS"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="form-control"
                  ></input>
                )}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label>Titre:</label>
              <Controller
                name="titreS"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="form-control"
                  ></input>
                )}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label>Description:</label>
              <Controller
                name="descriptionS"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="form-control"
                  ></input>
                )}
              />
            </div>
          </div>
          <p></p>
          <div className="col-md-12">
            <div className="form-group">
              <Controller
                name="commande"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Form.Item label="Commande">
                    <Select
                      {...field}
                      onClick={() => {
                        dispatch(getCommandeListApi);
                      }}
                    >
                      <Select.Option>Selectionner une commande</Select.Option>
                      {commandeList.map((elm) => (
                        <Select.Option value={elm._id}>
                          {elm._id} {elm.nFacture}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                )}
              />
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
              type="submit"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Annuler
            </button>
            <input type="submit" className="btn btn-primary" />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default SuivieCommande;
