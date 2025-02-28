const Popup = ({ content, onClose }) => (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        borderRadius: "8px",
      }}
    >
      <p>{content}</p>
      <button onClick={onClose} style={{ marginTop: "10px" }}>
        Tutup
      </button>
    </div>
  );
  
  export default Popup;