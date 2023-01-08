import ProductList from "../../components/ProductList";
let products = [
  {
    id: "12efw2",
    name: "Toy car",
    inStock: true,
    category: "Toy",
    imageURL:
      "https://images.pexels.com/photos/97353/pexels-photo-97353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "12efw3",
    name: "Table",
    inStock: true,
    category: "Furniture",
    imageURL:
      "https://images.pexels.com/photos/279626/pexels-photo-279626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "12efw4",
    name: "Chair",
    inStock: true,
    category: "Furniture",
    imageURL:
      "https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function HomePage() {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default HomePage;
