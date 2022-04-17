import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {PaymentController} from "../controller/PaymentController"
import {Payment} from "../schemas/Payment";

@Resolver()
export class PaymentResolve {    
    paymentController = new PaymentController()
    
    @Query(() => [Payment])
    async payments(){
        const payments = this.paymentController.find()
        return payments
    }

    @Query(() => Payment)
    async paymentID(id: string) {
        const payment = this.paymentController.findByID(id)
        return payment
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

