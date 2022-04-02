import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {User} from "../models/User"
import {PaymentController} from "../controller/PaymentController"
import {Payment} from "../schemas/Payment";

@Resolver()
export class PaymentResolve {
    private data: User[] = [];
    paymentController = new PaymentController()
    
    @Query(() => [User])
    async users(){
        return this.data
    }

    @Mutation(() => Payment)
    async createPayment(
        @Arg('name') name: string,
        @Arg('cpf') cpf: string,
        @Arg('product') product: string,
        @Arg('prize') prize: number
    ) {
        const paymentCreated = this.paymentController.create({name, cpf, product, prize})    

        return paymentCreated
    }
}

