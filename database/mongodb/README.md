# INFO

Mongodb database (Postgres) connector package

# PURPOSE

For extra user info and blog post, document storing

# REASON FOR CHOOSING THIS DATABASE

Can be used with supabase by applying some tricks. NoSQL database, so very easy to manage, specially with prisma.

# PACKAGES USED

```json
"devDependencies": {
"prisma": "^4.12.0"
},
"dependencies": {
"@prisma/client": "^4.12.0"
}
```

# METHOD

--1> Install prisma as dev dependency and then

<pre>
```bash
yarn add prisma --dev
yarn prisma init
```
</pre>

--2> Configure your environment variables and set the DATABASE_URL in the .env file
--3> Edit the schema.prisma file inside prisma folder
--4> Push your schema to your database

<pre>
```bash
prisma db push
```
</pre>

--5> Install the clientside connector package

<pre>
```bash
yarn add @prisma/client
```
</pre>
