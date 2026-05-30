<script setup>
import Icon from "./Icon.vue";

const emit = defineEmits(["navigate"]);

const reds = [
  { token: "--red-900", hex: "#38090C", name: "Rojo 900" },
  { token: "--red-600", hex: "#A4161A", name: "Rojo 600" },
  { token: "--red-400", hex: "#D24B46", name: "Rojo 400" },
  { token: "--red-100", hex: "#F7E4E2", name: "Rojo 100" },
];

const neutrals = [
  { token: "--ink", hex: "#211A18", name: "Ink" },
  { token: "--muted", hex: "#7C6F69", name: "Muted" },
  { token: "--line", hex: "#ECE4DC", name: "Line" },
  { token: "--surface", hex: "#FAF6F1", name: "Surface" },
];

const states = [
  { token: "--success", hex: "#2F7D4F", name: "Success" },
  { token: "--danger", hex: "#C62828", name: "Danger" },
];

const radii = [
  { token: "--radius-sm", value: "6px" },
  { token: "--radius-md", value: "12px" },
  { token: "--radius-lg", value: "18px" },
  { token: "--radius-pill", value: "999px" },
];

const spacing = [
  { token: "--space-2", value: "8px" },
  { token: "--space-4", value: "16px" },
  { token: "--space-5", value: "24px" },
  { token: "--space-7", value: "48px" },
];
</script>

