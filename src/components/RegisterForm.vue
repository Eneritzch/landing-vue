<script setup>
import { reactive, ref } from "vue";
import { registerPerks, cities } from "../data";
import Icon from "./Icon.vue";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_RE = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

const values = reactive({ name: "", email: "", city: "", password: "", confirm: "", terms: false });
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

  if (!values.city) {
    e.city = "Selecciona tu ciudad.";
  }

  if (!values.password) {
    e.password = "Crea una contraseña.";
  } else if (!PASSWORD_RE.test(values.password)) {
    e.password = "Mínimo 8 caracteres, con letras y números.";
  }

  if (!values.confirm) {
    e.confirm = "Repite tu contraseña.";
  } else if (values.confirm !== values.password) {
    e.confirm = "Las contraseñas no coinciden.";
  }

  if (!values.terms) {
    e.terms = "Debes aceptar los términos para continuar.";
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
  ["name", "email", "city", "password", "confirm", "terms"].forEach((k) => {
    touched[k] = true;
  });
  if (Object.keys(found).length === 0) {
    done.value = true;
    values.name = "";
    values.email = "";
    values.city = "";
    values.password = "";
    values.confirm = "";
    values.terms = false;
    Object.keys(touched).forEach((k) => delete touched[k]);
  }
}
</script>

<template>
  <section class="section section-dark" id="registro">
    <div class="container register-inner">
      <div class="register-aside">
        <span class="eyebrow" style="color: var(--blue-100)">Crear cuenta</span>
        <h2>Regístrate y empieza a comprar entradas</h2>
        <p>Toma menos de un minuto. Tu cuenta queda lista para reservar en la preventa.</p>
        <ul class="register-list">
          <li v-for="p in registerPerks" :key="p">
            <span class="ic"><Icon name="check" :size="16" /></span> {{ p }}
          </li>
        </ul>
      </div>

      <form class="form-card" @submit.prevent="handleSubmit" novalidate>
        <h3>Tus datos</h3>

        <div v-if="done" class="form-alert success" role="status">
          <Icon name="check" :size="20" /> Cuenta creada. Revisa tu correo para confirmar el registro.
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
            <label class="form-label" for="city">Ciudad</label>
            <select id="city" class="form-control" :class="{ invalid: errors.city }"
              v-model="values.city" @change="handleInput('city')" @blur="handleBlur('city')">
              <option value="">Selecciona tu ciudad</option>
              <option v-for="c in cities" :key="c" :value="c">{{ c }}</option>
            </select>
            <span v-if="errors.city" class="form-error">{{ errors.city }}</span>
          </div>

          <div class="form-group">
            <label class="form-label" for="password">Contraseña</label>
            <input id="password" type="password" class="form-control" :class="{ invalid: errors.password }"
              placeholder="Mínimo 8 caracteres" v-model="values.password"
              @input="handleInput('password')" @blur="handleBlur('password')" />
            <span v-if="errors.password" class="form-error">{{ errors.password }}</span>
          </div>

          <div class="form-group">
            <label class="form-label" for="confirm">Repetir contraseña</label>
            <input id="confirm" type="password" class="form-control" :class="{ invalid: errors.confirm }"
              placeholder="Repite la contraseña" v-model="values.confirm"
              @input="handleInput('confirm')" @blur="handleBlur('confirm')" />
            <span v-if="errors.confirm" class="form-error">{{ errors.confirm }}</span>
          </div>
        </div>

        <div class="form-group full">
          <label class="form-check">
            <input type="checkbox" v-model="values.terms"
              @change="handleInput('terms')" @blur="handleBlur('terms')" />
            <span>Acepto los <a href="#registro">términos de servicio</a> y la política de privacidad de Aforo.</span>
          </label>
          <span v-if="errors.terms" class="form-error">{{ errors.terms }}</span>
        </div>

        <button type="submit" class="btn btn-primary btn-block">Crear mi cuenta</button>
      </form>
    </div>
  </section>
</template>
