<script setup>
import Icon from "./Icon.vue";

const emit = defineEmits(["navigate"]);

const blues = [
  { token: "--blue-900", hex: "#08193A", name: "Azul 900" },
  { token: "--blue-600", hex: "#1B4DD1", name: "Azul 600" },
  { token: "--blue-400", hex: "#4F86F7", name: "Azul 400" },
  { token: "--blue-100", hex: "#DCE8FB", name: "Azul 100" },
];

const neutrals = [
  { token: "--ink", hex: "#121620", name: "Ink" },
  { token: "--muted", hex: "#5B6478", name: "Muted" },
  { token: "--line", hex: "#E4E8F0", name: "Line" },
  { token: "--surface", hex: "#F6F8FC", name: "Surface" },
];

const states = [
  { token: "--success", hex: "#1F8A54", name: "Success" },
  { token: "--danger", hex: "#D12F3F", name: "Danger" },
];

const radii = [
  { token: "--radius-sm", value: "8px" },
  { token: "--radius-md", value: "14px" },
  { token: "--radius-lg", value: "22px" },
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
      <h1>Design System de Aforo</h1>
      <p>
        Documentación viva de los tokens y componentes que construyen la interfaz.
        Toda la paleta se basa en cuatro tonos de azul, más neutros y colores de estado.
      </p>
    </div>

    <section class="ds-block">
      <h2>Color</h2>
      <p>Cuatro tonos de azul como base de marca, sin degradados. Los neutros aportan jerarquía y los colores de estado comunican retroalimentación del formulario.</p>

      <h3 style="margin: 0 0 16px">Azules de marca</h3>
      <div class="swatch-grid">
        <div class="swatch" v-for="c in blues" :key="c.token">
          <div class="swatch-color" :style="{ background: c.hex }"></div>
          <div class="swatch-meta">
            <strong>{{ c.name }}</strong>
            <code>{{ c.hex }}</code>
            <code style="display: block; color: var(--blue-600)">{{ c.token }}</code>
          </div>
        </div>
      </div>

      <h3 style="margin: 32px 0 16px">Neutros</h3>
      <div class="swatch-grid">
        <div class="swatch" v-for="c in neutrals" :key="c.token">
          <div class="swatch-color" :style="{ background: c.hex }"></div>
          <div class="swatch-meta">
            <strong>{{ c.name }}</strong>
            <code>{{ c.hex }}</code>
            <code style="display: block; color: var(--blue-600)">{{ c.token }}</code>
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
            <code style="display: block; color: var(--blue-600)">{{ c.token }}</code>
          </div>
        </div>
      </div>
    </section>

    <section class="ds-block">
      <h2>Tipografía</h2>
      <p>Escala basada en la fuente del sistema. Cada nivel usa un token de tamaño definido en el root.</p>
      <div>
        <div class="type-row"><span class="label">--fs-h1</span><span style="font-size: var(--fs-h1); font-weight: 800">Título principal</span></div>
        <div class="type-row"><span class="label">--fs-h2</span><span style="font-size: var(--fs-h2); font-weight: 700">Título de sección</span></div>
        <div class="type-row"><span class="label">--fs-h3</span><span style="font-size: var(--fs-h3); font-weight: 700">Subtítulo</span></div>
        <div class="type-row"><span class="label">--fs-lg</span><span style="font-size: var(--fs-lg)">Texto destacado de párrafo</span></div>
        <div class="type-row"><span class="label">--fs-body</span><span style="font-size: var(--fs-body)">Texto de cuerpo estándar</span></div>
        <div class="type-row"><span class="label">--fs-small</span><span style="font-size: var(--fs-small)">Texto pequeño y notas</span></div>
        <div class="type-row"><span class="label">eyebrow</span><span class="eyebrow">Etiqueta superior</span></div>
      </div>
    </section>

    <section class="ds-block">
      <h2>Botones</h2>
      <p>Tres variantes y un estado deshabilitado, todas con esquinas tipo pill.</p>
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
      <p>Badges para destacar estados de eventos.</p>
      <div class="ds-row">
        <span class="badge">Preventa</span>
        <span class="badge">Últimas</span>
        <span class="badge badge-solid">Nuevo</span>
      </div>
    </section>

    <section class="ds-block">
      <h2>Campos de formulario</h2>
      <p>Estados por defecto, foco, error y selección. Mismos controles usados en el registro.</p>
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
            <option>Quito</option>
            <option>Guayaquil</option>
          </select>
        </div>
        <label class="form-check">
          <input type="checkbox" checked />
          <span>Casilla de aceptación de términos</span>
        </label>
      </div>
    </section>

    <section class="ds-block">
      <h2>Tarjetas</h2>
      <p>Componentes de contenido usados en beneficios y eventos.</p>
      <div class="grid-3">
        <article class="card benefit-card">
          <span class="benefit-icon"><Icon name="shield" /></span>
          <h3>Tarjeta de beneficio</h3>
          <p>Icono, título y descripción breve sobre fondo blanco.</p>
        </article>
        <article class="event-card">
          <div class="event-date">
            <span class="day">12</span>
            <span class="mon">Jul</span>
          </div>
          <div class="event-body">
            <span class="badge">Preventa</span>
            <h3>Tarjeta de evento</h3>
            <ul class="event-meta">
              <li><Icon name="pin" :size="16" /> Estadio Olímpico</li>
              <li><Icon name="clock" :size="16" /> 19:00</li>
            </ul>
            <div class="event-foot">
              <span class="event-price">$45 <span>/ entrada</span></span>
              <button class="btn btn-primary btn-sm">Comprar</button>
            </div>
          </div>
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
