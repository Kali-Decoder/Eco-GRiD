const crypto = require('crypto');
async function getSHAHash(data) {
    let hash = await crypto.createHash('sha256');
    originalValue = await hash.update(data, 'utf-8');
    hashValue= await originalValue.digest('hex');
    return hashValue;
}

module.exports = {getSHAHash};
