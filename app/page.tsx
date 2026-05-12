export default function Home() {
  const products = [
    {
      name: "Urban Oversized Tee",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Vintage Street Hoodie",
      price: "₹1899",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Minimal Cargo Pants",
      price: "₹1499",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1600&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 px-6">
          <p className="uppercase tracking-[6px] text-sm text-gray-300">
            Premium Streetwear
          </p>

          <h1 className="text-6xl md:text-8xl font-black mt-4 uppercase">
            Soul Fashion
          </h1>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Modern fashion for creators, dreamers, and trendsetters.
          </p>

          <button className="mt-8 px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-black uppercase mb-12">
          New Collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl overflow-hidden"
            >
              <img
                src={product.image}
                className="w-full h-[450px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{product.name}</h3>

                <p className="text-gray-400 mt-2">{product.price}</p>

                <button className="mt-5 w-full py-3 bg-white text-black rounded-full font-semibold">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="mx-6 rounded-3xl overflow-hidden relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="relative z-10 h-full flex items-center justify-center flex-col text-center px-6">
          <h2 className="text-5xl font-black uppercase">
            Wear Your Soul
          </h2>

          <button className="mt-8 px-8 py-4 bg-white text-black rounded-full font-bold">
            Explore
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-400">
        <h3 className="text-3xl font-black text-white uppercase">
          Soul Fashion
        </h3>

        <p className="mt-3">
          © 2026 Soul Fashion. All rights reserved.
        </p>
      </footer>
    </main>
  );
}