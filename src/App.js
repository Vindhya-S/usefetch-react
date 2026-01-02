import useFetch from "./hooks/useFetch";
import "./App.css";

function App() {
  const { data, loading, errorMsg } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
    return <p className="status">Loading products...</p>;
  }

  if (errorMsg) {
    return <p className="status">{errorMsg}</p>;
  }

  return (
    <div className="App">
      <h2>Product List</h2>

      <div className="product-grid">
        {data.slice(0, 8).map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.images[0]} alt={item.title} />
            <p>{item.title}</p>
            <p>₹ {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
