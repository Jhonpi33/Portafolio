<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useGsap } from '../composables/useGsap.js'
import { profile, socials } from '../data/portfolio.js'

const { t } = useI18n()

const root = ref(null)
useGsap(root)

const form = reactive({ name: '', email: '', message: '' })
const status = ref('') // '' | 'error' | 'ok'
const sending = ref(false)

const icons = {
  github:
    'M12 .5C5.73.5.9 5.34.9 11.6c0 4.9 3.17 9.05 7.57 10.52.55.1.76-.24.76-.53l-.02-1.86c-3.08.67-3.73-1.49-3.73-1.49-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.11.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.46-.28-5.05-1.23-5.05-5.49 0-1.21.43-2.2 1.15-2.98-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.07 1.14a10.6 10.6 0 0 1 5.6 0c2.12-1.44 3.06-1.14 3.06-1.14.61 1.53.23 2.66.11 2.94.72.78 1.15 1.77 1.15 2.98 0 4.27-2.6 5.2-5.07 5.48.4.34.75 1.02.75 2.06l-.01 3.05c0 .3.2.64.77.53A11.12 11.12 0 0 0 23 11.6C23 5.34 18.27.5 12 .5Z',
  linkedin:
    'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.07 1.4-2.07 2.86V21h-4V9Z',
  mail: 'M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.4.5 7.6 5.4L19.6 6H4.4ZM20 7.8l-7.4 5.3a1 1 0 0 1-1.2 0L4 7.8V18.5c0 .28.22.5.5.5h15c.28 0 .5-.22.5-.5V7.8Z',
}

function submit() {
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
  if (!form.name.trim() || !emailOk || !form.message.trim()) {
    status.value = 'error'
    return
  }
  status.value = ''
  sending.value = true

  const subject = encodeURIComponent(`Portafolio — Mensaje de ${form.name}`)
  const body = encodeURIComponent(
    `${form.message}\n\n— ${form.name}\n${form.email}\n\nEnviado desde tu portafolio.`,
  )

  setTimeout(() => {
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    sending.value = false
    status.value = 'ok'
    form.name = ''
    form.email = ''
    form.message = ''
  }, 600)
}
</script>

<template>
  <section id="contacto" ref="root" class="section">
    <div class="container">
      <header class="section-head center" data-reveal="up">
        <span class="eyebrow">{{ t('contact.eyebrow') }}</span>
        <h2>{{ t('contact.title') }}</h2>
        <p>{{ t('contact.subtitle') }}</p>
      </header>

      <div class="contact-grid">
        <!-- Tarjetas de enlaces -->
        <div class="links" data-reveal="stagger">
          <a :href="`mailto:${profile.email}`" class="link-card card">
            <span class="link-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path :d="icons.mail" />
              </svg>
            </span>
            <span class="link-text">
              <small>{{ t('contact.email') }}</small>
              <strong>{{ profile.email }}</strong>
            </span>
            <span class="arrow" aria-hidden="true">↗</span>
          </a>

          <a
            v-for="s in socials.filter((x) => x.icon !== 'mail')"
            :key="s.id"
            :href="s.url"
            class="link-card card"
            target="_blank"
            rel="noopener"
          >
            <span class="link-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path :d="icons[s.icon]" />
              </svg>
            </span>
            <span class="link-text">
              <small>{{ s.label }}</small>
              <strong>{{ s.url.replace(/^https?:\/\//, '') }}</strong>
            </span>
            <span class="arrow" aria-hidden="true">↗</span>
          </a>

          <a
            :href="profile.cv"
            class="link-card card"
            download
            target="_blank"
            rel="noopener"
          >
            <span class="link-icon">📄</span>
            <span class="link-text">
              <small>{{ t('contact.cv') }}</small>
              <strong>PDF</strong>
            </span>
            <span class="arrow" aria-hidden="true">↓</span>
          </a>
        </div>

        <!-- Formulario -->
        <form class="form card" data-reveal="up" @submit.prevent="submit" novalidate>
          <div class="field">
            <label for="c-name">{{ t('contact.form.name') }}</label>
            <input
              id="c-name"
              v-model="form.name"
              type="text"
              :placeholder="t('contact.form.namePh')"
              autocomplete="name"
            />
          </div>

          <div class="field">
            <label for="c-email">{{ t('contact.form.email') }}</label>
            <input
              id="c-email"
              v-model="form.email"
              type="email"
              :placeholder="t('contact.form.emailPh')"
              autocomplete="email"
            />
          </div>

          <div class="field">
            <label for="c-msg">{{ t('contact.form.message') }}</label>
            <textarea
              id="c-msg"
              v-model="form.message"
              rows="5"
              :placeholder="t('contact.form.messagePh')"
            ></textarea>
          </div>

          <button class="btn btn-primary submit" type="submit" :disabled="sending">
            {{ sending ? t('contact.form.sending') : '🚀 ' + t('contact.form.send') }}
          </button>

          <p v-if="status === 'error'" class="msg error">⚠️ {{ t('contact.form.required') }}</p>
          <p v-if="status === 'ok'" class="msg ok">✅ {{ t('contact.form.success') }}</p>
          <p class="hint">{{ t('contact.note') }}</p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.center {
  margin-inline: auto;
  text-align: center;
}
.center .eyebrow::before {
  display: none;
}

.contact-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 28px;
  align-items: start;
}

.links {
  display: grid;
  gap: 14px;
}
.link-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 20px;
}
.link-icon {
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: var(--accent-soft);
  border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
  color: var(--accent-text);
  font-size: 19px;
}
.link-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.link-text small {
  font-size: 12.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-dim);
}
.link-text strong {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-strong);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.arrow {
  margin-left: auto;
  color: var(--text-dim);
  font-size: 17px;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), color 0.3s ease;
}
.link-card:hover .arrow {
  transform: translate(4px, -4px);
  color: var(--accent-text);
}

/* formulario */
.form {
  padding: 28px;
  display: grid;
  gap: 18px;
}
.field {
  display: grid;
  gap: 7px;
}
.field label {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--text-dim);
}
.field input,
.field textarea {
  width: 100%;
  padding: 13px 16px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  background: var(--bg-2);
  color: var(--text-strong);
  font-size: 15px;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
  resize: vertical;
}
.field input::placeholder,
.field textarea::placeholder {
  color: var(--text-dim);
}
.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 4px var(--accent-soft);
}
.submit {
  width: 100%;
}
.submit:disabled {
  opacity: 0.7;
  cursor: wait;
}
.msg {
  font-size: 14px;
  padding: 11px 14px;
  border-radius: var(--radius-sm);
  margin: 0;
}
.msg.error {
  background: color-mix(in srgb, var(--danger) 14%, transparent);
  border: 1px solid color-mix(in srgb, var(--danger) 40%, transparent);
  color: var(--danger);
}
.msg.ok {
  background: var(--accent-soft);
  border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
  color: var(--accent-text);
}
.hint {
  font-size: 12.5px;
  color: var(--text-dim);
  text-align: center;
  margin: 0;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
