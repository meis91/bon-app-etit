package com.codecool.bonappetit.connection;

import java.sql.Connection;
import java.sql.DriverManager;

public class JDBCTemplate {
    public static void main(String args[]) {
        final String url =  "postgresql://${APP_DB_HOST}:${APP_DB_POST}/${APP_DB_NAME}";
        final String user = "${PSQL_USERNAME}";
        final String password = "${PSQL_PASSWORD}";

        Connection c = null;
        try {
            Class.forName("org.postgresql.Driver");
            c = DriverManager
                    .getConnection(url, user, password);
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
        System.out.println("Opened database successfully");
    }
}
