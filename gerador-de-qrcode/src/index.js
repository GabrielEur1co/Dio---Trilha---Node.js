import prompt from "prompt";
import PromptSchemaMain from "./prompts-schema/prompt-main.js";

import createQRcode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

(async function main() {
  prompt.get(PromptSchemaMain, async (err, chooce) => {
    if (err) console.log(err);
    if (chooce.select == 1) await createQRcode();
    if (chooce.select == 2) await createPassword();
  });

  prompt.start();
})();
