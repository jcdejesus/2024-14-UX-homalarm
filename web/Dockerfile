FROM node:18-alpine
WORKDIR ./homalarm
COPY . .
RUN npm install
ENTRYPOINT ["yarn", "build:dev"]
EXPOSE 3000