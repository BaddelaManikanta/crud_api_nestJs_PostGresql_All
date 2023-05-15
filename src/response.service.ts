/* eslint-disable prettier/prettier */
export function sendResponse(
  statusCode: number,
  statusMessage: string,
  Messaage: string,
) {
    return{
        "statusCode" : statusCode,
        "statusMEssage": statusMessage,
        "MEssage": Messaage
    }
}
