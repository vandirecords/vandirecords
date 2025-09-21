import vendu from "/src/assets/single-vendu.png";
import terrain from "/src/assets/single-terrain.png";
import LogoGlitch from "../components/LogoGlitch.jsx"; // logo glitch déjà créé
import "../styles/index.css";

export default function Home() {
  return (
    <>
     <header className="hero">
  <div className="container hero-content">
    <LogoGlitch width={330} />
    <h1 className="brand-title">Vandi Records</h1>
    <p>Hub officiel du label <strong>Vandi Records</strong> pour la musique, le shop et la vibe underground.</p>
  </div>
</header>


      <main>
        {/* Derniers singles */}
        <section className="section">
          <div className="container">
            <h2>Derniers singles</h2>
            <div className="release-grid" style={{ marginTop: 16 }}>
              <article className="release-card">
                <img className="cover" src={vendu} alt="Cover VENDU" />
                <div className="release-meta">
                  <div className="release-title">VENDU</div>
                  <div className="release-sub">Single — 10.10.2025</div>
                </div>
              </article>

              <article className="release-card">
                <img className="cover" src={terrain} alt="Cover TERRAIN" />
                <div className="release-meta">
                  <div className="release-title">TERRAIN</div>
                  <div className="release-sub">Single — 15.10.2025</div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* À venir */}
        <section className="section">
          <div className="container">
            <h2>À venir</h2>
            <ul>
              <li><strong>SALE FREESTYLE</strong> — fin octobre (date à confirmer)</li>
              <li>Mini-clip « TERRAIN » — teaser cinématique</li>
              <li>Boutique (casquette / tee / blouson) — mise en vitrine</li>
            </ul>
          </div>
        </section>

        {/* Bio */}
        <section className="section">
          <div className="container">
            <h2>Bio — Vandi le Sale</h2>
            <p>
           <strong>Vandi le Sale </strong>est un rappeur underground basé à Poitiers. Bercé par la rue, les cyphers de quartier et les studios associatifs, il affine une signature sombre et ciné : kick sale, visuels glitch, esprit dojo, entre rage maîtrisée et mélodies nocturnes.
Anciennement connu sous le blaze KLK, il a écumé les scènes locales et les open mics du coin, big up au 23 qui a vu passer ses premières cartouches. Anecdote qui dit beaucoup du personnage : un soir, il devait presque ouvrir pour Ärsenik… mais en plein Ramadan, il choisit la discipline plutôt que le buzz. Pas de regrets : cette constance nourrit sa plume et son indépendance.
Aujourd’hui, sous la bannière Vandi Records, il pose une cadence régulière de singles, cultive un son raw mais propre, dans l’underground poitevin autour d’une imagerie samouraï et d’un grain VHS reconnaissable au premier regard. Vandi, c’est la preuve qu’on peut rester indé, rester vrai, et faire parler la ville – couteau entre les dents, cœur sur la main.

            </p>
          </div>
        </section>
      </main>
    </>
  );
}
