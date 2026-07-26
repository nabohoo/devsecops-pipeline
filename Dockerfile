FROM node:16-slim

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .

USER node

EXPOSE 3000
CMD ["node", "app.js"]