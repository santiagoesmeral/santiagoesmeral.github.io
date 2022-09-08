FROM node:latest

WORKDIR /portfolio

#apparently, it's package*.json and not package.json ?????? idk. 
#todo: doublecheck that this works, i havent used it in a while. I dont see why it wouldnt work to be honest.
COPY package*.json ./


RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]