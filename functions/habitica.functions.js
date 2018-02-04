exports.returnHabiticaStatus = (ret, res) => {
    console.log(ret);
};

exports.scoreTaskReturn = (ret) => {
    console.log(ret);
};

exports.createTaskReturn = (ret) => {
    if (!ret.success) {
        console.log('Error: ' + data.error + ' message: ' + data.message);
        return;
    }
    console.log('task succesful created! name: ' + data.data.text + 'id: ' + data.data.id);

    candidate.save((err) => {
        if (err) {
            return res.status(400).send({
                message: Utils.getErrorMessageFromModel(err)
            });
        } else {
            res.json(candidate);
        }
    }); 
};