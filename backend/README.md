# Backend Django - ChipiPark

Backend construido con **Django** y **Django REST Framework** para el proyecto ChipiPark.

---

## 📋 Requisitos

- Python 3.10 o superior
- pip (gestor de paquetes de Python)

---

## 🚀 Configuración Inicial

### 1. Navegar a la carpeta backend

```bash
cd backend
```

### 2. Crear entorno virtual

#### Windows (PowerShell):
```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

#### Linux/Mac:
```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Instalar dependencias

Con el entorno virtual activado:

```bash
pip install -r requirements.txt
```

### 4. Configurar variables de entorno (opcional)

**El proyecto ya está configurado**, pero si quieres personalizar algo:

```bash
# Copia el archivo de ejemplo
cp .env.example .env

# Edita .env con tus valores (opcional)
```

**Por defecto funciona sin .env** (usa SQLite y valores seguros de desarrollo)

### 5. Aplicar migraciones

```bash
python manage.py migrate
```

### 6. Crear superusuario (opcional)

```bash
python manage.py createsuperuser
```

---

## ▶️ Ejecutar el servidor

```bash
python manage.py runserver
```

El servidor estará disponible en: **http://127.0.0.1:8000**