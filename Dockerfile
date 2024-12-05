FROM nginx:alpine

COPY ./dist /usr/share/nginx/html

EXPOSE 80 456

CMD ["nginx", "-g", "daemon off;"]