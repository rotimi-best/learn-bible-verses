module.exports = (mongooseModel, findField) => {
    return new Promise((resolve, reject) => {
        mongooseModel.deleteMany(findField, (err, res) => {
            if (err) reject(`Error updating a user field ${err}`)

            resolve(res)
        })
    })
}
