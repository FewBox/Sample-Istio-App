FROM nginx
WORKDIR /app
COPY . /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf