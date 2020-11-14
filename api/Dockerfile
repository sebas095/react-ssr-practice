FROM node
COPY . /opt/api
WORKDIR /opt/api
RUN npm install
EXPOSE 5000
ENTRYPOINT [ "npm", "start" ]