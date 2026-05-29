#Stage 1: Builder
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY src ./src

#Compile TypesScript to JavaScript

RUN npm run build

#Stage 2: Production

FROM node:20-alpine AS production

WORKDIR /app

# ARG= Only available at build time
ARG NODE_ENV=production

#ENV= Available at both runtime and build time\
ENV NODE_ENV=${NODE_ENV}

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
CMD wget -qO- http://localhost:3000/ || exit 1

CMD [ "node","dist/index.js" ]
