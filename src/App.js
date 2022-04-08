import "./App.css";
import { useState } from "react";
import Select from "react-select";
const options = [
  { ID: "8621", label: "Canada" },
  { ID: "8622", label: "France" },
  { ID: "8623", label: "Germany" },
  { ID: "8624", label: "Italy" },
  { ID: "8625", label: "Japan" },
  { ID: "8626", label: "India" },
];

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const setSelectedOptionhandler = (option) => {
    console.log(option.label);
    console.log(option.ID);
    setSelectedOption(option.label);
  };
  return (
    <div className="App">
      <Select
        isSearchable
        defaultValue={selectedOption}
        onChange={(option) => setSelectedOptionhandler(option)}
        options={options}
      />
    </div>
  );
}

export default App;
