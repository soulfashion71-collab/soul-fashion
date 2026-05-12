export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 60px",
          alignItems: "center",
          background: "white",
          position: "sticky",
          top: 0,
        }}
      >
        <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
          SoulFashion
        </h1>

        <div style={{ display: "flex", gap: "25px" }}>
          <p>Men</p>
          <p>Women</p>
          <p>New Arrivals</p>
          <p>Collections</p>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        style={{
          height: "90vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          padding: "60px",
          color: "white",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "70px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            SoulFashion Store
          </h1>

          <p style={{ fontSize: "24px" }}>
            Elevate Your Style
          </p>

          <button
            style={{
              marginTop: "30px",
              padding: "14px 30px",
              fontSize: "18px",
              border: "none",
              background: "black",
              color: "white",
              cursor: "pointer",
            }}
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section style={{ padding: "70px 60px" }}>
        <h2 style={{ fontSize: "40px", marginBottom: "40px" }}>
          Shop Categories
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "25px",
          }}
        >
          <div
            style={{
              background: "#f5f5f5",
              padding: "60px",
              textAlign: "center",
              fontSize: "24px",
            }}
          >
            Mens&apos;Fashion
          </div>

          <div
            style={{
              background: "#f5f5f5",
              padding: "60px",
              textAlign: "center",
              fontSize: "24px",
            }}
          >
            Womens&apos; Fashion
          </div>

          <div
            style={{
              background: "#f5f5f5",
              padding: "60px",
              textAlign: "center",
              fontSize: "24px",
            }}
          >
            Accessories
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "black",
          color: "white",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h2>SoulFashion</h2>
        <p>Premium Fashion Brand</p>
      </footer>
    </main>
  );
}