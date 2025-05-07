# Dockerfile

FROM node:18

WORKDIR /app

COPY backend/ .

RUN npm install

EXPOSE 5001

CMD ["node", "server.js"]
