import React from "react";
import logomark from "../assets/logomark.svg";
import { Form, NavLink } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/solid";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="go to homepage">
        <img src={logomark} height={30} />
        <span>Homebudget</span>
      </NavLink>
      {userName && (
        <Form
          action="/logout"
          method="POST"
          onSubmit={(event) => {
            if (!confirm("Delete User and all its data?")) {
              event.preventDefault();
            }
          }}
        >
          <button className="btn btn--warning" onClick="submit">
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
