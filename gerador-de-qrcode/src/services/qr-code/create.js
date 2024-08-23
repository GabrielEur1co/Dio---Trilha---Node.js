import prompt from "prompt";
import PromptSchemaQrcode from "../../prompts-schema/prompt-qrcode.js";
import hendle from "./handle.js";

async function createQRcode() {
  prompt.get(PromptSchemaQrcode, hendle);

  prompt.start();
}

export default createQRcode;
