import mongoose from 'mongoose'

const ActivitySchema = new mongoose.Schema({
	title: { type: String },
	guests: { type: String },
	date: { type: Date },
	hour: { type: Date },
	location: { type: String },
	description: { type: String },
	imgUrl: { type: String },
})

export default mongoose.models.Activity || mongoose.model('Activity', ActivitySchema)
