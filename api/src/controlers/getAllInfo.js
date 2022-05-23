const getApiInfo = require('./getApiInfo')
const getDbInfo = require('./getDbInfo')

const getAllInfo = async () => {
    try {
        const apiInfo = await getApiInfo();
        const dbInfo = await getDbInfo();
        const infoTotal = apiInfo.concat(dbInfo);
        

        //console.log(infoTotal)

        return infoTotal;
    } catch (error) {
        console.log(error);        
    }  

}

//getAllInfo()

module.exports = getAllInfo;