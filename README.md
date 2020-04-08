
# json-schema-md-doc
## Generate markdown documentation for JSON Schemas
Try it out at [brianwendt.github.io/json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc)

Download [JSONSchemaMarkdown.js](https://raw.githubusercontent.com/BrianWendt/json-schema-md-doc/master/docs/lib/JSONSchemaMarkdown.js)

[Click here](https://github.com/BrianWendt/json-schema-md-doc/tree/master/samples/node) to see the Node example.

**NOTE:** JSONSchemaMarkdown.js supports [json-schema.org](https://json-schema.org/) `draft-7`. Previous drafts may not generate documentation correctly.

## Simple Implementation
**HTML**
``` html
<script src="https://brianwendt.github.io/json-schema-md-doc/lib/JSONSchemaMarkdown.js"></script>
```
**Javascript**
``` javascript
// simple schema for the example
const colors_schema = {
	"description": "Choose a color",
	"type": "string",
	"enum": ["red", "amber", "green"]
}

// create an instance of JSONSchemaMarkdown 
const Doccer = new JSONSchemaMarkdown();
// load the schema
Doccer.load(colors_schema);
// generate the markdown
console.log(Doccer.generate());
```
**Result**
``` markdown
 _Choose a color_

Type: `string`

Enum Values: 

 1. _"red"_
 2. _"amber"_
 3. _"green"_

_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_
```
For a more complete example, [check out this JSFiddle](https://jsfiddle.net/OntoDevelopment/a0hmcndu/).

## Extendabale
You may easily extend `JSONSchemaMarkdown.js` to customize the formatting of your markdown by overriding any method.
``` javascript
class MyDoccer extends JSONSchemaMarkdown {
    constructor(){
        super();
        this.footer = "Thanks for reading the documentation!";
    }
    valueBool(bool) {
        if (typeof bool === "string") {
            return bool;
        } else {
            return (bool) ? "TRUE" : "FALSE"; //uppercase instead of true/false
        }
    }
};
```

## Running the Action
You can run this as an action on your repository using the following:
``` yml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: Generate MD files
    steps:
      # Generates the MD files witht he action
      - name: Checkout
        uses: actions/checkout@v2
      - name: Generate MD files Step
        uses: Datalinker-Org/json-schema-md-doc@master
        id: generate_file
      # commits the updated MD files
      - name: Commit files
        run: |
          echo ${{ github.ref }}
          git add .
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git commit -m "ci: Automated build push" -a | exit 0
      - name: Push changes
        if: github.ref == 'refs/heads/master'
        uses: ad-m/github-push-action@master
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
```
