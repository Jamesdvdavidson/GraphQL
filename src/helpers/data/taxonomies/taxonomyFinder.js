let a = require('./AllTaxonomies.json');
let fs = require('fs');
let _ = require('lodash');

let out = [];

a.data.services.services.map((val) => {
    val.service_taxonomys.map((item) => {
        if ((item.taxonomy.vocabulary === "BCC Services")) {
            out = _.unionBy([item.taxonomy,], out, "id");
        }
    });
});


try {
    fs.writeFileSync("./JSONOut.json", JSON.stringify(out));
} catch (err) {
    console.log(err);
}
