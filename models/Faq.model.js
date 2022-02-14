import mongoose from 'mongoose'

const FaqSchema = new mongoose.Schema({
	question: { type: String },
	answer: { type: String }
})

export default mongoose.models.Faq || mongoose.model('Faq', FaqSchema)
