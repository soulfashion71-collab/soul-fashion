export default function Home() {
  return (
    <main className="bg-white text-black">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
          <h1 className="text-3xl font-bold tracking-wide">
            SoulFashion
          </h1>

          <nav className="hidden md:flex gap-8 text-lg font-medium">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">New Arrivals</a>
            <a href="#">Collections</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        className="h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070')",
        }}
      >
        <div className="bg-black/50 w-full h-full flex items-center">
          <div className="px-10 md:px-24 text-white max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              SoulFashion
            </h1>

            <p className="mt-6 text-xl md:text-2xl text-gray-200">
              Premium Fashion For Modern Style
            </p>

            <button className="mt-8 bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-200 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="py-24 px-8 md:px-20">
        <h2 className="text-5xl font-bold mb-14 text-center">
          Featured Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="relative overflow-hidden rounded-2xl group">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200"
              className="h-[500px] w-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-6">
              <h3 className="text-white text-3xl font-bold">Men</h3>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl group">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200"
              className="h-[500px] w-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-6">
              <h3 className="text-white text-3xl font-bold">Women</h3>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl group">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200"
              className="h-[500px] w-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-6">
              <h3 className="text-white text-3xl font-bold">Accessories</h3>
            </div>
          </div>

        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="bg-gray-100 py-24 px-8 md:px-20">
        <h2 className="text-5xl font-bold mb-14 text-center">
          Trending Products
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {[
            {
              name: "Premium Jacket",
              price: "₹2999",
              image:
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200",
            },
            {
              name: "Stylish Hoodie",
              price: "₹1999",
              image:
                "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200",
            },
            {
              name: "Classic Shirt",
              price: "₹1499",
              image:
                "https://images.unsplash.com/photo-1527719327859-c6ce80353573?q=80&w=1200",
            },
            {
              name: "Modern Outfit",
              price: "₹3499",
              image:
                "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.image}
                className="h-80 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-semibold">
                  {item.name}
                </h3>

                <p className="text-gray-600 mt-2">
                  {item.price}
                </p>

                <button className="mt-4 w-full bg-black text-white py-3 hover:bg-gray-800 transition">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16 text-center">
        <h2 className="text-4xl font-bold">SoulFashion</h2>

        <p className="mt-4 text-gray-400">
          Premium Fashion Brand
        </p>
      </footer>

    </main>
  );
}