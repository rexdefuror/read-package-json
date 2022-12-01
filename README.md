[![Build](https://github.com/rexdefuror/read-package-json/actions/workflows/pipeline.yml/badge.svg)](https://github.com/rexdefuror/read-package-json/actions/workflows/pipeline.yml/badge.svg)

## Description

Reads a package.json file and returns the contents as environment variables. Naming convention depends on the file name. For example, if the file is named `package.json`, the environment variables will be prefixed with `PACKAGE_`. If the file is named `testing.json`, the environment variables will be prefixed with `TESTING_`.



## Example Usage

```yaml
- name: Package.json info
  uses: rexdefuror/read-package-json@v1.0.5

- run: echo "name - ${{ env.PACKAGE_NAME }}"
- run: echo "version - ${{ env.PACKAGE_VERSION }}"
- run: echo "description - ${{ env.PACKAGE_DESCRIPTION }}"
```

### Example with custom file name

```yaml
- name: Package.json info
  uses: rexdefuror/read-package-json@v1.0.5
  with:
    file: testing.json

- run: echo "name - ${{ env.TESTING_NAME }}"
- run: echo "version - ${{ env.TESTING_VERSION }}"
- run: echo "description - ${{ env.TESTING_DESCRIPTION }}"
```

### Example with custom path

```yaml
- name: Package.json info
  uses: rexdefuror/read-package-json@v1.0.5
  with:
    file: testing.json
    path: ./src

- run: echo "name - ${{ env.TESTING_NAME }}"
- run: echo "version - ${{ env.TESTING_VERSION }}"
- run: echo "description - ${{ env.TESTING_DESCRIPTION }}"
```

## Inputs

### `file`

**Optional** The name of the file to read. Default `"package.json"`.

### `path`

**Optional** The path to the file. Default `"./"`.