FROM node:14-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3001
CMD [ "node", "index.js" ]

# RUN npm run build