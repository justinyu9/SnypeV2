import { APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'
import dependency from './lib/dep'

// eslint-disable-next-line @typescript-eslint/require-await
export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  }
}

// eslint-disable-next-line @typescript-eslint/require-await
export const hi: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'function two is up!',
        version: 2,
        dependency: dependency(),
      },
      null,
      2
    ),
  }
}
