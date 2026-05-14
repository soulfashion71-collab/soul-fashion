export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white p-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* Product Image */}
        <div className="rounded-3xl overflow-hidden bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <p className="uppercase tracking-[4px] text-pink-600 text-sm">
            Soul Originals
          </p>

          <h1 className="text-5xl font-black mt-4">
            Oversized Essential Tee
          </h1>

          <p className="text-3xl font-bold mt-6">
            ₹999
          </p>

          <p className="mt-8 text-gray-600 leading-8">
            Premium oversized streetwear t-shirt designed for comfort,
            fashion, and everyday wear.
          </p>

          {/* Sizes */}
          <div className="mt-10">
            <p className="font-bold mb-4">Select Size</p>

            <div className="flex gap-4">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className="w-14 h-14 rounded-full border border-black hover:bg-black hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">
            <button className="bg-pink-600 text-white px-10 py-4 rounded-xl font-bold uppercase">
              Add To Bag
            </button>

            <button className="border border-black px-10 py-4 rounded-xl font-bold uppercase">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}