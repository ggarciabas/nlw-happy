FROM node:14

COPY package.json package.json
RUN yarn install

# Add your source files
COPY . .
CMD ["yarn", "prod"]