import path from "path"
import { readFileSync } from "fs"
import { spawnSync } from "child_process"

const local_username = spawnSync("git", ["config", "user.name"], {
    encoding: "utf-8" });
/**
 * All constants relating to helpers or handlers
 */
export const ORIGIN_NAME = "origin"
export const UPSTREAM_NAME = "upstream"
export const QUARTZ_SOURCE_BRANCH = local_username.stdout.trim() + "-v4"
export const cwd = process.cwd()
export const cacheDir = path.join(cwd, ".quartz-cache")
export const cacheFile = "./quartz/.quartz-cache/transpiled-build.mjs"
export const fp = "./quartz/build.ts"
export const { version } = JSON.parse(readFileSync("./package.json").toString())
export const contentCacheFolder = path.join(cacheDir, "content-cache")
