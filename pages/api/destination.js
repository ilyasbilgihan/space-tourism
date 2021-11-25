import data from './page_data.json'

export default function destinationAPI(req, res) {
  res.status(200).json(JSON.stringify(data.destination))
}
