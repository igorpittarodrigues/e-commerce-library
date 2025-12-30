function Button({ texto, cor, onClick }) {
  return (
    <button className={`px-4 py-2 rounded ${cor}`}
     onClick={onClick}>

      {texto}

    </button>
  );
}

export default Button;