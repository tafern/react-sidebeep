import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Styles from './styles';

const FixFlexGuide = () => (
  <Styles.ContentWrapper>
    <Row>
      <Col sm={12}>
        <Styles.ImageProductType
          src="/img/fix_and_flex.svg"
          alt="imageFixFlex"
          className="img-responsive"
        />
      </Col>
      <Col sm={1} />
      <Col sm={5}>
        <Row>
          <Col sm={12}>
            <Styles.ImageGuide src="/img/fix.png" alt="imageFix" className="img-responsive" />
          </Col>
          <Col sm={12}>
            <Styles.WrapperImage>
              <Styles.ImageGuide
                src="/img/fix_servis.svg"
                alt="imageFixService"
                className="img-responsive"
              />
            </Styles.WrapperImage>
          </Col>
          <Col sm={12}>
            <Styles.Text>
              FIX SERVIS ADALAH SERVIS YANG BERSIFAT PRAKTIS DENGAN HARGA TETAP YANG SUDAH
              DITERAPKAN OLEH PENYEDIA JASA. <br />
              <br />
              BIASANYA FIX SERVIS WAKTU PENGERJAAN SERVIS AKAN SELESAI DALAM BEBERAPA JAM ATAU
              DENGAN MAKSIMAL WAKTU SATU HARI.
            </Styles.Text>
          </Col>
        </Row>
      </Col>
      <Col sm={5}>
        <Row>
          <Col sm={12}>
            <Styles.ImageGuide src="/img/flex.png" alt="imageFlex" className="img-responsive" />
          </Col>
          <Col sm={12}>
            <Styles.WrapperImage>
              <Styles.ImageGuide
                src="/img/flex_servis.svg"
                alt="imageFlexService"
                className="img-responsive"
              />
            </Styles.WrapperImage>
          </Col>
          <Col sm={12}>
            <Styles.Text>
              FLEX SERVIS ADALAH SERVIS YANG BERSIFAT QUOTATION (HARGA AKAN BERUBAH SESUAI DENGAN
              KRITERIA SERVIS YANG ANDA INGINKAN). <br />
              <br />
              DAN SERVIS WARKTU PENGERJAAN SERVIS DAPAT LEBIH DARI SATU HARI/MINGGUAN/BULAN.
              TERGANTUNG DARI KESEPAKATAN KEDUA BELAH PIHAK.
            </Styles.Text>
          </Col>
        </Row>
      </Col>
      <Col sm={1} />
    </Row>
  </Styles.ContentWrapper>
);
export default FixFlexGuide;
