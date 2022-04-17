import {Payment} from "../database/schemas/Payment"

interface ICreatePayment {
    name: string;
    cpf: string;
    product: string;
    prize: number;
}

class PaymentController {    
    async create({
        name,
        cpf,
        product,
        prize
    }: ICreatePayment) {
        const payment = await Payment.create({
            name,
            cpf,
            product,
            prize
        })

        return payment
    }

    async find(){
        const payments = await Payment.find()

        return payments
    }

    async findByID(id: string){
        const payment = await Payment.findById(id)        

        return payment
    }
}

export {PaymentController}