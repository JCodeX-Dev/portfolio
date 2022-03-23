FROM openjdk:17-alpine
ENV APP_HOME=/usr/app/
WORKDIR $APP_HOME
COPY target/portfolio-backend.jar portfolio-backend.jar
EXPOSE 443
CMD ["java","-jar","portfolio-backend.jar"]