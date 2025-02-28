const Filter = ({ options, selectedOption, onSelect }) => (
    <select
      value={selectedOption}
      onChange={(e) => onSelect(e.target.value)}
      style={{
        padding: "8px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        marginBottom: "20px",
        color:"black"
      }}
    >
      <option value="">Pilih Filter</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
  
  export default Filter;