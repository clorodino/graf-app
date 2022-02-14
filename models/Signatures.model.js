import mongoose from 'mongoose'

const SignaturesSchema = new mongoose.Schema({
	author: { type: String },
	stand: { type: String },
	date: { type: Date },
	hour: { type: Date },
	imgUrl: { type: String },
})

export default mongoose.models.Signature || mongoose.model('Signature', SignaturesSchema)
