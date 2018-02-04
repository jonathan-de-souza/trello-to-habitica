exports.getErrorMessageFromModel = (err) => {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        console.log(err);
        return 'Unknown server error';
    }
}