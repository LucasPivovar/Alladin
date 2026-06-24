<template>
  <header class="navbar animate-fade-in">
    <div class="navbar-container">
      <!-- Left Side: Brand Logo -->
      <a href="/" class="logo-section no-underline">
        <div class="logo-icon-wrapper">
          <img :src="magicLamp" alt="Aladdin Icon" class="logo-img" />
        </div>
        <div class="logo-text-wrapper">
          <span class="logo-title">ALADDIN</span>
          <span class="logo-subtitle">INTELIGÊNCIA DE MERCADO</span>
        </div>
      </a>

      <!-- Right Side: Navigation & CTA Actions -->
      <div class="nav-actions">
        <a href="/auth?mode=signin" class="nav-link text-link">ENTRAR</a>
        <a href="/auth?mode=signup" class="btn-cadastrar">CADASTRAR</a>
        
        <a href="https://t.me/IAaladdin?text=Preciso%20de%20suporte" target="_blank" rel="noopener noreferrer" class="nav-link text-link telegram-link">
          <span class="telegram-icon-wrapper">
            <svg class="telegram-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.24-5.54 3.65-.52.36-.97.53-1.34.52-.42-.01-1.21-.24-1.8-.44-.73-.24-1.32-.37-1.27-.79.03-.22.33-.44.9-.68 3.51-1.52 5.85-2.52 7.02-3 .12-.05.23-.09.34-.11.23-.05.51-.04.66.11.13.13.17.37.15.69z"/>
            </svg>
          </span>
          SUPORTE
        </a>

        <div class="lang-selector">
          <svg class="globe-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          <span class="lang-text">BR</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppNavbar',
  setup() {
    return { magicLamp: '/assets/magic-lamp.svg' }
  }
}
</script>

<style scoped>
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  background: linear-gradient(180deg, rgba(3, 7, 18, 0.6) 0%, rgba(3, 7, 18, 0) 100%);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.navbar::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 15%;
  right: 15%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3) 20%, rgba(59, 130, 246, 0.3) 80%, transparent);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 60px;
}

/* Brand Logo Section */
.logo-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon-wrapper {
  position: relative;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.25);
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.2);
}

.logo-img {
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
}

.logo-text-wrapper {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.logo-title {
  color: #ffffff;
  font-weight: 900;
  font-size: 1.15rem;
  letter-spacing: 0.15em;
  font-family: var(--font-sans);
}

.logo-subtitle {
  color: rgba(147, 197, 253, 0.6);
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.15em;
}

/* Nav Actions Section */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.text-link {
  color: rgba(243, 244, 246, 0.85);
}

.text-link:hover {
  color: #3b82f6;
  text-shadow: 0 0 8px rgba(59, 130, 246, 0.4);
}

/* Premium Cadastro Button */
.btn-cadastrar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.4rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-decoration: none;
  color: #ffffff;
  background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%);
  border-radius: 4px;
  border: 1px solid rgba(147, 197, 253, 0.2);
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.45);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-cadastrar:hover {
  transform: translateY(-1px) scale(1.02);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.65);
  background: linear-gradient(135deg, #2563eb 0%, #60a5fa 100%);
}

.btn-cadastrar:active {
  transform: translateY(0) scale(0.99);
}

/* Telegram Suporte link */
.telegram-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.telegram-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #38bdf8;
}

.telegram-icon {
  width: 1rem;
  height: 1rem;
}

/* Language Selector */
.lang-selector {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.6rem;
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 4px;
  background: rgba(3, 7, 18, 0.4);
  color: rgba(243, 244, 246, 0.7);
  cursor: pointer;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  transition: all 0.25s ease;
}

.lang-selector:hover {
  border-color: rgba(59, 130, 246, 0.5);
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.05);
}

.globe-icon {
  width: 0.85rem;
  height: 0.85rem;
}

/* Entrance Fade In Animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .navbar-container {
    padding: 1rem 40px;
  }
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 0.85rem 20px;
  }
  
  .logo-title {
    font-size: 1rem;
  }
  
  .logo-subtitle {
    font-size: 0.5rem;
  }
  
  .nav-actions {
    gap: 1rem;
  }
  
  .btn-cadastrar {
    padding: 0.5rem 1rem;
    font-size: 0.65rem;
  }
  
  .telegram-link span {
    font-size: 0; /* Hide text on mobile, keep icon */
  }
  
  .telegram-icon {
    width: 1.1rem;
    height: 1.1rem;
  }
}
</style>
