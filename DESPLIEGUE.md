# Desplegar el blog en GitHub Pages (5 minutos)

> El repo ya está inicializado y con un primer commit hecho. Solo falta subirlo a GitHub y activar Pages.
> Necesitas una cuenta de GitHub (gratis). El profesor pide **dos enlaces**: el del **repositorio** y el del **sitio desplegado**.

## 1. Crear el repositorio en GitHub
1. Entra en <https://github.com/new>.
2. **Repository name:** `the-penny-drops-lab` (o el que quieras).
3. Visibilidad: **Public** (el profesor tiene que poder verlo).
4. **No** marques "Add a README" (ya tenemos uno). Pulsa **Create repository**.

## 2. Subir el código
GitHub te mostrará la URL del repo. Copia tu usuario y pégalo en estos comandos, ejecutados **dentro de la carpeta `blog-penny-drops`**:

```bash
cd "blog-penny-drops"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/the-penny-drops-lab.git
git push -u origin main
```
(Si te pide credenciales, usa tu usuario y un *Personal Access Token* como contraseña: GitHub → Settings → Developer settings → Tokens.)

## 3. Activar GitHub Pages
1. En el repo → pestaña **Settings** → menú lateral **Pages**.
2. En **Source**, elige **Deploy from a branch**.
3. **Branch:** `main` · carpeta **/ (root)** → **Save**.
4. Espera ~1 minuto. Arriba aparecerá: *"Your site is live at …"*.

## 4. Tus dos enlaces (para la memoria)
- **Sitio:** `https://TU_USUARIO.github.io/the-penny-drops-lab/`
- **Repositorio:** `https://github.com/TU_USUARIO/the-penny-drops-lab`

Pega esos dos enlaces en:
- `README.md` (sección 🔗 Enlaces)
- `MEMORIA.html` (los dos huecos marcados) → luego expórtala a PDF.

---

### Alternativa aún más rápida: Vercel (sin comandos)
1. Entra en <https://vercel.com> con tu GitHub.
2. **Add New → Project → Import** el repo.
3. Framework preset: **Other**. Pulsa **Deploy**. Te da una URL `https://....vercel.app` en segundos.

El profesor acepta GitHub Pages, Vercel o render indistintamente.
