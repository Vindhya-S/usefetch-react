import useFetch from "./hooks/useFetch";
import "./App.css";

function App() {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
    return <p className="status">Loading products...</p>;
  }

  if (error) {
    return <p className="status">{error}</p>;
  }

  return (
    <div className="App">
      <h2>Product List</h2>

      <div className="product-grid">
        {data.slice(0, 8).map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.images[0]} alt={item.title} />
            <h4>{item.title}</h4>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
