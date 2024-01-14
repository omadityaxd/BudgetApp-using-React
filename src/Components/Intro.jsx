import React from "react";
import { Form } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import illustration from "../assets/illustration.jpg";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start Your
          Journey Today
        </p>
        <Form method="post">
          <input
            type="text"
            required
            name="userName"
            placeholder="What is Your Name?"
            aria-label="your name"
            autoComplete="given-name"
          />
          <input type="hidden" value="newUser" name="_action" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="person with money" width={600} />
    </div>
  );
};

export default Intro;
