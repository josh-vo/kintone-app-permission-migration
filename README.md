# kintone-app-permission-migration
kintone-app-permission-migration (kapm) is a command line utility for migration app, field permissions from app to app.

# Version
0.1.0

# How to Build

## Requirement
* Node v10
* NPM

### Getting the source code

```
$ git clone https://github.com/josh-vo/kintone-app-permission-migration.git
```

### Install dependencies
* Install all depdencies in package.json
```
$ cd kintone-app-permission-migration
$ npm install
```

### Build project
* Build all source code from typescript with target declared in tsconfig.json
```
$ tsc
```

### Compile source to binary file
* Using pkg compile nodejs into executable binary file cross-platform
```
$ npm run package:all
```

* The result binaries is included in *build* folder
```
$ cd build
$ ls
```

* These binaries are supported 
    * Windows
    * Linux
    * Mac OS X

* Usage
```
Usage: main [options]

kintone App Permission Migration Tool

Options:
  -V, --version              output the version number
  --appMigration             Migration app permissions
  --fieldMigration           Migration field permissions
  --fromDomain <domain>      From Domain name (specify the FQDN)
  --fromAppID <appID>        From App ID (default: 0) (default: "0")
  --fromUsername <username>  From User's log in name (default: "")
  --fromPassword <password>  From User's password (default: "")
  --toDomain <domain>        To Domain name (specify the FQDN)
  --toAppID <appID>          To App ID (default: 0) (default: "0")
  --toUsername <username>    To User's log in name (default: "")
  --toPassword <password>    To User's password (default: "")
  -h, --help                 output usage information
```

# Examples
## Migrantion field permissions
```
$ kapm --fieldMigration --fromDomain <From Domain> --fromAppID <From App ID> --fromUsername <From Login name> --fromPassword <From Password> --toDomain <To Domain> --toAppID <To App ID> --toUsername <To Login nanme> --toPassword <To Password>
```
## Migrantion app permissions
```
$ kapm --appMigration --fromDomain <From Domain> --fromAppID <From App ID> --fromUsername <From Login name> --fromPassword <From Password> --toDomain <To Domain> --toAppID <To App ID> --toUsername <To Login nanme> --toPassword <To Password>
```

## Restriction
* 

## License

GPL v2

## Copyright

Copyright(c) Cybozu, Inc.
