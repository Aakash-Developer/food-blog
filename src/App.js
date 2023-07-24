
import { Provider } from "react-redux";
import RouterRoot from "./Routers/Root";
import Store from "./Store/Store";

function App() {
  return (
    <Provider store={Store}>
    <RouterRoot/>
    </Provider>
  );
}

export default App;