<template>
  <main class="container ds">
    <div class="ds-head">
      <button class="btn btn-ghost btn-sm" @click="emit('navigate', 'landing')">
        <Icon name="arrow" :size="16" /> Volver al landing
      </button>
      <h1>Design System de Cure</h1>
      <p>
        Documentación viva de los tokens y componentes de la interfaz. La identidad
        se construye con cuatro tonos de rojo, neutros cálidos y una tipografía serif
        para títulos junto a una sans limpia para el cuerpo.
      </p>
    </div>

    <section class="ds-block">
      <h2>Color</h2>
      <p>Cuatro tonos de rojo como base de marca, sin degradados. Los neutros cálidos sostienen la lectura y los colores de estado comunican la validación del formulario.</p>

      <h3 style="margin: 0 0 16px">Rojos de marca</h3>
      <div class="swatch-grid">
        <div class="swatch" v-for="c in reds" :key="c.token">
          <div class="swatch-color" :style="{ background: c.hex }"></div>
          <div class="swatch-meta">
            <strong>{{ c.name }}</strong>
            <code>{{ c.hex }}</code>
            <code style="display: block; color: var(--red-600)">{{ c.token }}</code>
          </div>
        </div>
      </div>

      <h3 style="margin: 32px 0 16px">Neutros cálidos</h3>
      <div class="swatch-grid">
        <div class="swatch" v-for="c in neutrals" :key="c.token">
          <div class="swatch-color" :style="{ background: c.hex }"></div>
          <div class="swatch-meta">
            <strong>{{ c.name }}</strong>
            <code>{{ c.hex }}</code>
            <code style="display: block; color: var(--red-600)">{{ c.token }}</code>
          </div>
        </div>
      </div>

      <h3 style="margin: 32px 0 16px">Estados</h3>
      <div class="swatch-grid">
        <div class="swatch" v-for="c in states" :key="c.token">
          <div class="swatch-color" :style="{ background: c.hex }"></div>
          <div class="swatch-meta">
            <strong>{{ c.name }}</strong>
            <code>{{ c.hex }}</code>
            <code style="display: block; color: var(--red-600)">{{ c.token }}</code>
          </div>
        </div>
      </div>
    </section>

    <section class="ds-block">
      <h2>Tipografía</h2>
      <p>Cormorant Garamond aporta el carácter de restaurante en los títulos; Inter mantiene el cuerpo claro y minimalista.</p>
      <div>
        <div class="type-row"><span class="label">--fs-h1 · serif</span><span style="font-size: var(--fs-h1); font-family: var(--font-serif)">Título principal</span></div>
        <div class="type-row"><span class="label">--fs-h2 · serif</span><span style="font-size: var(--fs-h2); font-family: var(--font-serif)">Título de sección</span></div>
        <div class="type-row"><span class="label">--fs-h3 · serif</span><span style="font-size: var(--fs-h3); font-family: var(--font-serif)">Subtítulo</span></div>
        <div class="type-row"><span class="label">--fs-lg · sans</span><span style="font-size: var(--fs-lg)">Texto destacado de párrafo</span></div>
        <div class="type-row"><span class="label">--fs-body · sans</span><span style="font-size: var(--fs-body)">Texto de cuerpo estándar</span></div>
        <div class="type-row"><span class="label">--fs-small · sans</span><span style="font-size: var(--fs-small)">Texto pequeño y notas</span></div>
        <div class="type-row"><span class="label">eyebrow</span><span class="eyebrow">Etiqueta superior</span></div>
      </div>
    </section>

    <section class="ds-block">
      <h2>Botones</h2>
      <p>Tres variantes y un estado deshabilitado, con esquinas sutiles para un acabado limpio.</p>
      <div class="ds-row">
        <button class="btn btn-primary">Primario</button>
        <button class="btn btn-secondary">Secundario</button>
        <button class="btn btn-ghost">Contorno</button>
        <button class="btn btn-primary btn-sm">Pequeño</button>
        <button class="btn btn-primary" disabled>Deshabilitado</button>
      </div>
    </section>

    <section class="ds-block">
      <h2>Etiquetas</h2>
      <p>Badges para clasificar los platos del menú y estados de la reserva.</p>
      <div class="ds-row">
        <span class="badge">Entrada</span>
        <span class="badge">Postre</span>
        <span class="badge badge-solid">Confirmada</span>
      </div>
    </section>

    <section class="ds-block">
      <h2>Campos de formulario</h2>
      <p>Estados por defecto, foco, error y selección. Mismos controles usados en la reserva.</p>
      <div class="ds-panel" style="max-width: 560px">
        <div class="form-group">
          <label class="form-label">Campo de texto</label>
          <input class="form-control" placeholder="Escribe aquí" value="Ana Pérez" />
        </div>
        <div class="form-group">
          <label class="form-label">Campo con error</label>
          <input class="form-control invalid" value="correo-invalido" />
          <span class="form-error">El correo no tiene un formato válido.</span>
        </div>
        <div class="form-group">
          <label class="form-label">Selector</label>
          <select class="form-control">
            <option value="">Selecciona una opción</option>
            <option>2 personas</option>
            <option>4 personas</option>
          </select>
        </div>
        <label class="form-check">
          <input type="checkbox" checked />
          <span>Casilla de confirmación de datos</span>
        </label>
      </div>
    </section>

    <section class="ds-block">
      <h2>Componentes de contenido</h2>
      <p>Tarjeta de experiencia e ítem de menú, reutilizados en el landing.</p>
      <div class="grid-3">
        <article class="exp-card">
          <span class="exp-icon"><Icon name="wine" :size="28" /></span>
          <h3>Tarjeta de experiencia</h3>
          <p>Icono, título serif y descripción breve, centrados.</p>
        </article>
      </div>
      <div class="menu-list" style="margin-top: 32px">
        <article class="menu-item">
          <div class="menu-top">
            <span class="menu-name">Ítem de menú</span>
            <span class="menu-dots"></span>
            <span class="menu-price">$18</span>
          </div>
          <p class="menu-desc">Nombre del plato, línea de puntos, precio y descripción debajo.</p>
          <span class="badge">Principal</span>
        </article>
      </div>
    </section>

    <section class="ds-block">
      <h2>Tokens de forma y espacio</h2>
      <p>Radios y espaciados reutilizados en todos los componentes.</p>
      <div class="ds-tokens">
        <div class="ds-token" v-for="t in radii" :key="t.token"><code>{{ t.token }}</code><span>{{ t.value }}</span></div>
        <div class="ds-token" v-for="t in spacing" :key="t.token"><code>{{ t.token }}</code><span>{{ t.value }}</span></div>
      </div>
    </section>
  </main>
</template>
