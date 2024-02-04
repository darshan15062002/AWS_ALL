module.exports.hello = async (event) => {
  return {

    statusCode: 200,
    header: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "hello from lamda"
    })
  }
}
