const fs = require('fs')
const path = require('path')

const rootPackageJsonPath = path.resolve(__dirname, './package.json')
const rootPackageJson = require(rootPackageJsonPath)
const newVersion = rootPackageJson.version

const packagesDir = path.resolve(__dirname, './packages')
fs.readdirSync(packagesDir).forEach((pkg) => {
    const pkgPath = path.join(packagesDir, pkg, 'package.json')
    if (fs.existsSync(pkgPath)) {
        const pkgJson = require(pkgPath)
        pkgJson.version = newVersion // Set all package versions to the root version
        fs.writeFileSync(pkgPath, JSON.stringify(pkgJson, null, 2) + '\n')
    }
})

console.log(`Updated all package versions to ${newVersion}`)
