export default function SoulFashionWebsite() {
  const categories = [
    {
      title: 'Men',
      image:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Women',
      image:
        'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Sneakers',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Streetwear',
      image:
        'https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const products = [
    {
      brand: 'Soul Originals',
      name: 'Oversized Essential Tee',
      price: '₹999',
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop',
    },
    {
      brand: 'Soul Urban',
      name: 'Premium Street Hoodie',
      price: '₹1,999',
      image:
        'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      brand: 'Soul Studio',
      name: 'Minimal Cargo Pants',
      price: '₹1,499',
      image:
        'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      brand: 'Soul Sport',
      name: 'Lifestyle Sneakers',
      price: '₹2,299',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="bg-[#fafbfc] min-h-screen text-black overflow-x-hidden">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-black/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 gap-4">
          <h1 className="text-3xl font-black uppercase tracking-wider text-pink-600">
            SoulFashion
          </h1>

          <nav className="hidden lg:flex items-center gap-8 uppercase text-sm font-semibold">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Beauty</a>
            <a href="#">Studio</a>
          </nav>

          <div className="flex-1 max-w-xl hidden md:block">
            <input
              placeholder="Search for products, brands and more"
              className="w-full bg-gray-100 rounded-md px-5 py-3 outline-none"
            />
          </div>

          <div className="flex gap-5 text-sm font-medium">
            <button>Profile</button>
            <button>Wishlist</button>
            <button>Bag</button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative h-[650px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1800&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20" />

        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6">
          <div className="text-white max-w-3xl">
            <p className="uppercase tracking-[6px] text-sm text-pink-300 mb-6">
              New Collection 2026
            </p>

            <h2 className="text-5xl md:text-8xl font-black leading-none uppercase">
              Fashion For
              <span className="block">Every Mood</span>
            </h2>

            <p className="mt-8 text-lg text-gray-200 leading-8 max-w-xl">
              Discover premium streetwear, sneakers, essentials, and fashion
              collections inspired by global trends.
            </p>

            <button className="mt-10 bg-pink-600 px-8 py-4 rounded-md font-bold uppercase hover:scale-105 transition">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-black uppercase mb-10 tracking-wide">
          Shop By Category
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition group"
            >
              <div className="overflow-hidden h-[320px]">
                <img
                  src={item.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-5 text-center">
                <h4 className="text-2xl font-bold uppercase">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-3xl font-black uppercase tracking-wide">
            Trending Now
          </h3>

          <button className="text-pink-600 font-semibold uppercase text-sm">
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group"
            >
              <div className="overflow-hidden h-[360px]">
                <img
                  src={product.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5">
                <p className="font-bold text-lg">{product.brand}</p>
                <p className="text-gray-500 mt-1">{product.name}</p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="font-black text-xl">{product.price}</p>

                  <button className="bg-pink-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="relative rounded-[40px] overflow-hidden h-[450px]">
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1800&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 h-full flex flex-col justify-center px-10 text-white max-w-3xl">
            <p className="uppercase tracking-[6px] text-pink-300 text-sm mb-5">
              SoulFashion Exclusive
            </p>

            <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight">
              Premium Fashion Experience
            </h2>

            <button className="mt-10 w-fit bg-white text-black px-8 py-4 rounded-md font-bold uppercase hover:scale-105 transition">
              Explore Collection
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h3 className="text-4xl font-black uppercase">
          Join Soul Community
        </h3>

        <p className="text-gray-500 mt-5 leading-8 max-w-2xl mx-auto">
          Be the first to know about new launches, premium collections, and
          exclusive offers.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <input
            placeholder="Enter your email"
            className="flex-1 bg-white border border-black/10 rounded-xl px-6 py-4 outline-none"
          />

          <button className="bg-pink-600 text-white px-8 py-4 rounded-xl font-bold uppercase hover:opacity-90">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-black/5 py-10 px-4 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-black uppercase text-pink-600">
              SoulFashion
            </h4>
            <p className="text-gray-500 mt-2">
              Premium fashion marketplace.
            </p>
          </div>

          <div className="flex gap-6 text-sm uppercase font-medium text-gray-600">
            <a href="#">Instagram</a>
            <a href="#">WhatsApp</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
