export default function Home() {
  return (
    <main className="bg-white text-black">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">
          
          <h1 className="text-3xl font-bold tracking-wide">
            SoulFashion
          </h1>

          <div className="flex gap-10 text-lg font-medium">
            <a href="#" className="hover:text-gray-500 transition">
              Men
            </a>

            <a href="#" className="hover:text-gray-500 transition">
              Women
            </a>

            <a href="#" className="hover:text-gray-500 transition">
              New Arrivals
            </a>

            <a href="#" className="hover:text-gray-500 transition">
              Collections
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        className="h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070')",
        }}
      >
        <div className="bg-black/40 w-full h-full flex items-center">
          <div className="px-16 text-white">

            <h1 className="text-7xl font-bold mb-6 leading-tight">
              SoulFashion <br /> Premium Store
            </h1>

            <p className="text-2xl mb-8">
              Elevate Your Style With Luxury Fashion
            </p>

            <button className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-200 transition duration-300">
              Shop Now
            </button>

          </div>
        </div>
      </section>

      {/* COLLECTION SECTION */}
      <section className="py-24 px-10">
        <h2 className="text-5xl font-bold text-center mb-16">
          Featured Collections
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="group overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800"
              className="h-[500px] w-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                Mens Wear
              </h3>

              <p className="text-gray-600">
                Premium outfits for modern men.
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800"
              className="h-[500px] w-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                Womens Wear
              </h3>

              <p className="text-gray-600">
                Elegant fashion for every occasion.
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800"
              className="h-[500px] w-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                Accessories
              </h3>

              <p className="text-gray-600">
                Watches, bags and premium accessories.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* BANNER */}
      <section className="bg-black text-white py-24 text-center">
        <h2 className="text-6xl font-bold mb-6">
          New Season Arrivals
        </h2>

        <p className="text-xl mb-8">
          Discover luxury fashion collections.
        </p>

        <button className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-300 transition">
          Explore Collection
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-10 text-center">
        <h2 className="text-3xl font-bold mb-3">
          SoulFashion
        </h2>

        <p className="text-gray-600">
          Premium Fashion Brand © 2026
        </p>
      </footer>
    </main>
  );
}