const url = "https://jsonplaceholder.typicode.com/users";
const axios = require('axios')


const getWebsites = async (req, res) => {
    const response = await axios.get(url)
    const data = await response.data
  
      const websites = data.map(item => item.website)
      return res.json(websites)
    }

const getUsers =  async (req, res) => {
    const response = await axios.get(url)
    const data = await response.data
    
    const users = data.map(user => {
      const {name, email, company } = user
      return {
        name,
        email,
        company: company.name
      }
    })

    const ordenedUsers = users.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })

    return res.json(ordenedUsers)
    }

const isSuite = async (req, res) => {
    const response = await axios.get(url)
    const data = await response.data
  
    const suites = data.filter(user => {
      return user.address.suite.includes('Suite')
    })

    return res.json(suites)
    }


    module.exports = { 
        isSuite,
        getUsers,
        getWebsites
    }