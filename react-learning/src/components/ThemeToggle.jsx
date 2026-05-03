const ThemeToggle=({ dark, setDark })=> {
  return (
    <button
      className="btn-secondary"
      onClick={() => setDark(!dark)}
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default ThemeToggle;