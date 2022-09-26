import React from "react";
import { Affix, Menu, Row, Tooltip } from "antd";
import logo from '../../assets/images/bg/logo.png';

import { PieChartOutlined, UserOutlined, TeamOutlined, FileOutlined, ProjectOutlined, UsergroupAddOutlined, ControlOutlined } from "@ant-design/icons";
import { Link, useRouteMatch } from "react-router-dom";
import { useTranslation } from "react-i18next";

const { SubMenu } = Menu;
function SideBarAdmin ( props ) {
  const { url } = useRouteMatch();
  const { i18n, t } = useTranslation();
  // const { SubMenu } = Menu;
  return (
    <Affix offsetTop={ 0 }>
      <div>
        <div className="logo">
          <Row align="middle" justify="center" gutter={ 8 }>
            <Tooltip placement="right" color={ "orange" } title={ "Admin Logo" }>
              {/* <img
                src={
                  logo
                }
                alt="site logo"
                style={ { width: "90%", height: "auto", margin: "10px" } }
              /> */}
              <h2 style={ { padding: "10px 0" } }> Maktab </h2>
            </Tooltip>
          </Row>
        </div>
        <div>
          <Menu theme="light" defaultSelectedKeys={ [ "1" ] } mode="inline">
            <Menu.Item key="1" icon={ <PieChartOutlined /> }>
              <Link to={ `${ url }/home` }> { t( "home" ) } </Link>
            </Menu.Item>

            <Menu.Item key="3" icon={ <UsergroupAddOutlined /> }>
              <Link to={ `${ url }/group` }> Guruhlar </Link>
            </Menu.Item>
            <Menu.Item key="10" icon={ <UsergroupAddOutlined /> }>
              <Link to={ `${ url }/teacher` }> Ustozlar </Link>
            </Menu.Item>
            <Menu.Item key="5" icon={ <ProjectOutlined /> }>
              <Link to={ `${ url }/subject` }> Fan qo'shish </Link>
            </Menu.Item>

            <SubMenu key="sub1" icon={ <ControlOutlined /> } title="Student">
              <Menu.Item key="4" icon={ <ProjectOutlined /> }>
                <Link to={ `${ url }/student` }> O'quvchi qo'shish </Link>
              </Menu.Item>

              <Menu.Item key="6" icon={ <ProjectOutlined /> }>
                <Link to={ `${ url }/students/group` }> O'quvchi guruhi </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={ <TeamOutlined /> } title="Team">
              <Menu.Item key="7">Guruh 1</Menu.Item>
              <Menu.Item key="8">Guruh 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={ <FileOutlined /> }>
              Hujjatlar
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </Affix>
  );
}

export default SideBarAdmin;
