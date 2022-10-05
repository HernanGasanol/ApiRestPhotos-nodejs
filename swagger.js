import swagger from 'swagger-jsdoc';
import swaggerUi from   'swagger-ui';


const options = {
    definition:{
        openapi:"3.0.0",
        ifno:{title:"api photos " , version:"version 1. 0.0"}
    }
    apis:["dist/routes"]
}