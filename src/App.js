import React from "react";
import Nav from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";
import Signup from "./signup/Signup";

function App() {
  return (
    <div className="App">
      <Nav />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton className="button is-primary" text="Submit" />
      <Signup />
    </div>
  );
}

export default App;
