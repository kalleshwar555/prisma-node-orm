DOCS at: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres

<!-- step 1 -->npm init -y
<!-- step 2 -->npm install prisma typescript ts-node @types/node --save-dev
<!-- step 3 -->create tsconfig.json file and below configuration

{
"compilerOptions": {
"sourceMap": true,
"outDir": "dist",
"strict": true,
"lib": ["esnext"],
"esModuleInterop": true
}
}

<!-- step 4 -->npx prisma init (creates prisma folder)

<!-- step 5 -->set up the db connection string in .env file
<!-- step 6 -->Create models in schema.prisma file
<!-- step 7 -->To get our model tables into DB we do migrations

<!-- Doing Migrations using prisma cli -->
<!-- step 8 -->npx prisma migrate dev --name init   (creates db with model tables)
<!-- step 9 -->whenever we do changes to our schema we need to run above command again

Prisma Schema ----> Migration Command --------> Postgres

<!-- Doing Introspection using prisma cli -->

If we have made changes into actual table and want to override those in Prisma schema we can run introspect as below
npx prisma introspect --force (It will write changes from db to schema file)
docs @ https://www.prisma.io/docs/concepts/components/introspection

<!-- Prisma GUI -->

npx prisma studio

<!-- To create rest api and use prisma ORM we need to install prisma client  -->

docs @ https://www.prisma.io/docs/concepts/components/prisma-client
