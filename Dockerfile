FROM mhart/alpine-node

WORKDIR /src
ADD . .

RUN npm install -g bower gulp

EXPOSE 3000
CMD ["gulp", "serve"]
