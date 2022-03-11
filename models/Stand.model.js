import mongoose from 'mongoose'

const StandsSchema = new mongoose.Schema({
	name: { type: String },
})

export default mongoose.models.Stand || mongoose.model('Stand', StandsSchema)
