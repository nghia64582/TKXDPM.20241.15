# Use a lightweight, multi-stage Dockerfile to optimize the image size

# Stage 1: Build the application
FROM maven:3.9.9 AS builder
WORKDIR /app
COPY pom.xml .
COPY src /app/src
RUN mvn clean package

# Stage 2: Create the runtime image
FROM openjdk:17-jdk-alpine
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]