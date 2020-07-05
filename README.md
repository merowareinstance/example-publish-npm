# example-publish-npm
Shows how to publish a node repo into npm using github actions. Not meant for library installation usage.

## Workflow Used

```yaml
name: Publish Release
on:
  release:
    types: 
      - published
jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v1
      with:
        node-version: '12.x'
    - run: npm ci
    - run: npm run lint
  publish-npm:
    needs: ci
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v1
      with:
        node-version: '12.x'
        registry-url: https://registry.npmjs.org/
    - run: npm ci
    - run: npm publish
      env: 
        NODE_AUTH_TOKEN: ${{ secrets.NODE_AUTH_TOKEN }}
```

## Authors

* **Edward Romero** - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details