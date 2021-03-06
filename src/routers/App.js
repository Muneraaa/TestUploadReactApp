import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Logins from "../pages/Logins";
import principal from "../pages/principal";
import registrarse from "../pages/registrarse";
import olvidocontra from "../pages/olvidocontra";
import ejercicio from "../pages/ejercicio";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/logins" component={Logins} />
        <Route exact path="/registrarse" component={registrarse} />
        <Route exact path="/Siguiente" component={Logins} />
        <Route exact path="/inicia" component={principal} />
        <Route exact path="/principal" component={Logins} />
        <Route exact path="/btnAtrasInii" component={Inicio} />
        <Route exact path="/olvidocontra" component={olvidocontra} />
        <Route exact path="/:ejercicio" component={ejercicio} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
