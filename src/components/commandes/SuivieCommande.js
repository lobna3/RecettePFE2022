import React, {  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal,  Form, Select } from "antd";
import { useForm, Controller} from "react-hook-form";
import { getCommandeListApi } from "../../redux/actions/commande.actions";
import { addSuivieApi } from "../../redux/actions/suivie.actions";
import {
   
    FormOutlined,
  
  } from "@ant-design/icons";
import "../../components/clients/modal.css";

const SuivieCommande = ({ isOpen, handleClose }) => {
  const dispatch = useDispatch();
  const { commandeList } = useSelector((state) => state.commande);
  const {
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      typeS: "La commande vu par",
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
             <FormOutlined style={{ fontSize: "24px", color: "" }} />{" "}
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
              <Controller
                        name="typeS"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <Form.Item
                            label="TypeSuivie:"
                           
                          >
                            <Select {...field}>
                              <Select.Option value={"La commande vu par"}>
                              La commande vu par
                              </Select.Option>
                              <Select.Option
                                value={"La commande livré avec succées"}
                              ></Select.Option>
                              <Select.Option
                                value={"La commande a été modifié"}
                              ></Select.Option>
                              <Select.Option
                                value={"Commande créer"}
                              ></Select.Option>
                            </Select>
                          </Form.Item>
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
                        <Select.Option value={elm._id}>{elm.status}: {" "}
                          {elm._id}  
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
            <input type="submit" className="btn btn-primary" style={{ marginTop: 10 }} />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default SuivieCommande;
