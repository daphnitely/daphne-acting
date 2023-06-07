import lume from "lume/mod.ts";
import liquid from "lume/plugins/liquid.ts";

const site = lume();

site.use(liquid());
// pdf and images
site.copy("assets");
site.copy([".pdf"]);


export default site;
