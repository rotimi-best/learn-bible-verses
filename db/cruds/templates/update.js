module.exports = (mongooseModel, findField, setField) => {
    return new Promise((resolve, reject) => {
        mongooseModel.updateMany(findField, { $set: setField }, (err, res) => {
            if (err) reject(`Error updating a Text field ${err}`)

            resolve(res)
        })
    })
}
