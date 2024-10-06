FROM node:lts-iron AS packages
ENV NODE_ENV=development
EXPOSE 1234
WORKDIR /opt/server
COPY package.json package-lock.json ./
RUN npm install


FROM packages AS sandbox
WORKDIR /opt/server
ENTRYPOINT [ "npm", "run", "start" ]
