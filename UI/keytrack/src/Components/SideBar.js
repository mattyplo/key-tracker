import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

//other components
import Account from "./account";
import Logout from "./logout";

import FormAddKey from "./FormAddKey";
import ForsmAddProperty from "./FormAddProperty";
import MyForm from "./MyForm";

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                  path: '/', /* path is used as id to check which NavItem is active*/
                  name: 'Home',
                  css: 'fa fa-fw fa-home',
                  key: 1 /* Key is required, else console throws error. */
                },
                {
                  path: '/FormAddKey',
                  name: 'FormAddKey',
                  css: 'fa fa-fw fa-clock',
                  key: 2
                },
                {
                  path: '/NoMatch',
                  name: 'NoMatch',
                  css: 'fas fa-hashtag',
                  key: 3
                },
                {
                  path: '/FormAddProperty',
                  name: 'NoMatch',
                  css: 'fas fa-hashtag',
                  key: 4
                },
                {
                  path: '/account',
                  name: 'NoMatch',
                  css: 'fas fa-hashtag',
                  key: 5
                },
              ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
    }

    render() {
        const { items, activePath } = this.state;
        return(
            <div>
                {
                    items.map((item) => {
                        return (
                            <NavItem
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                onItemClick={this.onItemClick}
                                active={item.path === activePath}
                                key={item.key}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

// const StyledNavItem = styled.div`
//     height: 70px;
//     width: 75px; /* width must be same size as NavBar to center */
//     text-align: center; /* Aligns <a> inside of NavIcon div */
//     margin-bottom: 0;   /* Puts space between NavItems */
//     a {
//         font-size: 2.7em;
//         color: ${(props) => props.active ? "white" : "#9FFFCB"};
//         :hover {
//             opacity: 0.7;
//             text-decoration: none; /* Gets rid of underlining of icons */
//         }
//     }
// `;

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return(
            <div active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                </Link>
            </div>
        );
    }
}



export default class SideBar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}
