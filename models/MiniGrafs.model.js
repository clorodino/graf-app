import mongoose from 'mongoose'

const MiniGrafsSchema = new mongoose.Schema({
	activity: { type: String },
	author: { type: String },
	location: { type: String },
	date: { type: Date },
	hour: { type: Date },
	imgUrl: { type: String },
})

export default mongoose.models.MiniGraf || mongoose.model('MiniGraf', MiniGrafsSchema)
