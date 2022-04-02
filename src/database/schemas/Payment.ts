import mongoose, { Schema, Document } from 'mongoose';

export interface IPayment  {
    id?: string,
    name: string,
    cpf: string,
    product: string,
    prize: number,
    createdAt?: Date,
    updatedAt?: Date
}

const PaymentSchema = new Schema<IPayment>(
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

const Payment = mongoose.model('Payment', PaymentSchema)

export {Payment}