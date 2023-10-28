import React, { useEffect, useState } from 'react';

function Search() {
  // const [value, setValue] = useState('');
  // const [filteredData, setFilteredData] = useState({});
  // const [medicines, setMedicines] = useState({});
  const [state, setState] = useState({ value: '', data: [] });
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/medicines')
      .then((res) => res.json())
      .then((data) => {
        setMedicines(data);
      });
  }, []);

  const handleChange = (e) => {
    const filteredData = medicines.filter((medicine) => {
      if (e.target.value === null) return medicines;
      return medicine.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setState({
      value: e.target.value,
      data: filteredData,
    });
  };
  return (
    <div className="nav-right">

      <form>
        <input type="search" id="nav-search" name="medsearch" value={state.value} placeholder="Search Medicine" className="search" onChange={(e) => handleChange(e)} />
      </form>
      <ul className="show">
        {
        (state.value.length === 0 ? '' : state.data.map((data) => (
          <div className="med-desc">
            <p className="med-name">{data.name}</p>
            <p className="med-type">{data.type}</p>
          </div>
        )))
      }

      </ul>

    </div>

  );
}

export default Search;
