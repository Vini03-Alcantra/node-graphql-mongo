import {Field, ID, ObjectType} from "type-graphql";
import {IPayment} from "../database/schemas/Payment"

@ObjectType()
class Payment implements IPayment{
    @Field()
    _id: string;

    @Field()
    name: string

    @Field()
    cpf: string

    @Field()
    product: string;

    @Field()
    prize: number

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date
}

export {Payment}