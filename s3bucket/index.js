const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3")
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner")
const dotenv = require('dotenv');

dotenv.config();

const s3client = new S3Client({
    region: "ap-south-1",
    credentials: {
        accessKeyId: process.env.KEY_ID,
        secretAccessKey: process.env.SECRET_KEY,
    }
})


async function getObjectURL(key) {
    // here we can check that if user has the access of the data than only we give the sign url otherwise we not
    const cammand = new GetObjectCommand({
        Bucket: 'awsbucket-test-124',
        Key: key
    })

    const url = await getSignedUrl(s3client, cammand)

    return url
}

async function init() {
    console.log(await getObjectURL("view-3d-male-teacher (1).jpg"))
}

init()
