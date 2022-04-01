import "reflect-metadata";
import path from "path"
import {ApolloServer} from "apollo-server"
import {buildSchema} from "type-graphql"
import "dotenv/config"
import {UserResolve} from "./resolvers/UserResolver"

async function main(){
    const schema = await buildSchema({
        resolvers: [
            UserResolve
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