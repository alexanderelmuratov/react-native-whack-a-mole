import { Provider } from "react-redux";
import { store } from "./redux/store";
import { GameBoard } from "./components/GameBoard";

const App = () => (
  <Provider store={store}>
    <GameBoard />
  </Provider>
);

export default App;
