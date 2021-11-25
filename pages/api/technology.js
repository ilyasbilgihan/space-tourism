import data from './page_data.json'

export default function technologyAPI(req, res) {
  res.status(200).json(JSON.stringify(data.technology))
}
