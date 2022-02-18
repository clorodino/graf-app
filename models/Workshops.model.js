import mongoose from 'mongoose'

const WorkshopSchema = new mongoose.Schema({
	title: { type: String },
	teacher: { type: String },
	date: { type: Date },
	hour: { type: Date },
	location: { type: String },
	description: { type: String },
	imgUrl: { type: String },
	price: { type: Number },
	full: { type: Boolean },
	email: {type: String}
})

export default mongoose.models.Workshop || mongoose.model('Workshop', WorkshopSchema)
