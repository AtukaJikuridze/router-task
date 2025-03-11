// App.tsx
import { Provider } from "react-redux";
import { store } from "./redux/store";
import MyRoutes from "./MyRoutes";
import "./globalCss.css";

const App = () => {
  return (
    <Provider store={store}>
      <MyRoutes />
    </Provider>
  );
};

export default App;
