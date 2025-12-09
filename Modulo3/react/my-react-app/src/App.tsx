import ParentButtonOne from "./props/ParentButtonOne";
import ParentIncrementButton from "./props/ParentIncrementButton";
import ParentInputNotifier from "./props/ParentInputNotifier";
import ParentUserList from "./props/ParentUserList";
import ParentLoginForm from "./props/ParentLoginForm";
import AreaTriangulo from "./props/AreaTriangulo";

function App() {
  return (
    <div className="App">
      <ParentButtonOne />
      <ParentIncrementButton />
      <br />
      <ParentInputNotifier />
      <br />
      <ParentUserList />
      <br />
      <ParentLoginForm />
      <br />
      <AreaTriangulo />
    </div>
  );
}

export default App;
