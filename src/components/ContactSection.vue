<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useGsap } from '../composables/useGsap.js'
import { profile, socials } from '../data/portfolio.js'
import Icon from './Icon.vue'

const { t } = useI18n()

const root = ref(null)
useGsap(root)

const form = reactive({ name: '', email: '', message: '' })
const status = ref('') // '' | 'error' | 'ok'
const sending = ref(false)

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
              <Icon name="mail" :size="20" />
            </span>
            <span class="link-text">
              <small>{{ t('contact.email') }}</small>
              <strong>{{ profile.email }}</strong>
            </span>
            <span class="arrow" aria-hidden="true">
              <Icon name="arrow-up-right" :size="18" />
            </span>
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
              <Icon :name="s.icon" :size="20" />
            </span>
            <span class="link-text">
              <small>{{ s.label }}</small>
              <strong>{{ s.url.replace(/^https?:\/\//, '') }}</strong>
            </span>
            <span class="arrow" aria-hidden="true">
              <Icon name="arrow-up-right" :size="18" />
            </span>
          </a>

          <a
            :href="profile.cv"
            class="link-card card"
            download
            target="_blank"
            rel="noopener"
          >
            <span class="link-icon"><Icon name="file" :size="20" /></span>
            <span class="link-text">
              <small>{{ t('contact.cv') }}</small>
              <strong>PDF</strong>
            </span>
            <span class="arrow" aria-hidden="true">
              <Icon name="download" :size="18" />
            </span>
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
            <Icon name="send" :size="17" />
            {{ sending ? t('contact.form.sending') : t('contact.form.send') }}
          </button>

          <p v-if="status === 'error'" class="msg error">
            <Icon name="alert-circle" :size="16" />
            {{ t('contact.form.required') }}
          </p>
          <p v-if="status === 'ok'" class="msg ok">
            <Icon name="check-circle" :size="16" />
            {{ t('contact.form.success') }}
          </p>
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
  display: grid;
  place-items: center;
  color: var(--text-dim);
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
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  padding: 11px 14px;
  border-radius: var(--radius-sm);
  margin: 0;
  line-height: 1.5;
}
.msg .ic {
  margin-top: 2px;
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
