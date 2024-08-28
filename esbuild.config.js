const esbuild = require("esbuild");
esbuild.build({
  entryPoints: ["./public/home.js"],
  outfile: "./public/bundle.js",
  bundle: true,
  target: ["chrome60", "firefox60", "safari11", "edge20"],
  sourcemap: "inline",
}).catch(() => process.exit(1));

esbuild.build({
  entryPoints: ["./public/about.js"],
  outfile: "./public/bundleAbout.js",
  bundle: true,
  target: ["chrome60", "firefox60", "safari11", "edge20"],
  sourcemap: "inline",
}).catch(() => process.exit(1));
