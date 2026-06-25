import "./App.css";

const whatsappNumber = "523313461329";
const whatsapp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hola, quiero hacer un pedido en La Patrona."
)}`;
const mapsUrl = "https://maps.app.goo.gl/22tcZ4gyp5uf9RfK7";
const address = "La Patrona, Guadalajara, Jalisco";
const fallbackImage =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop";

const specialties = [
  {
    img: "/chilaquiles.jpg",
    title: "Chilaquiles",
    desc: "Totopos bañados en salsa verde o roja, con frijoles refritos y un toque crujiente.",
    price: "$70",
  },
  {
    img: "/huevos.jpg",
    title: "Huevos al gusto",
    desc: "Preparados al momento con guarnición casera para un desayuno completo.",
    price: "$90",
  },
  {
    img: "/molletes.jpg",
    title: "Molletes",
    desc: "Pan dorado con frijoles, queso gratinado y opciones saladas, dulces o mixtas.",
    price: "Desde $70",
  },
  {
    img: "/americano.jpg",
    title: "Desayuno americano",
    desc: "Huevos, tocino, pan, café y sabores clásicos para empezar con calma.",
    price: "$110",
  },
  {
    img: "/huevos.jpg",
    title: "Omelette",
    desc: "Omelette suave de dos huevos con ingredientes a elegir y pan crujiente.",
    price: "$105",
  },
  {
    img: "/waffle.jpg",
    title: "Hotcakes",
    desc: "Pieza suave y esponjosa, perfecta con café recién hecho.",
    price: "$24",
  },
  {
    img: "/waffle.jpg",
    title: "Waffles",
    desc: "Crujientes por fuera, suaves por dentro y servidos con un toque dulce.",
    price: "$30",
  },
  {
    img: "/panfrances.jpg",
    title: "Pan francés",
    desc: "Pan brioche bañado en mezcla dulce, dorado y aromático.",
    price: "$40",
  },
];

const menu = [
  {
    category: "Desayunos",
    items: [
      ["Chilaquiles sencillos o divorciados", "$70"],
      ["Huevos al gusto", "$90"],
      ["Desayuno americano", "$110"],
      ["Omelette", "$105"],
    ],
  },
  {
    category: "Antojos",
    items: [
      ["Molletes salados", "$80"],
      ["Molletes dulces", "$70"],
      ["Molletes mixtos", "$75"],
    ],
  },
  {
    category: "Postres",
    items: [
      ["Hotcake", "$24"],
      ["Waffle", "$30"],
      ["Pan francés", "$40"],
    ],
  },
];

const favorites = ["Chilaquiles", "Molletes", "Desayuno Americano", "Waffles", "Pan francés"];
const gallery = Array.from({ length: 8 }, (_, index) => `/galeria${index + 1}.jpg`);

export default function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <a className="brand" href="#inicio" aria-label="La Patrona inicio">
          <img src="/logo.png" alt="" onError={useFallbackLogo} />
          <span>La Patrona</span>
        </a>
        <div className="nav-links">
          <a href="#especialidades">Especialidades</a>
          <a href="#menu">Menú</a>
          <a href="#ubicacion">Ubicación</a>
          <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </nav>

      <header className="hero reveal" id="inicio">
        <div className="hero-content">
          <span className="eyebrow">Desayunos & brunch</span>
          <h1>La Patrona</h1>
          <p>Desayunos preparados al momento para comenzar el día de la mejor manera.</p>
          <div className="hero-buttons">
            <a href="#menu">Ver menú</a>
            <a href={whatsapp} target="_blank" rel="noreferrer">Pedir por WhatsApp</a>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="secondary">Cómo llegar</a>
          </div>
        </div>
      </header>

      <section className="specialties section" id="especialidades">
        <SectionTitle label="Especialidades" title="Sabores de mañana, servidos con calma" />
        <div className="card-grid">
          {specialties.map((item) => <FoodCard key={item.title} {...item} />)}
        </div>
      </section>

      <section className="menu-section section" id="menu">
        <SectionTitle label="Menú" title="Una carta cálida y elegante" />
        <div className="menu-board">
          {menu.map((group) => (
            <article className="menu-category reveal" key={group.category}>
              <h3>{group.category}</h3>
              {group.items.map(([name, price]) => (
                <div className="menu-row" key={name}>
                  <span>{name}</span><i></i><strong>{price}</strong>
                </div>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="favorites section">
        <SectionTitle label="Favoritos" title="Los más pedidos de la casa" />
        <div className="favorite-grid">
          {favorites.map((name, index) => (
            <article className="favorite-card reveal" key={name}>
              <span>0{index + 1}</span>
              <h3>{name}</h3>
              <p>Una elección consentida para disfrutar en familia, con café o algo dulce.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience section">
        <SectionTitle label="Experiencia" title="Cafetería moderna con alma familiar" />
        <div className="experience-grid">
          {[
            "Ingredientes frescos",
            "Preparado al momento",
            "Café recién hecho",
            "Ambiente familiar",
          ].map((item) => <div className="experience-card reveal" key={item}>{item}</div>)}
        </div>
      </section>

      <section className="gallery section" id="galeria">
        <SectionTitle label="Galería" title="Momentos para antojarse" />
        <div className="gallery-grid">
          {gallery.map((img, index) => (
            <img key={img} src={img} alt={`Galería La Patrona ${index + 1}`} onError={useFallbackImage} />
          ))}
        </div>
      </section>

      <section className="location section" id="ubicacion">
        <div className="location-copy reveal">
          <span className="eyebrow">Ubicación</span>
          <h2>Ven por un desayuno tranquilo</h2>
          <p>{address}</p>
          <a href={mapsUrl} target="_blank" rel="noreferrer">Abrir Google Maps</a>
        </div>
        <iframe
          title="Mapa de La Patrona"
          src="https://www.google.com/maps?q=La%20Patrona%20Guadalajara%20Jalisco&output=embed"
          loading="lazy"
        ></iframe>
      </section>

      <section className="contact section" id="contacto">
        <span className="eyebrow">Contacto</span>
        <h2>Haz tu pedido por WhatsApp</h2>
        <p>Teléfono: <strong>33 1346 1329</strong></p>
        <a href={whatsapp} target="_blank" rel="noreferrer">Pedir ahora</a>
      </section>

      <footer>
        <h3>La Patrona</h3>
        <p>Tel. 33 1346 1329 · {address}</p>
        <a href={mapsUrl} target="_blank" rel="noreferrer">Google Maps</a>
      </footer>

      <a className="whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Pedir por WhatsApp">💬</a>
    </div>
  );
}

function SectionTitle({ label, title }) {
  return (
    <div className="section-title reveal">
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
    </div>
  );
}

function FoodCard({ img, title, desc, price }) {
  return (
    <article className="food-card reveal">
      <img src={img} alt={title} onError={useFallbackImage} />
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <span>{price}</span>
      </div>
    </article>
  );
}

function useFallbackImage(event) {
  event.currentTarget.src = fallbackImage;
}

function useFallbackLogo(event) {
  event.currentTarget.style.display = "none";
}
