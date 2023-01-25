

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk')
exports.handler = async (event, context) => {
    console.log('AWS SDK Version: ' + AWS.VERSION);
    console.log('CONTEXT: ' + JSON.stringify(context));
    //var identityId = context.identity.identityId;
    //console.log('Identity Id: ' + identityId);
    var idToken = JSON.parse(event.arguments.msg);
    console.log(`EVENT: ${JSON.stringify(event)}`);
    console.log(event.identity.claims.sub);
    var params = {
        IdentityPoolId: 'us-east-1:0d3f657f-d306-4ee1-98eb-c67d64206b9c', /* required */
        AccountId: '089627766064',
        Logins: {
            'cognito-idp.us-east-1.amazonaws.com/us-east-1_XGm7P4Oae': idToken.jwtToken
            /* '<IdentityProviderName>': ... */
        }
    };
    var cognitoidentity = new AWS.CognitoIdentity();
    try {
        const data = await cognitoidentity.getId(params).promise();
        console.log('getId returned: ' + data);
        return event.arguments.msg + '_' + JSON.stringify(data);
    } catch (err) {
        console.log('getId err: ' + err);
        return 'getId error!';
    }
    // return {
    //     statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
    //     body: JSON.stringify('Hello from Lambda!'),
    // };
    
};
