import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFile, readdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("MB05-001/002: Time is independently packable and imports only public Relay services", async () => {
  const manifest = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));
  const host = await readFile(new URL("../host-plugin.js", import.meta.url), "utf8");
  assert.equal(manifest.name, "relay-dsh-plugin-monitor-time");
  assert.equal(manifest.repository.url, "git+https://github.com/yangbobo2021/relay-dsh-plugin-monitor-time.git");
  assert.equal(manifest.publishConfig.access, "public");
  assert.equal(manifest.peerDependencies["relay-dsh-plugin-events"], "0.2.2");
  assert.equal(manifest.peerDependencies["relay-dsh-plugin-monitors"], "0.3.1");
  assert.match(host, /relayMonitorBundles/u);
  assert.match(host, /relayMonitorObservers/u);
  assert.doesNotMatch(host, /\.\.\/monitors|\.\.\/events|SQLite|RelayStore/u);

  for (const directory of ["src", "test"]) {
    for (const entry of await readdir(join(root, directory))) {
      if (!/\.(?:m?js)$/u.test(entry)) continue;
      const source = await readFile(join(root, directory, entry), "utf8");
      assert.doesNotMatch(source, /from\s+["']\.\.\/\.\.\//u, `${directory}/${entry} crosses the package boundary`);
    }
  }

  const packed = JSON.parse(execFileSync("npm", ["pack", "--ignore-scripts", "--dry-run", "--json"], {
    cwd: root,
    encoding: "utf8",
  }))[0];
  assert.ok(packed.files.some(file => file.path === "host-plugin.js"));
  assert.ok(packed.files.some(file => file.path === "cordis.patch.yml"));
  assert.equal(packed.files.some(file => /(?:^|\/)(?:node_modules|\.env)(?:\/|$)/u.test(file.path)), false);
});
