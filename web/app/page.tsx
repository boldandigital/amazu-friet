import {
  ORDER_URL,
  MENU_URL,
  facts,
  ingredients,
  nav,
  products,
  steps,
} from '@/lib/content';

export default function Home() {
  return (
    <>
      <main>
        {/* ---------------------------------------------------------- HERO */}
        <section className="hero" aria-label="Amazú Friet">
          <div className="hero__stage">
            <img
              className="hero__table"
              src="/images/hero-bg.jpg"
              alt=""
              width={1600}
              height={900}
              fetchPriority="high"
            />
            <img
              className="hero__burst"
              src="/images/hero-burst.jpg"
              alt="Batatas caneladas douradas caindo em uma caixa kraft sobre uma mesa escura."
              width={1672}
              height={941}
              fetchPriority="high"
            />
            <div className="hero__vignette" aria-hidden="true" />

            <img
              className="hero__seal"
              src="/brand/seal.png"
              alt="Amazú Doces, Premium Amazônia, Raízes da Floresta"
              width={133}
              height={133}
              fetchPriority="high"
            />

            <a className="hero__order" href={ORDER_URL}>
              <span>Pedir agora</span>
              <img src="/brand/icon-cart.svg" alt="" width={16} height={16} />
            </a>

            <h1 className="hero__wordmark">AMAZÚ</h1>

            <p className="hero__tagline">Desperte sua fome interior.</p>

            <a className="hero__explore" href="#cardapio">
              Explorar
            </a>

            <div className="hero__thumbs">
              <img
                className="hero__thumb hero__thumb--a"
                src="/images/product-1.jpg"
                alt="Batatas caneladas caindo em uma caixa kraft."
                width={161}
                height={201}
              />
              <img
                className="hero__thumb hero__thumb--b"
                src="/images/product-2.jpg"
                alt="Batatas caneladas com queijo derretido e charque desfiado."
                width={161}
                height={201}
              />
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------- NAV */}
        <nav className="nav" aria-label="Seções">
          <div className="shell nav__inner">
            <span className="nav__mark">Amazú Friet</span>
            <ul className="nav__links">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* ------------------------------------------------------ MANIFESTO */}
        <section className="section shell" id="manifesto">
          <div className="manifesto">
            <div data-reveal>
              <span className="eyebrow">Técnica belga, alma portuguesa</span>
              <h2 className="display manifesto__title">
                Friet não é acompanhamento. É prato.
              </h2>
              <p className="manifesto__pt">Raízes da Floresta</p>
            </div>
            <div data-reveal>
              <p className="prose manifesto__body">
                Cada caixa nasce do que a estação dá. A técnica é a dupla fritura
                belga, o tempero vem da Amazônia, e o resultado foi feito para
                ficar no centro da mesa, e não ao lado dela.
              </p>
              <ul className="facts">
                {facts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ THE RANGE */}
        <section className="section shell" id="cardapio">
          <div className="range__head">
            <div>
              <span className="eyebrow">O cardápio</span>
              <h2 className="display display--tight" style={{ marginTop: 16 }}>
                O que está na caixa hoje
              </h2>
            </div>
            <p className="prose prose--muted" style={{ maxWidth: '38ch' }}>
              O cardápio acompanha o mercado. Preços e pesos são os que estão
              impressos na folha de hoje.
            </p>
          </div>

          <div className="range__list">
            {products.map((product) => (
              <article className="product" key={product.id}>
                <div className="product__media">
                  <img
                    src={product.image}
                    alt={product.alt}
                    width={1080}
                    height={720}
                    loading="lazy"
                  />
                </div>
                <div className="product__text">
                  <div className="badges">
                    {product.badges.map((badge) => (
                      <span
                        key={badge.label}
                        className={`badge badge--${badge.tone}`}
                      >
                        {badge.label}
                      </span>
                    ))}
                    <span className="weight">{product.weight}</span>
                  </div>
                  <h3 className="product__title">{product.name}</h3>
                  <p className="prose product__body">{product.body}</p>
                  {product.price ? (
                    <p className="product__price">{product.price}</p>
                  ) : (
                    <p className="product__price">
                      <span className="product__priceNote">
                        {product.priceNote}
                      </span>
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --------------------------------------------------------- A RAIZ */}
        <section className="section shell" id="raiz">
          <div className="raiz">
            <div data-reveal>
              <span className="eyebrow">Raízes da Floresta</span>
              <h2 className="display raiz__title">
                O trabalho que começa na raiz
              </h2>
              <p className="prose raiz__body">
                Raízes da Floresta é o nome sobre o qual a casa foi erguida: raiz,
                ofício e o ar da Amazônia. Tudo é escolhido no mercado, preparado
                na cozinha e servido na mesma noite.
              </p>
            </div>
            <figure data-reveal>
              <div className="raiz__media">
                <video
                  src="/video/hero.mp4"
                  poster="/images/video-poster.jpg"
                  width={736}
                  height={400}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="Batatas caneladas caindo em uma caixa kraft."
                />
              </div>
              <figcaption className="raiz__caption">
                Amazú Friet, em movimento
              </figcaption>
            </figure>
          </div>
        </section>

        {/* -------------------------------------------------- DA TERRA À MESA */}
        <section className="section shell" id="terra">
          <span className="eyebrow">O processo</span>
          <h2 className="display display--tight" style={{ marginTop: 16 }}>
            Da terra à mesa
          </h2>
          <div className="steps">
            {steps.map((step) => (
              <div className="step" key={step.index} data-reveal>
                <span className="step__index">{step.index}</span>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__body">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* -------------------------------------------------- INGREDIENTES */}
        <section className="section shell" id="ingredientes">
          <span className="eyebrow">Ingredientes da Floresta</span>
          <h2 className="display display--tight" style={{ marginTop: 16 }}>
            O que vai dentro
          </h2>
          <div className="ingredients__grid">
            {ingredients.map((ingredient) => (
              <div className="ingredient" key={ingredient.name} data-reveal>
                <h3 className="ingredient__name">{ingredient.name}</h3>
                <p className="ingredient__body">{ingredient.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------------- ORDER */}
        <section className="section shell order" id="order">
          <span className="eyebrow eyebrow--gold">Pedido</span>
          <h2 className="display order__title">Leve para a mesa</h2>
          <p className="prose order__body">
            O cardápio muda com a estação. Peça a folha de hoje e a lista atual
            chega no WhatsApp, pronta para o pedido.
          </p>
          <div className="order__actions">
            <a className="btn" href={MENU_URL}>
              Ver o cardápio
            </a>
            <a className="btn btn--ghost" href={ORDER_URL}>
              Pedir no WhatsApp
            </a>
          </div>
          <p className="order__note">
            Os pedidos passam pela nossa mesa no WhatsApp e pelo iFood.
          </p>
        </section>
      </main>

      {/* ----------------------------------------------------------- FOOTER */}
      <footer className="footer">
        <div className="shell">
          <div className="footer__grid">
            <div>
              <img
                className="footer__lockup"
                src="/brand/friet-lockup.webp"
                alt="Amazú Friet, Premium Batata, Raízes da Floresta"
                width={1600}
                height={1600}
                loading="lazy"
              />
              <p className="footer__tag">Raízes da Floresta</p>
            </div>
            <div>
              <span className="footer__label">Cardápio</span>
              <ul className="footer__list">
                {products.map((product) => (
                  <li key={product.id}>
                    <a href="#cardapio">{product.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="footer__label">A casa</span>
              <ul className="footer__list">
                <li>
                  <a href="#raiz">A Raiz</a>
                </li>
                <li>
                  <a href="#terra">Da Terra à Mesa</a>
                </li>
                <li>
                  <a href="#ingredientes">Ingredientes</a>
                </li>
                <li>
                  <a href={ORDER_URL}>Pedir agora</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__base">
            <span>© 2026 Amazú Friet. Belém, Pará, Brasil.</span>
            <span>Premium Batata</span>
          </div>
        </div>
      </footer>
    </>
  );
}
