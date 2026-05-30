<script setup>
import { reactive, ref } from "vue";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const values = reactive({ name: "", email: "", product: "", message: "" });
const errors = reactive({});
const touched = reactive({});
const submitted = ref(false);

function validate() {
  const e = {};
  if (!values.name.trim()) {
    e.name = "El nombre es obligatorio.";
  } else if (values.name.trim().length < 2) {
    e.name = "Ingresa al menos 2 caracteres.";
  }

  if (!values.email.trim()) {
    e.email = "El correo es obligatorio.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    e.email = "Ingresa un correo válido.";
  }

  if (!values.message.trim()) {
    e.message = "Cuéntanos algo en tu mensaje.";
  } else if (values.message.trim().length < 10) {
    e.message = "El mensaje debe tener al menos 10 caracteres.";
  }
  return e;
}

function applyErrors(e) {
  Object.keys(errors).forEach((k) => delete errors[k]);
  Object.assign(errors, e);
}

function handleInput(field) {
  if (touched[field]) applyErrors(validate());
}

function handleBlur(field) {
  touched[field] = true;
  applyErrors(validate());
}

function handleSubmit() {
  const found = validate();
  applyErrors(found);
  touched.name = true;
  touched.email = true;
  touched.message = true;
  if (Object.keys(found).length === 0) {
    submitted.value = true;
    values.name = "";
    values.email = "";
    values.product = "";
    values.message = "";
    Object.keys(touched).forEach((k) => delete touched[k]);
  }
}
</script>

<template>
  <section class="section section-alt" id="contact">
    <div class="container contact-inner">
      <div class="contact-aside">
        <span class="eyebrow">Contacto</span>
        <h2>Pre-ordena o escríbenos</h2>
        <p>
          ¿Listo para probar Aurora Café? Déjanos tus datos y un mensaje, y te
          responderemos en menos de 24 horas.
        </p>
        <ul class="contact-list">
          <li><span class="ic">📍</span> Quito, Ecuador</li>
          <li><span class="ic">✉️</span> hola@auroracafe.com</li>
          <li><span class="ic">📞</span> +593 99 123 4567</li>
          <li><span class="ic">🕒</span> Lun – Sáb, 8:00 – 18:00</li>
        </ul>
      </div>

      <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
        <div v-if="submitted" class="form-success" role="status">
          ¡Gracias! Hemos recibido tu mensaje correctamente. 🎉
        </div>

        <div class="form-group">
          <label class="form-label" for="name">Nombre completo</label>
          <input
            id="name"
            type="text"
            class="form-input"
            :class="{ invalid: errors.name }"
            placeholder="Tu nombre"
            v-model="values.name"
            @input="handleInput('name')"
            @blur="handleBlur('name')"
          />
          <div v-if="errors.name" class="form-error">{{ errors.name }}</div>
        </div>

        <div class="form-group">
          <label class="form-label" for="email">Correo electrónico</label>
          <input
            id="email"
            type="email"
            class="form-input"
            :class="{ invalid: errors.email }"
            placeholder="tucorreo@ejemplo.com"
            v-model="values.email"
            @input="handleInput('email')"
            @blur="handleBlur('email')"
          />
          <div v-if="errors.email" class="form-error">{{ errors.email }}</div>
        </div>

        <div class="form-group">
          <label class="form-label" for="product">Producto de interés (opcional)</label>
          <select id="product" class="form-input" v-model="values.product">
            <option value="">Selecciona una opción</option>
            <option value="clasico">Aurora Clásico</option>
            <option value="geisha">Geisha de Altura</option>
            <option value="oscuro">Tueste Oscuro</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label" for="message">Mensaje</label>
          <textarea
            id="message"
            class="form-textarea"
            :class="{ invalid: errors.message }"
            placeholder="Cuéntanos qué necesitas…"
            v-model="values.message"
            @input="handleInput('message')"
            @blur="handleBlur('message')"
          ></textarea>
          <div v-if="errors.message" class="form-error">{{ errors.message }}</div>
        </div>

        <button type="submit" class="btn btn-primary btn-block">
          Enviar mensaje
        </button>
      </form>
    </div>
  </section>
</template>
