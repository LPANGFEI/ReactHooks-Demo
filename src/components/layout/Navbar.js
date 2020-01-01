import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// 无状态组件
const Navbar = ({ title, icon }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} aria-hidden="true" />
        <span> {title}</span>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

// 设置默认属性值
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fa fa-github"
};

// 定义属性类型
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
