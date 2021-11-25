import data from './page_data.json'

export default function navbarAPI(req, res) {

  const menuItems = Object.keys(data).map(key => {
    return {
      name: key,
      link: `/${key}`
    }
  })

  res.status(200).json(JSON.stringify([{name: "home", link: "/"},...menuItems]))
}
