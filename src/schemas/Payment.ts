import {Field, ID, ObjectType} from "type-graphql"

@ObjectType()
class Payment {
    @Field()
    _id: any;

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