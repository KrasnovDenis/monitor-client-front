import React, {Component} from 'react';
import {SideBar} from "../common/SideBar";
import {setUpSideBar} from "./PrivateArea";
import {Col, Container, Row} from "reactstrap";
import torqueSettings from '../style/images/torque.png'

class HelpPage extends Component {

    render() {

        const sideBarItems = setUpSideBar();

        return (
            <div className="feed">
                <SideBar menuItems={sideBarItems}/>
                <div className="content-customer">
                    <Container>
                        <Row>
                            <Col>
                                <h2>Monitoring</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Система, отслеживающая состояние автомобиля</h4>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col>
                                <h2>Инструкция по использованию</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                1. Оборудование
                                Система мониторинга предполагает наличие в каждой машине приложения Torque
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                2. Установка и сбор данных
                                Для отсылки данных на систему мониторинга необходимо настроить приложение Torque как
                                показано ниже

                            </Col>
                        </Row>
                        <Row>
                            <Col/>
                            <Col>
                                <img src={torqueSettings} width="300px" alt="torque image"/>
                            </Col>
                            <Col/>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }

}

export default HelpPage;



