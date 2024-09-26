
# HOMALARM

### Estructura
- Web - Maquetación Web
- Mobile - Maquetación Mobile para OS Android
- README.md

### Despliegue

#### Maquetación mobile.
1. El desarrollo de la maquetación mobile se encuentra en la rama: **feature/maquetado-mobile**
2. El APK de la aplicación mobile se encuentra en la rama anteriormente nombrada, en el directorio **https://github.com/jcdejesus/2024-14-UX-homalarm/tree/feature/maquetado-mobile/mobile/dist**

#### Maquetación web.
1. El desarrollo de la maquetación web se encuentra en la rama: **feature/maquetado-web**
2. Para correr la aplicación web, debe dirigirse a la rama mencionada, ir a la carpeta web y correr los siguientes comandos:
* Instalar las dependencias: yarn install / npm run install
* Ejecutar el servicio webpack: yarn build:dev
* Si usted posee un entorno Docker, podrá usar el comando: **docker build -t homalarm:1.0 . && docker run -d -p 3000:3000 homalarm:1.0**



### Autores:
- Cristian Camilo Pinzon hernandez – [cc.pinzonh1@uniandes.edu.co](mailto:cc.pinzonh1@uniandes.edu.co)
- Juan Carlos De Jesus Mirelles – [j.dejesus@uniandes.edu.co](mailto:j.dejesus@uniandes.edu.co)
