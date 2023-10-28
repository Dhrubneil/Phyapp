/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../../styles/Header.module.css';
import Icon from '../icon';
import Search from '../search/search';

function Navbar() {
  const [moreItems, setMoreItems] = useState(false);
  const [count, setCount] = useState(0);

  const toggleMore = () => {
    setMoreItems(!moreItems);
    setCount(count + 1);
  };
  return (
    <div>
      <nav>
        <span className="logo">
          <Icon />
          <NavLink to="/home" className={classes.logoLink}><h1 className="app-icon">Pyhapp</h1></NavLink>
        </span>

        <ul className="navLinks">

          <li className="navlink">
            <NavLink to="/medicines" className={(navInfo) => (navInfo.isActive ? classes.active : classes.navlink)}>
              Medicines
            </NavLink>
          </li>
          <li className="navlink">
            <NavLink to="/logs" className={(navInfo) => (navInfo.isActive ? classes.active : classes.navlink)}>
              Logs
            </NavLink>
          </li>
          <li className="navlink">
            <NavLink to="/prescriptions" className={(navInfo) => (navInfo.isActive ? classes.active : classes.navlink)}>
              Prescriptions
            </NavLink>
          </li>
          <li className="navlink">
            <NavLink to="/notes" className={(navInfo) => (navInfo.isActive ? classes.active : classes.navlink)}>
              Notes
            </NavLink>
          </li>
          <li className="navlink">
            <NavLink to="/reports" className={(navInfo) => (navInfo.isActive ? classes.active : classes.navlink)}>
              Reports
            </NavLink>
          </li>
          <li className="navlink">
            <NavLink to="/bp-records" className={(navInfo) => (navInfo.isActive ? classes.active : classes.navlink)}>
              BP Records
            </NavLink>
          </li>
        </ul>

        <Search />

        {moreItems ? <div className="more" onClick={() => toggleMore()}>Show Less</div> : <div className="more" onClick={() => toggleMore()}>Show More</div>}

        <div className="log-icon" id="note-menu" onClick={() => toggleMore()}>
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>

        {

          moreItems
            ? (
              <div className="more-items">

                <li className="navlink">
                  <NavLink to="/medicines" className={(navInfo) => (navInfo.isActive ? classes.active : classes.navlink)}>
                    Medicines
                  </NavLink>
                </li>
                <li className="navlink">
                  <NavLink to="/logs" className={(navInfo) => (navInfo.isActive ? classes.active : classes.navlink)}>
                    Logs
                  </NavLink>
                </li>
                <li className="navlink">
                  <NavLink to="/prescriptions" className={(navInfo) => (navInfo.isActive ? classes.active : classes.navlink)}>
                    Prescriptions
                  </NavLink>
                </li>
                <li className="navlink">
                  <NavLink to="/notes" className={(navInfo) => (navInfo.isActive ? classes.active : classes.navlink)}>
                    Notes
                  </NavLink>
                </li>
                <li className="navlink">
                  <NavLink to="/reports" className={(navInfo) => (navInfo.isActive ? classes.active : classes.navlink)}>
                    Reports
                  </NavLink>
                </li>
                <li className="navlink">
                  <NavLink to="/bp-records" className={(navInfo) => (navInfo.isActive ? classes.active : classes.navlink)}>
                    BP Records
                  </NavLink>
                </li>
              </div>
            )
            : (count % 2 === 0 && count !== 0) && (
              <div className="more-items-hide">

                <li className="navlink">
                  <NavLink to="/medicines" className={(navInfo) => (navInfo.isActive ? classes.active : classes.navlink)}>
                    Medicines
                  </NavLink>
                </li>
                <li className="navlink">
                  <NavLink to="/logs" className={(navInfo) => (navInfo.isActive ? classes.active : classes.navlink)}>
                    Logs
                  </NavLink>
                </li>
                <li className="navlink">
                  <NavLink to="/prescriptions" className={(navInfo) => (navInfo.isActive ? classes.active : classes.navlink)}>
                    Prescriptions
                  </NavLink>
                </li>
                <li className="navlink">
                  <NavLink to="/notes" className={(navInfo) => (navInfo.isActive ? classes.active : classes.navlink)}>
                    Notes
                  </NavLink>
                </li>
                <li className="navlink">
                  <NavLink to="/reports" className={(navInfo) => (navInfo.isActive ? classes.active : classes.navlink)}>
                    Reports
                  </NavLink>
                </li>
                <li className="navlink">
                  <NavLink to="/bp-records" className={(navInfo) => (navInfo.isActive ? classes.active : classes.navlink)}>
                    BP Records
                  </NavLink>
                </li>
              </div>
            )

        }
      </nav>
    </div>
  );
}

export default Navbar;
