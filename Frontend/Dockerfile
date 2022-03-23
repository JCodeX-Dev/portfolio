FROM nginx:alpine

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## Copy the dist result
COPY ./dist/frontend /usr/share/nginx/html
