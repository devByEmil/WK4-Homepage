import "./App.scss";
import MainNavigator from "./navigation/MainNavigator";
import { Provider } from "@context";

function App() {
    return (
        <div className="App">
            <Provider>
                <MainNavigator />
            </Provider>
        </div>
    );
}

export default App;
