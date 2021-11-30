FROM node:latest

WORKDIR /portfolio

#apparently, it's package*.json and not package.json ?????? idk. 
COPY package*.json ./


RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]