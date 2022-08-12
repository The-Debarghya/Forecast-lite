FROM node:16.13-slim
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm ci --only=production && npm cache clean --force
COPY . /app
RUN npm link
ENTRYPOINT ["outside"]
