import React from "react";
import Player from "./components/Player";
import SideBar from './components/SideBar'
import categories from './data';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{ display: 'flex', placeContent: 'center' }}>
        <Player />
        <SideBar categories={categories}/>
      </div>
    </Provider>
  );
}

export default App;
