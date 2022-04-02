import {buildSchema} from "type-graphql"
import {Payment} from "./Payment"
import {PaymentResolve} from "../resolvers/PaymentResolver"

const schema = async () => await buildSchema( {
    resolvers: [Payment, PaymentResolve]
})