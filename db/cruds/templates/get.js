module.exports = (
    mongooseModel,
    params,
    sort = null,
    selectedFields = null
) => {
    return new Promise((resolve, reject) => {
        mongooseModel.find(params, selectedFields, sort, (err, texts) => {
            if (err) reject(`Error while finding text ${err}`)

            resolve(texts)
        })
    })
}
