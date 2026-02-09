# MyStore

# 🛒 Angular Mini Store

Aplicación desarrollada en **Angularversion 19.2.3.** que simula una tienda sencilla con:

✅ Búsqueda reactiva en tiempo real usando **RxJS**  
✅ Listado de productos  
✅ Carrito de compras con **Angular Signals**    

El objetivo fue implementar una solución escalable, aplicando principios modernos de Angular como programación reactiva, manejo de estado y optimización de renderizado.

---

# 🚀 Funcionalidades

## 🔍 Customer Search (RxJS)

Componente standalone que realiza búsquedas de productos mientras el usuario escribe, consumiendo una API simulada (`MockService`).

### Reglas implementadas

- `debounceTime()` 
- `distinctUntilChanged()`
- `switchMap()`

### Beneficios

- Mejor UX
- Menor consumo de red
- Flujo 100% reactivo

---

## 🛍️ Listado de productos

- Renderizado mediante cards reutilizables
- Tipado fuerte con interfaces TypeScript

Cada producto se lista en cards y puede agregarse al carrito.

---

## 🛒 Carrito de compras 

Estado global implementado con **Signals (Angular 17+)**, evitando librerías externas como NgRx.

### Implementación

- `signal()` → lista reactiva de items
- `computed()` → `totalPrice` y `totalCount`
- `effect()` → log automático al cambiar el carrito
- `addItem(product)` → actualiza estado automáticamente

### Beneficios

- Estado simple y predecible
- Reactividad automática
- Fácil mantenimiento

---

# 🧠 Decisiones técnicas

## Arquitectura
- Standalone components
- Separación por features
- Servicios para lógica de negocio

## Escalabilidad
- Componentes reutilizables
- Bajo acoplamiento
- Fácil extensión de nuevas features

---

# 🧩 Tecnologías usadas

- Angular 17+
- TypeScript
- RxJS
- Angular Signals
- TailwindCSS / CSS

