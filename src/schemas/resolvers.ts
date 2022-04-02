import {buildSchema} from "type-graphql"
import {Payment} from "./Payment"

const schema = async () => await buildSchema( {
    resolvers: [Payment]
})