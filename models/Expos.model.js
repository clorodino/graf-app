import mongoose from 'mongoose'

const ExpoSchema = new mongoose.Schema({
	title: { type: String },
	guests: { type: String },
	date: { type: String },
	hour: { type: Date },
	location: { type: String },
	description: { type: String },
	imgUrl: { type: String },
	imgUrlPort: { type: String }
})

export default mongoose.models.Expo || mongoose.model('Expo', ExpoSchema)
