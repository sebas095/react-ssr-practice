FROM node
COPY . /opt/client
WORKDIR /opt/client
RUN npm install
EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]