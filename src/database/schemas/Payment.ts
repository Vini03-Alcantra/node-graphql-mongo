import {mongoose} from "../index"

export interface IPayment {
    id?: string,
    name: string,
    cpf: string,
    product: string,
    prize: number,
    createdAt?: Date,
    updatedAt?: Date
}

const PaymentSchema = new mongoose.Schema<IPayment>(
    {
        name: {
            type: String,
            required: true 
        },
        cpf: {
            type: String,
            required: true 
        },
        product: {
            type: String,
            required: true 
        },
        prize: {
            type: Number,
            required: true 
        },
        createdAt: {
            type: Date,
            default: Date.now,
            required: false
        },
        updatedAt: {
            type: Date,
            default: Date.now,
            required: false
        },
    }
)

const Payment = mongoose.model<IPayment>('Payment', PaymentSchema)

export {Payment}