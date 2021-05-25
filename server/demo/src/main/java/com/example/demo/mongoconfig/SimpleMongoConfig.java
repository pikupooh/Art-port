package com.example.demo.mongoconfig;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;

@Configuration
public class SimpleMongoConfig {

    @Value("${spring.data.mongodb.uri}")
    private String mongoUri;

    @Value("${spring.data.mongodb.database}")
    private String mongoDatabase;
    @Bean
    public MongoClient mongo(){

        ConnectionString connectionString = new ConnectionString(mongoUri+"/"+mongoDatabase);
        MongoClientSettings mongoClientSettings = MongoClientSettings.builder().applyConnectionString(connectionString).build();

        return MongoClients.create(mongoClientSettings);
    }

    @Bean
    public MongoTemplate mongoTemplate() throws  Exception{

        return new MongoTemplate(mongo(), "webtech");
    }
}
