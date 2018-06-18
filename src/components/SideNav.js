import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';

import './SideNav.css';

export default class SideNav extends Component {

	constructor(props) {
		super(props);

		this.state = {
			homeCollapsed: false,
			pagesCollapsed: false
		}
	}

	render() {
		return (
			<nav id="sidebar">
				<div className="sidebar-header">
					<h3>Bootstrap Sidebar</h3>
					<strong>BS</strong>
				</div>

				<ul className="list-unstyled components">
					<li>
						<a id="sidebarCollapse" href="#">
							<i className="glyphicon glyphicon-menu-hamburger"></i>
						</a>
					</li>
					<li>
						<a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" onClick={() => this.setState({ homeCollapsed: !this.state.homeCollapsed })}>
							<i className="glyphicon glyphicon-home"></i>
							Home
                        </a>
						<Collapse in={this.state.homeCollapsed}>
							<ul className="list-unstyled" id="homeSubmenu">
								<li><a href="#">Home 1</a></li>
								<li><a href="#">Home 2</a></li>
								<li><a href="#">Home 3</a></li>
							</ul>
						</Collapse>
					</li>
					<li>
						<a href="#">
							<i className="glyphicon glyphicon-briefcase"></i>
							About
                        </a>
						<a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" onClick={() => this.setState({ pagesCollapsed: !this.state.pagesCollapsed })}>
							<i className="glyphicon glyphicon-duplicate"></i>
							Pages
                        </a>
						<Collapse in={this.state.pagesCollapsed}>
							<ul className="list-unstyled" id="pageSubmenu">
								<li><a href="#">Page 1</a></li>
								<li><a href="#">Page 2</a></li>
								<li><a href="#">Page 3</a></li>
							</ul>
						</Collapse>
					</li>
					<li>
						<a href="#">
							<i className="glyphicon glyphicon-link"></i>
							Portfolio
                        </a>
					</li>
					<li>
						<a href="#">
							<i className="glyphicon glyphicon-paperclip"></i>
							FAQ
                        </a>
					</li>
					<li>
						<a href="#">
							<i className="glyphicon glyphicon-send"></i>
							Contact
                        </a>
					</li>
				</ul>
			</nav>
		)
	}
}
