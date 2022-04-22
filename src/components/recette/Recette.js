import RecetteLayout from '../../layouts/RecetteLayout';
import { Card, Col, Row } from 'antd';
import {RecettesHeader} from '../RacetteHeader';
export default function Recette() {


  return (

    <main id="main" class="main">
        <RecettesHeader/>
       
        <Row>
          <Col span={12} >
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={12} >
            <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>



    
    </main>

  );
}