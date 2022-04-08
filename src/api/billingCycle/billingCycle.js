const restfull = require('node-restful')
const mongoose = restfull.mongoose

//Isso aqui ao meu ver é o equivalente do CREATE TABLE de um banco de dados
const credtSchema = new mongoose.Schema({
    name: {type: String, required:[true, 'Informe o nome do crédito']},
    value: {type: Number, min:0, required: [true, 'Informe o nome do credito']}
})

const debtSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: [true, 'Informe o valor do débito!'] },
    status: { type: String, required: false, uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const billingCycleSchema = new mongoose.Schema({
    name: {type: String, required:true},
    month: {type: Number, min:1, max:12, required:true},
    year: {type: Number, min:1970, max:2100, required:true},
    credits:[credtSchema],
    debts:[debtSchema]
})

module.exports = restfull.model('BillingCycle',billingCycleSchema)