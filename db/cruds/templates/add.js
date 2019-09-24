module.exports = (mongooseModel, data) => {
    return new Promise((resolve, reject) => {
        if (Array.isArray(data) && data.length) {
            mongooseModel.insertMany(data, (err, res) => {
                if (err) reject(`Error inserting into ${model}: ${err}`)

                resolve(res)
            })
        } else {
            mongooseModel.create(data, (err, res) => {
                if (err) reject(`Error inserting into ${model}: ${err}`)

                resolve(res)
            })
        }
    })
}
