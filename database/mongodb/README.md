# INFO

Mongodb database (Postgres) connector package

# PURPOSE

For extra user info and blog post, document storing

# REASON FOR CHOOSING THIS DATABASE

Can be used with supabase by applying some tricks. NoSQL database, so very easy to manage, specially with prisma.

# PACKAGES USED

```json
"dependencies": {
    "mongoose": "^7.0.3"
  }
```

# METHOD

--1> Import the modules exported from index.ts
--2> Use :

```typescript
dbConnect();
```

before calling the database for any queries. it would use cached function. so no multiple reruns.
--3> create and use models from 'models dir.
--4> Now you can use any standard mongoose query for indexing
