import Debounce from "./components/Debounce";
import PhoneNumberInput from "./components/PhoneNumberInput";
import SearchArr from "./components/SearchArr";

function App() {
  return (
    <>
      <div>
        <SearchArr />
        <Debounce />
        <PhoneNumberInput />
      </div>
    </>
  );
}

export default App;
