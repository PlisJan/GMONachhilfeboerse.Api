# GMONachhilfeboerse.Api

## Use this image:

### Docker run

#### Env File:

```yml
PORT=5000
DB_HOST=myserver.tld
DB_PORT=3306
DB_USER=mydbuser
DB_PASSWORD=mydbuserpassword
DB_DATABASE=myschema
JWT_SECRET=myGreateSecret
```
You can also take the `sample-env` file, fill it in, (and rename it to `.env`) and use it as env file in your docker run command
)
```bash
docker run --name nachhilfeboerse_api -p 5000:5000 --env-file=/path/to/your/.env ghcr.io/plisjan/gmonachhilfeboerse.api:latest
```

### Docker-Compose
```yaml
nhb_api:
    image: ghcr.io/plisjan/gmonachhilfeboerse.api:main
    environment:
        DB_HOST: nhb_database
        DB_PORT: 3306
        DB_USERNAME: <YOUR_DB_USERNAME>
        DB_PASSWORD: <YOUR_DB_PASSWORD>
        DB_SCHEMA: nachhilfeboerse  
        JWT_SECRET: myGreateSecrets
```
