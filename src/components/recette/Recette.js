import RecetteLayout from '../../layouts/RecetteLayout';
import { Card, Col, Row } from 'antd';
import { RecettesHeader } from '../RacetteHeader';
export default function Recette() {


  return (

    <main id="main" class="main">
      <RecettesHeader />

      <Row>
        <Col span={12} >
          <Card size="small" title="Impayé" extra={<span class="badge rounded-pill bg-danger">+28% depuis le mois dernier</span>} style={{height:150, width: 400, margin: '0 20px' }}>
            <p>19     8</p>
            <p>En attente     En retard</p>
            
            <p>900.450.000DT</p>
          </Card>
        </Col>
        <Col span={12} >
          <Card size="small" title="Payé" extra={<span class="badge rounded-pill bg-success">+10% depuis le mois dernier</span>} style={{height:150, width: 400, margin: '0 110px' }}>
          
            <p>19     8</p>
            <p>En attente     En retard</p>
            <p>900.450.000DT</p>
          </Card>
        </Col>
      </Row>
      <br/>




    </main>

  );
}