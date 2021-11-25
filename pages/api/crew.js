import data from './page_data.json'

export default function crewAPI(req, res) {
  res.status(200).json(JSON.stringify(data.crew))
}
