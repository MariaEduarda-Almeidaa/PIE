export default function PraiasES() {
  return (
    <div className="praias-root">

      <header className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="./MAR.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-glow" />
        <div className="hero-inner">
          <p className="kicker">Espírito Santo — dados públicos reunidos</p>
          <h1>A sua praia está própria para banho hoje?</h1>
          <p className="hero-desc">
            Reunimos balneabilidade, esgoto e resíduos sólidos das praias capixabas em uma
            linguagem simples, para você decidir antes de entrar na água.
          </p>
          <div className="stat-row">
            <div className="stat">
              <div className="num">6 <small>/ 12</small></div>
              <div className="label">Próprias</div>
            </div>
            <div className="stat">
              <div className="num">4 <small>/ 12</small></div>
              <div className="label">Em atenção</div>
            </div>
            <div className="stat">
              <div className="num">2 <small>/ 12</small></div>
              <div className="label">Impróprias</div>
            </div>
          </div>
        </div>
      </header>

      <div className="controls">
        <div className="search">
          <input type="text" placeholder="Buscar praia ou município" />
        </div>

        <div className="filter-group">
          <button className="chip">Todas</button>
          <button className="chip">Próprias</button>
          <button className="chip">Atenção</button>
          <button className="chip">Impróprias</button>
        </div>

        <div className="filter-group">
          <button className="chip">Todos os municípios</button>
          <button className="chip">Vitória</button>
          <button className="chip">Vila Velha</button>
          <button className="chip">Serra</button>
          <button className="chip">Guarapari</button>
          <button className="chip">Linhares</button>
          <button className="chip">Marataízes</button>
          <button className="chip">Conceição da Barra</button>
        </div>
      </div>

      <main>
        <p className="count">12 praias encontradas</p>

        <div className="beach-list">
          <article className="beach">
            <div className="beach-main">
              <h3>Praia de Camburi</h3>
              <p className="city">Vitória</p>
              <div className="metrics">
                <span className="nmp">780 NMP/100mL</span>
                <span>Ocorrência de esgoto</span>
                <span>Resíduos: médio</span>
              </div>
            </div>
            <div className="beach-side">
              <span className="status-badge">Atenção</span>
              <span className="collected">Coleta: 16/08/2026</span>
            </div>
          </article>

          <article className="beach">
            <div className="beach-main">
              <h3>Curva da Jurema</h3>
              <p className="city">Vitória</p>
              <div className="metrics">
                <span className="nmp">2100 NMP/100mL</span>
                <span>Esgoto crítico</span>
                <span>Resíduos: alto</span>
              </div>
            </div>
            <div className="beach-side">
              <span className="status-badge">Imprópria para banho</span>
              <span className="collected">Coleta: 16/08/2026</span>
            </div>
          </article>

          {/* ...demais praias seguem a mesma estrutura de <article className="beach"> */}
        </div>

        <p className="empty">Nenhuma praia encontrada com esses filtros.</p>
      </main>

      <section className="legend">
        <h2>Como entender os indicadores</h2>
        <p>
          A classificação segue a Resolução CONAMA 274/2000, que usa a concentração de
          coliformes termotolerantes na água como principal parâmetro de balneabilidade.
        </p>
        <div className="legend-cards">
          <div className="legend-card">
            <div className="name">Própria para banho</div>
            <p>Até 250 NMP/100mL em coletas consecutivas. Risco baixo de doenças de contato.</p>
          </div>
          <div className="legend-card">
            <div className="name">Atenção</div>
            <p>Resultados oscilando ou coleta antiga. Evite o banho após chuvas fortes.</p>
          </div>
          <div className="legend-card">
            <div className="name">Imprópria para banho</div>
            <p>Acima do limite legal. Contato com a água pode causar infecções gastrointestinais e de pele.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Dados de demonstração baseados no formato dos boletins públicos de balneabilidade do IEMA-ES e de órgãos municipais de meio ambiente.</p>
        <p>Última atualização da base: 16/08/2026.</p>
      </footer>

    </div>
  );
}