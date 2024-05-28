const { format } = require("path");

module.exports = {
    to_json: (data) => {return JSON.stringify(data),
    toJSON: (data) => JSON.stringify(data),
},

post_preview: (body) => {
    const bodyArr = body.split(/\s+/);
    const previewArr = bodyArr.slice(0, 10);
    const preview = previewArr.join(' ') + (words.length > 10 ? '...' : '');
    return preview  
},

equals: (arg1, arg2) => {
    if (arg1 === arg2) {
        return true;
    } else {
        return false;
    }       
},

format_date: (date) => {
    return date.toLocaleDateString();
},
};



