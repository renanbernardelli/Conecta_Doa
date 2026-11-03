import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <main class="page-shell">
    <section class="hero-card">
      <p class="eyebrow">PROJETO INTEGRADOR EXTENSIONISTA · ADS</p>
      <h1>Conecta<span>Doa</span></h1>
      <p class="lead">Tecnologia simples para conectar doadores, voluntários e quem mais precisa.</p>
      <div class="status-panel" aria-live="polite">
        <span class="status-dot" id="status-dot"></span>
        <div>
          <p class="status-label">Status da API</p>
          <p class="status-value" id="status-value">Verificando...</p>
          <p class="status-time" id="status-time"></p>
        </div>
      </div>
    </section>
  </main>
`

const statusValue = document.querySelector('#status-value')
const statusTime = document.querySelector('#status-time')
const statusDot = document.querySelector('#status-dot')

try {
  const response = await fetch('/api/health')
  if (!response.ok) throw new Error('API indisponível')

  const data = await response.json()
  statusValue.textContent = `Status da API: ${data.status}`
  statusTime.textContent = `Atualizado em ${new Date(data.timestamp).toLocaleString('pt-BR')}`
  statusDot.classList.add('online')
} catch {
  statusValue.textContent = 'Status da API: fora do ar'
  statusTime.textContent = 'Inicie a API com npm run api'
  statusDot.classList.add('offline')
}
