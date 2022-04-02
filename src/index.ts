import "dotenv/config"
import "reflect-metadata";
import  "./database"
import path from "path"
import {ApolloServer} from "apollo-server"
import {buildSchema} from "type-graphql"
import {PaymentResolve} from "./resolvers/PaymentResolver"

async function main(){
    const schema = await buildSchema({
        resolvers: [
            PaymentResolve
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gpl')
    })

    const server = new ApolloServer({
        schema
    })

    const {url} = await server.listen()

    console.log(`Server running on ${url}`)
}

main()