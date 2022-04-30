import React from "react";
import { Card, Col, Row, Progress } from "antd";
import { RecettesHeader } from "../RacetteHeader";
export default function Recette() {
  return (
    <main id="main" className="main bg-light">
      <RecettesHeader />

      <Row>
        <Col span={12}>
          <Card
         
            size="small"
            title="Impayé"
            extra={
              <span class="badge rounded-pill bg-danger">
                + 28% depuis le mois dernier
              </span>
            }
            style={{ height: 160, width: 480, margin: "0 40px", borderRadius: "10px 10px", }}
          >
            <div className="d-flex flex-row">
            
              <h6 className="text-primary">18</h6>
              <h6 className="text-danger" style={{ margin: "0 420px" }}>
                9
              </h6>
            </div>
            <div className="d-flex flex-row">
          
              <h6 className="text-primary">EnAttente</h6>{" "}
              <h6 className="text-danger" style={{ margin: "0 320px" }}>
                EnRetard
              </h6>
            </div>
            <Progress percent={50} showInfo={false} />
            <div className="d-flex flex-row">
           
              <h6>900.450.000DT</h6>
              <h6 style={{ margin: "0 230px" }}>900.450.000DT</h6>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            size="small"
            title="Payé"
            extra={
              <span class="badge rounded-pill bg-success">
                + 10% depuis le mois dernier
              </span>
            }
            style={{ height: 160, width: 480, margin: "0 20px", borderRadius: "10px 10px", }}
          >
            <div className="d-flex flex-row">
              {" "}
              <h6 className="text-primary">18</h6>{" "}
              <h6 className="text-danger" style={{ margin: "0 420px" }}>
                9
              </h6>
            </div>
            <div className="d-flex flex-row">
              {" "}
              <h6 className="text-primary">EnBanque</h6>{" "}
              <h6 className="text-danger" style={{ margin: "0 230px" }}>
                PasEncoueEnBanque
              </h6>
            </div>
            <Progress percent={50} showInfo={false} />
            <div className="d-flex flex-row">
              {" "}
              <h6>900.450.000DT</h6>{" "}
              <h6 style={{ margin: "0 230px" }}>900.450.000DT</h6>
            </div>
          </Card>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
