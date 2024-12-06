package com.example.aims_team_15;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class AimsTeam15Application {

	public static void main(String[] args) {
		SpringApplication.run(AimsTeam15Application.class, args);
	}

}
