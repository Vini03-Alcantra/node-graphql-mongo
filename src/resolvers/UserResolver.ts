import {Arg, Mutation, Query, Resolver} from "type-graphql";
import crypto from "crypto"
import {User} from "../models/User"
import {PaymentController} from "../controller/PaymentController"
@Resolver()
export class UserResolve {
    private data: User[] = [];
    paymentController = new PaymentController()
    
    @Query(() => [User])
    async users(){
        return this.data
    }

    @Mutation(() => User)
    async createUser(
        @Arg('name') name: string,
        @Arg('cpf') cpf: string,
        @Arg('product') product: string,
        @Arg('prize') prize: number
    ) {
        const paymentCreated = this.paymentController.create({name, cpf, product, prize})    

        return paymentCreated
    }
}

