<script setup>
import { reactive, ref } from "vue";
import { reservePerks, guestOptions, timeSlots, occasions } from "../../data";
import Icon from "../Icon.vue";
import TextField from "../ui/TextField.vue";
import SelectField from "../ui/SelectField.vue";
import Button from "../ui/Button.vue";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\d{10}$/;

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
  } else if (!PHONE_RE.test(values.phone.replace(/\D/g, ""))) {
    e.phone = "Ingresa un teléfono válido de Ecuador (10 dígitos).";
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

function visible(allErrors) {
  return Object.fromEntries(
    Object.entries(allErrors).filter(([field]) => touched[field])
  );
}

function handleInput(field) {
  if (touched[field]) applyErrors(visible(validate()));
}

function handleBlur(field) {
  touched[field] = true;
  applyErrors(visible(validate()));
}

function handleSubmit() {
  ["name", "email", "phone", "date", "time", "guests"].forEach((k) => {
    touched[k] = true;
  });
  const found = validate();
  applyErrors(visible(found));
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
        <h2>Te esperamos en Cure</h2>
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

        <TextField
          id="name"
          label="Nombre completo"
          placeholder="Ej. Ana Pérez"
          v-model="values.name"
          :error="errors.name"
          @input="handleInput('name')"
          @blur="handleBlur('name')"
          class="full"
        />

        <div class="form-grid">
          <TextField
            id="email"
            type="email"
            label="Correo electrónico"
            placeholder="tucorreo@ejemplo.com"
            v-model="values.email"
            :error="errors.email"
            @input="handleInput('email')"
            @blur="handleBlur('email')"
          />

          <TextField
            id="phone"
            type="tel"
            label="Teléfono"
            placeholder="0991234567"
            v-model="values.phone"
            :error="errors.phone"
            @input="handleInput('phone')"
            @blur="handleBlur('phone')"
          />

          <TextField
            id="date"
            type="date"
            label="Fecha"
            :min="today()"
            v-model="values.date"
            :error="errors.date"
            @change="handleInput('date')"
            @blur="handleBlur('date')"
          />

          <SelectField
            id="time"
            label="Horario"
            placeholder="Selecciona una hora"
            :options="timeSlots"
            v-model="values.time"
            :error="errors.time"
            @change="handleInput('time')"
            @blur="handleBlur('time')"
          />

          <SelectField
            id="guests"
            label="Personas"
            placeholder="¿Cuántos asistirán?"
            :options="guestOptions"
            v-model="values.guests"
            :error="errors.guests"
            @change="handleInput('guests')"
            @blur="handleBlur('guests')"
          />

          <SelectField
            id="occasion"
            label="Ocasión (opcional)"
            placeholder="Sin especificar"
            :options="occasions"
            v-model="values.occasion"
          />
        </div>

        <TextField
          id="notes"
          type="textarea"
          label="Notas para el restaurante (opcional)"
          placeholder="Alergias, silla para bebé, mesa junto a la ventana..."
          v-model="values.notes"
          class="full"
        />

        <Button type="submit" class="btn-block">Confirmar reserva</Button>
      </form>
    </div>
  </section>
</template>
