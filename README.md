# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# sorting-visualizer

<!-- docker build -t <image-name>:<image-version> . -->
#use cli to run

#build image
docker build -t sorting-app:1.0 .

#run image container
docker run -p 3000:3000 -p 5173:5173 -d sorting-app:1.0

#use docker-compose.xml to run
docker compose up -d
docker compose down
