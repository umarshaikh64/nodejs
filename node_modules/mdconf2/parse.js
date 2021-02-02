"use strict";
/**
 * Created by user on 2018/2/4/004.
 */
const core_1 = require("./core");
/**
 * for old api user
 */
function parse(str, options = {
    oldParseApi: true,
}) {
    return core_1.parse(str, options);
}
parse.parse = core_1.parse;
parse.default = core_1.parse;
module.exports = parse;
//# sourceMappingURL=parse.js.map