<script setup>
import { reactive, ref } from "vue";
import { reservePerks, guestOptions, timeSlots, occasions } from "../data";
import Icon from "./Icon.vue";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+\s-]{7,}$/;

function today() {
  const d = new Date();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
}

const values = reactive({ name: "", email: "", phone: "", date: "", time: "", guests: "", occasion: "", notes: "" });
const errors = reactive({});
const touched = reactive({});
const done = ref(false);

function validate() {
  const e = {};

  if (!values.name.trim()) {
    e.name = "Ingresa tu nombre completo.";
  } else if (values.name.trim().length < 3) {
    e.name = "El nombre debe tener al menos 3 caracteres.";
  }

  if (!values.email.trim()) {
    e.email = "Ingresa tu correo electrónico.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    e.email = "El correo no tiene un formato válido.";
  }

  if (!values.phone.trim()) {
    e.phone = "Ingresa un teléfono de contacto.";
  } else if (!PHONE_RE.test(values.phone.trim())) {
    e.phone = "Ingresa un teléfono válido (mínimo 7 dígitos).";
  }

  if (!values.date) {
    e.date = "Selecciona una fecha.";
  } else if (values.date < today()) {
    e.date = "La fecha no puede ser anterior a hoy.";
  }

  if (!values.time) {
    e.time = "Selecciona un horario.";
  }

  if (!values.guests) {
    e.guests = "Indica el número de personas.";
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
  ["name", "email", "phone", "date", "time", "guests"].forEach((k) => {
    touched[k] = true;
  });
  if (Object.keys(found).length === 0) {
    done.value = true;
    Object.assign(values, { name: "", email: "", phone: "", date: "", time: "", guests: "", occasion: "", notes: "" });
    Object.keys(touched).forEach((k) => delete touched[k]);
  }
}
</script>

<template>
  <section class="section section-dark" id="reservar">
    <div class="container reserve-inner">
      <div class="reserve-aside">
        <span class="eyebrow">Reserva tu mesa</span>
        <h2>Te esperamos en Rúbra</h2>
        <p>Completa el formulario y recibirás la confirmación de tu mesa al instante.</p>
        <ul class="reserve-list">
          <li v-for="p in reservePerks" :key="p">
            <span class="ic"><Icon name="check" :size="18" /></span> {{ p }}
          </li>
        </ul>
      </div>

      <form class="form-card" @submit.prevent="handleSubmit" novalidate>
        <h3>Datos de la reserva</h3>

        <div v-if="done" class="form-alert success" role="status">
          <Icon name="check" :size="20" /> Reserva confirmada. Te enviamos los detalles por correo.
        </div>

        <div class="form-group full">
          <label class="form-label" for="name">Nombre completo</label>
          <input id="name" type="text" class="form-control" :class="{ invalid: errors.name }"
            placeholder="Ej. Ana Pérez" v-model="values.name"
            @input="handleInput('name')" @blur="handleBlur('name')" />
          <span v-if="errors.name" class="form-error">{{ errors.name }}</span>
        </div>

        <div class="form-grid">
          <div class="form-group">
            <label class="form-label" for="email">Correo electrónico</label>
            <input id="email" type="email" class="form-control" :class="{ invalid: errors.email }"
              placeholder="tucorreo@ejemplo.com" v-model="values.email"
              @input="handleInput('email')" @blur="handleBlur('email')" />
            <span v-if="errors.email" class="form-error">{{ errors.email }}</span>
          </div>

          <div class="form-group">
            <label class="form-label" for="phone">Teléfono</label>
            <input id="phone" type="tel" class="form-control" :class="{ invalid: errors.phone }"
              placeholder="+593 99 123 4567" v-model="values.phone"
              @input="handleInput('phone')" @blur="handleBlur('phone')" />
            <span v-if="errors.phone" class="form-error">{{ errors.phone }}</span>
          </div>

          <div class="form-group">
            <label class="form-label" for="date">Fecha</label>
            <input id="date" type="date" :min="today()" class="form-control" :class="{ invalid: errors.date }"
              v-model="values.date" @change="handleInput('date')" @blur="handleBlur('date')" />
            <span v-if="errors.date" class="form-error">{{ errors.date }}</span>
          </div>

          <div class="form-group">
            <label class="form-label" for="time">Horario</label>
            <select id="time" class="form-control" :class="{ invalid: errors.time }"
              v-model="values.time" @change="handleInput('time')" @blur="handleBlur('time')">
              <option value="">Selecciona una hora</option>
              <option v-for="t in timeSlots" :key="t" :value="t">{{ t }}</option>
            </select>
            <span v-if="errors.time" class="form-error">{{ errors.time }}</span>
          </div>

          <div class="form-group">
            <label class="form-label" for="guests">Personas</label>
            <select id="guests" class="form-control" :class="{ invalid: errors.guests }"
              v-model="values.guests" @change="handleInput('guests')" @blur="handleBlur('guests')">
              <option value="">¿Cuántos asistirán?</option>
              <option v-for="g in guestOptions" :key="g" :value="g">{{ g }}</option>
            </select>
            <span v-if="errors.guests" class="form-error">{{ errors.guests }}</span>
          </div>

          <div class="form-group">
            <label class="form-label" for="occasion">Ocasión (opcional)</label>
            <select id="occasion" class="form-control" v-model="values.occasion">
              <option value="">Sin especificar</option>
              <option v-for="o in occasions" :key="o" :value="o">{{ o }}</option>
            </select>
          </div>
        </div>

        <div class="form-group full">
          <label class="form-label" for="notes">Notas para el restaurante (opcional)</label>
          <textarea id="notes" class="form-control"
            placeholder="Alergias, silla para bebé, mesa junto a la ventana..." v-model="values.notes"></textarea>
        </div>

        <button type="submit" class="btn btn-primary btn-block">Confirmar reserva</button>
      </form>
    </div>
  </section>
</template>
